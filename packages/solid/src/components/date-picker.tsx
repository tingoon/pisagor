import {
  DatePicker as DatePickerPrimitive,
  type DatePickerContentProps as DatePickerPrimitiveContentProps,
  type DatePickerInputProps as DatePickerPrimitiveInputProps,
  type DatePickerPresetTriggerProps,
  type DatePickerRootProps as DatePickerPrimitiveRootProps,
  type DatePickerTriggerProps as DatePickerPrimitiveTriggerProps,
  type DatePickerValueTextProps,
  useDatePickerContext,
} from "@ark-ui/solid";
import type { DatePickerProps as BaseDatePickerProps } from "@pisagor/props";
import { calendarRecipe, datePickerRecipe } from "@pisagor/recipes";
import type { ComponentProps, JSX } from "solid-js";
import {
  createMemo,
  createContext as createSolidContext,
  Show,
  splitProps,
  useContext,
} from "solid-js";
import { Portal } from "solid-js/web";
import { useClearableInput } from "../hooks";
import {
  CalendarIcon,
  ClockIcon,
  XIcon,
  createSlotRecipeContext,
} from "../internal";
import { createContext } from "../utils";
import { Calendar, CalendarSlotsContext } from "./calendar";
import { Input, type InputProps } from "./input";
import { InputGroup } from "./input-group";
import { useTranslation } from "./provider/context";

// #region Context
const { Context: DatePickerSlotsContext, useStyles: useDatePickerStyles } =
  createSlotRecipeContext({
    name: "DatePicker",
    recipe: datePickerRecipe,
  });

type FormControlVariant = "primary" | "secondary";

const { DatePickerVariantContext, useDatePickerVariant } = createContext(
  "DatePickerVariant",
)<{ readonly variant?: FormControlVariant }>({ strict: false });

/** Recipe styles plus the optional shell `variant` (getters stay reactive). */
function useDatePicker() {
  const styles = useDatePickerStyles();
  const options = useDatePickerVariant();
  return {
    get slots() {
      return styles.slots;
    },
    get variant() {
      return options?.variant;
    },
  };
}
// #endregion

export interface DatePickerTriggerProps extends DatePickerPrimitiveTriggerProps {
  clearable?: boolean;
}

export interface DatePickerInputProps
  extends Omit<DatePickerPrimitiveInputProps, "size">, InputProps {
  clearable?: boolean;
}

export interface DatePickerTimerProps
  extends Omit<InputProps, "recipe">, BaseDatePickerProps {
  clearable?: boolean;
}

export interface DatePickerContentProps extends DatePickerPrimitiveContentProps {
  showCalendar?: boolean;
}

export interface DatePickerRootProps
  extends
    Omit<DatePickerPrimitiveRootProps, "onValueChange">,
    BaseDatePickerProps {
  variant?: FormControlVariant;
  onValueChange?: (value: DatePickerRootProps["value"]) => void;
  calendarRecipe?: typeof calendarRecipe;
}

export function DatePickerRoot(props: DatePickerRootProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "variant",
    "positioning",
    "children",
    "onValueChange",
    "recipe",
    "calendarRecipe",
  ]);
  const slots = createMemo(() => (local.recipe ?? datePickerRecipe)());
  const calendarSlots = createMemo(() =>
    (local.calendarRecipe ?? calendarRecipe)(),
  );

  return (
    <DatePickerSlotsContext
      value={{
        get slots() {
          return slots();
        },
        variants: {},
      }}
    >
      <DatePickerVariantContext
        value={{
          get variant() {
            return local.variant;
          },
        }}
      >
        <CalendarSlotsContext
          value={{
            get slots() {
              return calendarSlots();
            },
            variants: {},
          }}
        >
          <DatePickerPrimitive.Root
            {...rest}
            inline={false}
            onValueChange={
              local.onValueChange
                ? (details) => local.onValueChange?.(details.value)
                : undefined
            }
            positioning={local.positioning ?? { placement: "top" }}
          >
            {local.children}
          </DatePickerPrimitive.Root>
        </CalendarSlotsContext>
      </DatePickerVariantContext>
    </DatePickerSlotsContext>
  );
}

