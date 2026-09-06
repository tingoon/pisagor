import type {
  DatePickerPresetTriggerProps,
  DatePickerContentProps as DatePickerPrimitiveContentProps,
  DatePickerInputProps as DatePickerPrimitiveInputProps,
  DatePickerRootProps as DatePickerPrimitiveRootProps,
  DatePickerTriggerProps as DatePickerPrimitiveTriggerProps,
  DatePickerValueTextProps,
} from "@ark-ui/react/date-picker";
import { DatePicker as DatePickerPrimitive, useDatePickerContext } from "@ark-ui/react/date-picker";
import { Portal } from "@ark-ui/react/portal";
import { CalendarIcon, ClockIcon, XIcon } from "@phosphor-icons/react";
import { calendarRecipe } from "@pisagor/recipes/calendar";
import { datePickerRecipe } from "@pisagor/recipes/date-picker";

import { useClearableInput } from "../../hooks";
import { Button } from "../button";
import { Calendar } from "../calendar";
import { CalendarSlotsContext } from "../calendar/calendar.context";
import { Input, type InputProps } from "../input";
import { InputGroup } from "../input-group";
import { DatePickerSlotsContext, useDatePicker } from "./date-picker.context";

// #region Types
type FormControlVariant = "primary" | "secondary";

export interface DatePickerTriggerProps extends DatePickerPrimitiveTriggerProps {
  /**
   * Whether to show a clear button when a date is selected.
   *
   * @defaultValue false
   */
  clearable?: boolean;
}

export interface DatePickerInputProps
  extends Omit<DatePickerPrimitiveInputProps, "size">,
    InputProps {
  /**
   * Whether to show a clear button when the input has a value.
   *
   * @defaultValue false
   */
  clearable?: boolean;
}

export interface DatePickerTimerProps extends InputProps {
  /**
   * Whether to show a clear button when the input has a value.
   *
   * @defaultValue false
   */
  clearable?: boolean;
}

export interface DatePickerContentProps extends DatePickerPrimitiveContentProps {
  /**
   * When `true` (default), auto-renders the standard month/year navigation and
   * day grid inside the content — no need to add calendar sub-components manually.
   */
  showCalendar?: boolean;
}

export interface DatePickerRootProps extends Omit<DatePickerPrimitiveRootProps, "onValueChange"> {
  /** Visual shell variant. Defaults to `primary`. */
  variant?: FormControlVariant;
  onValueChange?: (value: DatePickerRootProps["value"]) => void;
  /**
   * Style recipe. Defaults to `datePickerRecipe` from `@pisagor/recipes/date-picker`.
   *
   * @defaultValue datePickerRecipe
   */
  recipe?: typeof datePickerRecipe;
  /**
   * Calendar style recipe. Defaults to `calendarRecipe` from `@pisagor/recipes/calendar`.
   *
   * @defaultValue calendarRecipe
   */
  calendarRecipe?: typeof calendarRecipe;
}

// #endregion

// #region Parts
export function DatePickerRoot({
  variant,
  positioning = { placement: "top" },
  children,
  onValueChange,
  recipe = datePickerRecipe,
  calendarRecipe: calendarRecipeProp = calendarRecipe,
  ...rest
}: DatePickerRootProps) {
  const slots = recipe();
  const calendarSlots = calendarRecipeProp();

  return (
    <DatePickerSlotsContext value={{ slots }}>
      <CalendarSlotsContext value={{ slots: calendarSlots }}>
        <DatePickerPrimitive.Root
          {...rest}
          inline={false}
          onValueChange={onValueChange ? (details) => onValueChange(details.value) : undefined}
          positioning={positioning}
        >
          {children}
        </DatePickerPrimitive.Root>
      </CalendarSlotsContext>
    </DatePickerSlotsContext>
  );
}

export function DatePickerTrigger({
  clearable = false,
  children,
  className,
  ...rest
}: DatePickerTriggerProps) {
  const { slots } = useDatePicker();

  return (
    <DatePickerPrimitive.Control className={slots.control()}>
      <DatePickerPrimitive.Trigger {...rest} className={slots.trigger({ className })}>
        {children}
      </DatePickerPrimitive.Trigger>
      {clearable ? <DatePickerClearTrigger /> : null}
    </DatePickerPrimitive.Control>
  );
}

