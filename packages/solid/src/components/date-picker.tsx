import {
  DatePicker as DatePickerPrimitive,
  useDatePickerContext,
} from "@ark-ui/solid";
import type {
  DatePickerContentProps as DatePickerContentPrimitiveProps,
  DatePickerInputProps as DatePickerInputPrimitiveProps,
  DatePickerPresetTriggerProps,
  DatePickerRootProps as DatePickerRootPrimitiveProps,
  DatePickerTriggerProps as DatePickerTriggerPrimitiveProps,
  DatePickerValueTextProps,
} from "@ark-ui/solid";
import type { DatePickerRootContract } from "@pisagor/contracts";
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
import { useLocale } from "./provider/context";
import { useFormControlSurface } from "./surface/use-form-control-surface";

// #region Context
const {
  Context: DatePickerSlotsContext,
  withContext,
  useStyles,
} = createSlotRecipeContext({
  name: "DatePicker",
  recipe: datePickerRecipe,
});

type FormControlVariant = "primary" | "secondary";

const { DatePickerVariantContext, useDatePickerVariant } = createContext(
  "DatePickerVariant",
)<{ readonly variant?: FormControlVariant }>({ strict: false });

/** Recipe styles plus the optional shell `variant` (getters stay reactive). */
function useDatePicker() {
  const styles = useStyles();
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

export interface DatePickerTriggerProps extends DatePickerTriggerPrimitiveProps {
  clearable?: boolean;
}

export interface DatePickerInputProps
  extends Omit<DatePickerInputPrimitiveProps, "size">, InputProps {
  clearable?: boolean;
}

export interface DatePickerTimerProps
  extends Omit<InputProps, "recipe">, DatePickerRootContract {
  clearable?: boolean;
}

export interface DatePickerContentProps extends DatePickerContentPrimitiveProps {
  showCalendar?: boolean;
}

export interface DatePickerRootProps
  extends
    Omit<DatePickerRootPrimitiveProps, "onValueChange">,
    DatePickerRootContract {
  variant?: FormControlVariant;
  onValueChange?: (value: DatePickerRootProps["value"]) => void;
  calendarRecipe?: typeof calendarRecipe;
}

function Root(props: DatePickerRootProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "variant",
    "positioning",
    "children",
    "onValueChange",
    "recipe",
    "calendarRecipe",
  ]);
  const slots = createMemo(() => (local.recipe ?? datePickerRecipe)());
  const surfaceVariant = useFormControlSurface();
  const calendarResolved = () => ({
    surfaceVariant,
    variant: local.variant,
  });
  const calendarSlots = createMemo(() =>
    (local.calendarRecipe ?? calendarRecipe)(calendarResolved()),
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
            get variants() {
              return calendarResolved() as never;
            },
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

const ControlBase = withContext<
  ComponentProps<typeof DatePickerPrimitive.Control>
>(DatePickerPrimitive.Control, {
  name: "Control",
});

function Control(
  props: ComponentProps<typeof DatePickerPrimitive.Control>,
): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);

  return (
    <DatePickerInsideControlContext.Provider value={true}>
      <ControlBase {...rest} class={local.class} />
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
      <ControlBase class={props.class}>{props.children}</ControlBase>
    </DatePickerInsideControlContext.Provider>
  );
}

const TriggerBase = withContext<DatePickerTriggerProps>(
  DatePickerPrimitive.Trigger,
  {
    name: "Trigger",
  },
);

function Trigger(props: DatePickerTriggerProps): JSX.Element {
  const [local, rest] = splitProps(props, ["clearable", "children", "class"]);
  const styles = useDatePicker();

  return (
    <MaybeDatePickerControl class={styles.slots.control()}>
      <TriggerBase {...rest} class={local.class}>
        {local.children}
      </TriggerBase>
      <Show when={local.clearable ?? false}>
        <ClearTrigger />
      </Show>
    </MaybeDatePickerControl>
  );
}

function InputPart(props: DatePickerInputProps): JSX.Element {
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
            <ClearTrigger />
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

function ClearTrigger(): JSX.Element {
  const { m } = useLocale();
  const api = useDatePickerContext();

  return (
    <Show when={!api().disabled && !api().readOnly && api().value.length > 0}>
      <DatePickerPrimitive.ClearTrigger
        asChild={(triggerProps) => (
          <InputGroup.Button
            {...triggerProps()}
            aria-label={m("datePicker.clear")}
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

function TimeInput(props: DatePickerTimerProps): JSX.Element {
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

const ContentBase = withContext<DatePickerContentProps>(
  DatePickerPrimitive.Content,
  {
    name: "Content",
  },
);

function Content(props: DatePickerContentProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "showCalendar",
    "children",
    "class",
  ]);
  const showCalendar = () => local.showCalendar ?? true;

  return (
    <Portal>
      <DatePickerPrimitive.Positioner>
        <ContentBase {...rest} class={local.class}>
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
        </ContentBase>
      </DatePickerPrimitive.Positioner>
    </Portal>
  );
}

const ValueText = withContext<DatePickerValueTextProps>(
  DatePickerPrimitive.ValueText,
  { name: "ValueText" },
);

function PresetTrigger(props: DatePickerPresetTriggerProps): JSX.Element {
  return <Calendar.PresetTrigger {...props} />;
}

export type {
  DatePickerPresetTriggerProps,
  DatePickerValueTextProps,
} from "@ark-ui/solid";

export type { DatePickerRootProps as DatePickerProps };

export const DatePicker = Object.assign(Root, {
  ClearTrigger,
  Content,
  Control,
  Input: InputPart,
  PresetTrigger,
  TimeInput,
  /** @deprecated Use `DatePicker.TimeInput`. */
  Timer: TimeInput,
  Trigger,
  ValueText,
});