/**
 * True inside a date picker control, so nested parts do not render a second
 * one.
 */
const DatePickerInsideControlContext = createSolidContext(false);

export function DatePickerControl(
  props: ComponentProps<typeof DatePickerPrimitive.Control>,
): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const styles = useDatePicker();

  return (
    <DatePickerInsideControlContext.Provider value={true}>
      <DatePickerPrimitive.Control
        {...rest}
        class={styles.slots.control({ class: local.class })}
      />
    </DatePickerInsideControlContext.Provider>
  );
}

function MaybeDatePickerControl(props: {
  children: JSX.Element;
  class?: string;
}): JSX.Element {
  const insideControl = useContext(DatePickerInsideControlContext);

  if (insideControl) {
    return props.children;
  }

  return (
    <DatePickerInsideControlContext.Provider value={true}>
      <DatePickerPrimitive.Control class={props.class}>
        {props.children}
      </DatePickerPrimitive.Control>
    </DatePickerInsideControlContext.Provider>
  );
}

export function DatePickerTrigger(props: DatePickerTriggerProps): JSX.Element {
  const [local, rest] = splitProps(props, ["clearable", "children", "class"]);
  const styles = useDatePicker();

  return (
    <MaybeDatePickerControl class={styles.slots.control()}>
      <DatePickerPrimitive.Trigger
        {...rest}
        class={styles.slots.trigger({ class: local.class })}
      >
        {local.children}
      </DatePickerPrimitive.Trigger>
      <Show when={local.clearable ?? false}>
        <DatePickerClearTrigger />
      </Show>
    </MaybeDatePickerControl>
  );
}

export function DatePickerInput(props: DatePickerInputProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "size",
    "variant",
    "clearable",
    "class",
  ]);
  const styles = useDatePicker();

  return (
    <MaybeDatePickerControl>
      <InputGroup
        class={local.class}
        size={local.size}
        variant={local.variant ?? styles.variant}
      >
        <DatePickerPrimitive.Input
          {...rest}
          asChild={(inputProps) => (
            <InputGroup.Input {...inputProps()} clearable={false} />
          )}
        />
        <InputGroup.Addon align="inline-end">
          <Show when={local.clearable ?? false}>
            <DatePickerClearTrigger />
          </Show>
          <DatePickerPrimitive.Trigger
            asChild={(triggerProps) => (
              <InputGroup.Button
                {...triggerProps()}
                data-part="button"
                data-scope="input-group"
                size="icon-xs"
                variant="ghost"
              >
                <CalendarIcon aria-hidden class={styles.slots.icon()} />
              </InputGroup.Button>
            )}
          />
        </InputGroup.Addon>
      </InputGroup>
    </MaybeDatePickerControl>
  );
}

export function DatePickerClearTrigger(): JSX.Element {
  const api = useDatePickerContext();

  return (
    <Show when={!api().disabled && !api().readOnly && api().value.length > 0}>
      <DatePickerPrimitive.ClearTrigger
        asChild={(triggerProps) => (
          <InputGroup.Button
            {...triggerProps()}
            aria-label={useTranslation("datePicker.clear")}
            size="icon-xs"
            type="button"
            variant="ghost"
          >
            <XIcon />
          </InputGroup.Button>
        )}
      />
    </Show>
  );
}

