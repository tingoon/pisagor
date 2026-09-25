import type {
  DatePickerPresetTriggerProps,
  DatePickerContentProps as DatePickerPrimitiveContentProps,
  DatePickerInputProps as DatePickerPrimitiveInputProps,
  DatePickerRootProps as DatePickerPrimitiveRootProps,
  DatePickerTriggerProps as DatePickerPrimitiveTriggerProps,
  DatePickerValueTextProps,
} from "@ark-ui/solid/date-picker";
import {
  DatePicker as DatePickerPrimitive,
  useDatePickerContext,
} from "@ark-ui/solid/date-picker";
import { calendarRecipe } from "@pisagor/recipes/calendar";
import { datePickerRecipe } from "@pisagor/recipes/date-picker";
import type { JSX } from "solid-js";
import { Show, splitProps } from "solid-js";
import { Portal } from "solid-js/web";
import { useClearableInput } from "../../hooks";
import { CalendarIcon, ClockIcon, XIcon } from "../../internal/icons";
import { Calendar } from "../calendar";
import { CalendarSlotsContext } from "../calendar/calendar.context";
import { Input, type InputProps } from "../input";
import { InputGroup } from "../input-group";
import { DatePickerSlotsContext, useDatePicker } from "./date-picker.context";

type FormControlVariant = "primary" | "secondary";

export interface DatePickerTriggerProps
  extends DatePickerPrimitiveTriggerProps {
  clearable?: boolean;
}

export interface DatePickerInputProps
  extends Omit<DatePickerPrimitiveInputProps, "size">,
    InputProps {
  clearable?: boolean;
}

export interface DatePickerTimerProps extends Omit<InputProps, "recipe"> {
  clearable?: boolean;
  recipe?: typeof datePickerRecipe;
}

export interface DatePickerContentProps
  extends DatePickerPrimitiveContentProps {
  showCalendar?: boolean;
}

export interface DatePickerRootProps
  extends Omit<DatePickerPrimitiveRootProps, "onValueChange"> {
  variant?: FormControlVariant;
  onValueChange?: (value: DatePickerRootProps["value"]) => void;
  recipe?: typeof datePickerRecipe;
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
  const slots = () => (local.recipe ?? datePickerRecipe)();
  const calendarSlots = () => (local.calendarRecipe ?? calendarRecipe)();

  return (
    <DatePickerSlotsContext value={{ slots: slots() }}>
      <CalendarSlotsContext value={{ slots: calendarSlots() }}>
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
    </DatePickerSlotsContext>
  );
}

export function DatePickerTrigger(props: DatePickerTriggerProps): JSX.Element {
  const [local, rest] = splitProps(props, ["clearable", "children", "class"]);
  const picker = useDatePicker();
  const slots = () => picker?.slots ?? datePickerRecipe();

  return (
    <DatePickerPrimitive.Control class={slots().control()}>
      <DatePickerPrimitive.Trigger
        {...rest}
        class={slots().trigger({ class: local.class })}
      >
        {local.children}
      </DatePickerPrimitive.Trigger>
      <Show when={local.clearable ?? false}>
        <DatePickerClearTrigger />
      </Show>
    </DatePickerPrimitive.Control>
  );
}

export function DatePickerInput(props: DatePickerInputProps): JSX.Element {
  const [local, rest] = splitProps(props, ["size", "clearable", "class"]);
  const picker = useDatePicker();
  const slots = () => picker?.slots ?? datePickerRecipe();

  return (
    <DatePickerPrimitive.Control>
      <InputGroup class={local.class} size={local.size}>
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
                <CalendarIcon aria-hidden class={slots().icon()} />
              </InputGroup.Button>
            )}
          />
        </InputGroup.Addon>
      </InputGroup>
    </DatePickerPrimitive.Control>
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
            aria-label="Clear"
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
  const picker = useDatePicker();
  const slots = () => picker?.slots ?? (local.recipe ?? datePickerRecipe)();

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
    <InputGroup size={local.size} variant={local.variant}>
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
  const picker = useDatePicker();
  const slots = () => picker?.slots ?? datePickerRecipe();
  const showCalendar = () => local.showCalendar ?? true;

  return (
    <Portal>
      <DatePickerPrimitive.Positioner>
        <DatePickerPrimitive.Content
          {...rest}
          class={slots().content({ class: local.class })}
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
  const picker = useDatePicker();
  const slots = () => picker?.slots ?? datePickerRecipe();
  return (
    <DatePickerPrimitive.ValueText
      {...rest}
      class={slots().valueText({ class: local.class })}
    />
  );
}

export function DatePickerPresetTrigger(
  props: DatePickerPresetTriggerProps,
): JSX.Element {
  return <Calendar.PresetTrigger {...props} />;
}