export function DatePickerInput({
  size,
  clearable = false,
  className,
  ...rest
}: DatePickerInputProps) {
  const { slots } = useDatePicker();

  return (
    <DatePickerPrimitive.Control>
      <InputGroup className={className} size={size}>
        <DatePickerPrimitive.Input {...rest} asChild>
          <InputGroup.Input clearable={false} />
        </DatePickerPrimitive.Input>

        <InputGroup.Addon align="inline-end">
          {clearable ? <DatePickerClearTrigger /> : null}
          <InputGroup.Button
            asChild
            data-part="button"
            data-scope="input-group"
            size="icon-xs"
            variant="ghost"
          >
            <DatePickerPrimitive.Trigger asChild>
              <Button aria-label="Open calendar" size="icon-md" variant="ghost">
                <CalendarIcon aria-hidden className={slots.icon()} />
              </Button>
            </DatePickerPrimitive.Trigger>
          </InputGroup.Button>
        </InputGroup.Addon>
      </InputGroup>
    </DatePickerPrimitive.Control>
  );
}

export function DatePickerClearTrigger() {
  const api = useDatePickerContext();

  if (api.disabled || api.readOnly || api.value.length === 0) {
    return null;
  }

  return (
    <DatePickerPrimitive.ClearTrigger asChild>
      <InputGroup.Button aria-label="Clear" size="icon-xs" type="button" variant="ghost">
        <XIcon />
      </InputGroup.Button>
    </DatePickerPrimitive.ClearTrigger>
  );
}

export function DatePickerTimer({
  clearable = false,
  defaultValue,
  disabled,
  readOnly,
  value,
  id,
  ref,
  onChange,
  className,
  classNames,
  ...rest
}: DatePickerTimerProps) {
  const { slots } = useDatePicker();
  const { canClear, handleChange, handleClear, mergedRef } = useClearableInput({
    clearable,
    defaultValue,
    disabled,
    onChange,
    readOnly,
    ref,
    value,
  });

  return (
    <InputGroup {...rest}>
      <InputGroup.Addon>
        <ClockIcon />
      </InputGroup.Addon>
      <InputGroup.Input
        className={slots.timer({ className })}
        classNames={classNames}
        clearable={false}
        defaultValue={defaultValue}
        disabled={disabled}
        id={id}
        onChange={handleChange}
        readOnly={readOnly}
        ref={mergedRef}
        step="1"
        type="time"
        value={value}
      />
      {canClear ? (
        <InputGroup.Addon align="inline-end">
          <Input.ClearButton onClear={handleClear} />
        </InputGroup.Addon>
      ) : null}
    </InputGroup>
  );
}

export function DatePickerContent({
  showCalendar = true,
  children,
  className,
  ...rest
}: DatePickerContentProps) {
  const { slots } = useDatePicker();

  return (
    <Portal>
      <DatePickerPrimitive.Positioner>
        <DatePickerPrimitive.Content {...rest} className={slots.content({ className })}>
          {showCalendar && !children ? (
            <>
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
            </>
          ) : (
            children
          )}
        </DatePickerPrimitive.Content>
      </DatePickerPrimitive.Positioner>
    </Portal>
  );
}

export function DatePickerValueText({ className, ...rest }: DatePickerValueTextProps) {
  const { slots } = useDatePicker();

  return <DatePickerPrimitive.ValueText {...rest} className={slots.valueText({ className })} />;
}

export function DatePickerPresetTrigger(props: DatePickerPresetTriggerProps) {
  return <Calendar.PresetTrigger {...props} />;
}
// #endregion

// #region Display Names
DatePickerRoot.displayName = "DatePicker";
DatePickerTrigger.displayName = "DatePicker.Trigger";
DatePickerInput.displayName = "DatePicker.Input";
DatePickerClearTrigger.displayName = "DatePicker.ClearTrigger";
DatePickerTimer.displayName = "DatePicker.Timer";
DatePickerContent.displayName = "DatePicker.Content";
DatePickerValueText.displayName = "DatePicker.ValueText";
DatePickerPresetTrigger.displayName = "DatePicker.PresetTrigger";
// #endregion