export function DatePickerTimer(props: DatePickerTimerProps): JSX.Element {
  const [local] = splitProps(props, [
    "clearable",
    "defaultValue",
    "disabled",
    "readOnly",
    "value",
    "id",
    "ref",
    "onChange",
    "class",
    "classNames",
    "recipe",
    "size",
    "variant",
  ]);
  // Timer may render outside Root, so both contexts are optional here.
  const pickerStyles = useContext(DatePickerSlotsContext);
  const options = useDatePickerVariant();
  const slots = () =>
    pickerStyles?.slots ?? (local.recipe ?? datePickerRecipe)();

  const { canClear, handleChange, handleClear, mergedRef } =
    useClearableInput<HTMLInputElement>({
      get clearable() {
        return local.clearable ?? false;
      },
      get defaultValue() {
        return local.defaultValue;
      },
      get disabled() {
        return local.disabled;
      },
      get onChange() {
        return local.onChange
          ? (
              event: Event & {
                currentTarget: HTMLInputElement;
                target: HTMLInputElement;
              },
            ) => {
              const handler = local.onChange;
              if (typeof handler === "function") {
                (handler as (e: typeof event) => void)(event);
              }
            }
          : undefined;
      },
      get readOnly() {
        return local.readOnly;
      },
      get ref() {
        return typeof local.ref === "function" ? local.ref : undefined;
      },
      get value() {
        return local.value;
      },
    });

  return (
    <InputGroup size={local.size} variant={local.variant ?? options?.variant}>
      <InputGroup.Addon>
        <ClockIcon />
      </InputGroup.Addon>
      <InputGroup.Input
        class={slots().timer({ class: local.class })}
        classNames={local.classNames}
        clearable={false}
        defaultValue={local.defaultValue}
        disabled={local.disabled}
        id={local.id}
        onChange={handleChange}
        readOnly={local.readOnly}
        ref={mergedRef}
        step="1"
        type="time"
        value={local.value}
      />
      <Show when={canClear()}>
        <InputGroup.Addon align="inline-end">
          <Input.ClearButton onClear={handleClear} />
        </InputGroup.Addon>
      </Show>
    </InputGroup>
  );
}

export function DatePickerContent(props: DatePickerContentProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "showCalendar",
    "children",
    "class",
  ]);
  const styles = useDatePicker();
  const showCalendar = () => local.showCalendar ?? true;

  return (
    <Portal>
      <DatePickerPrimitive.Positioner>
        <DatePickerPrimitive.Content
          {...rest}
          class={styles.slots.content({ class: local.class })}
        >
          <Show
            fallback={local.children}
            when={showCalendar() && local.children === undefined}
          >
            <Calendar.ViewControl>
              <Calendar.PrevTrigger />
              <Calendar.MonthSelect />
              <Calendar.YearSelect />
              <Calendar.NextTrigger />
            </Calendar.ViewControl>
            <Calendar.Table>
              <Calendar.WeekDays />
              <Calendar.TableDays />
            </Calendar.Table>
          </Show>
        </DatePickerPrimitive.Content>
      </DatePickerPrimitive.Positioner>
    </Portal>
  );
}

export function DatePickerValueText(
  props: DatePickerValueTextProps,
): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const styles = useDatePicker();
  return (
    <DatePickerPrimitive.ValueText
      {...rest}
      class={styles.slots.valueText({ class: local.class })}
    />
  );
}

export function DatePickerPresetTrigger(
  props: DatePickerPresetTriggerProps,
): JSX.Element {
  return <Calendar.PresetTrigger {...props} />;
}

export type {
  DatePickerPresetTriggerProps,
  DatePickerValueTextProps,
} from "@ark-ui/solid";

export type { DatePickerRootProps as DatePickerProps };

export const DatePicker = Object.assign(DatePickerRoot, {
  ClearTrigger: DatePickerClearTrigger,
  Content: DatePickerContent,
  Control: DatePickerControl,
  Input: DatePickerInput,
  PresetTrigger: DatePickerPresetTrigger,
  TimeInput: DatePickerTimer,
  /** @deprecated Use `TimeInput`. */
  Timer: DatePickerTimer,
  Trigger: DatePickerTrigger,
  ValueText: DatePickerValueText,
});
