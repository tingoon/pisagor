import { DatePicker as DatePickerPrimitive, useDatePickerContext } from "@ark-ui/react/date-picker";
import { Portal } from "@ark-ui/react/portal";
import { CalendarIcon, ClockIcon, XIcon } from "@phosphor-icons/react";
import { calendarVariants } from "@pisagor/recipes/calendar";
import { datePickerVariants } from "@pisagor/recipes/date-picker";
import type { ComponentProps } from "react";
import { useMemo } from "react";
import { useClearableInput } from "../../hooks";
import { FormControlVariantProvider } from "../../internal/form-control/form-control-variant-context";
import type { FormControlVariant } from "../../internal/form-control/form-control-variants";
import { Button } from "../button";
import { Calendar } from "../calendar";
import { CalendarSlotsContext } from "../calendar/calendar.context";
import { Input, type InputProps } from "../input";
import { InputGroup } from "../input-group";
import { DatePickerSlotsContext, useDatePicker } from "./date-picker.context";

// #region Types
export interface DatePickerTriggerProps extends ComponentProps<typeof DatePickerPrimitive.Trigger> {
  /**
   * Whether to show a clear button when a date is selected.
   *
   * @defaultValue false
   */
  clearable?: boolean;
}

export interface DatePickerInputProps
  extends Omit<ComponentProps<typeof DatePickerPrimitive.Input>, "size">,
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

export interface DatePickerContentProps extends ComponentProps<typeof DatePickerPrimitive.Content> {
  /**
   * When `true` (default), auto-renders the standard month/year navigation and
   * day grid inside the content — no need to add calendar sub-components manually.
   */
  showCalendar?: boolean;
}

export interface DatePickerRootProps
  extends Omit<ComponentProps<typeof DatePickerPrimitive.Root>, "onValueChange"> {
  /** Visual shell variant. When omitted, resolves from the nearest `Surface` context. */
  variant?: FormControlVariant;
  onValueChange?: (value: ComponentProps<typeof DatePickerPrimitive.Root>["value"]) => void;
}

export type DatePickerValueTextProps = ComponentProps<typeof DatePickerPrimitive.ValueText>;

export type DatePickerPresetTriggerProps = ComponentProps<typeof DatePickerPrimitive.PresetTrigger>;
// #endregion

// #region Parts
export function DatePickerRoot({
  variant,
  positioning = { placement: "top" },
  children,
  onValueChange,
  ...rest
}: DatePickerRootProps) {
  const slots = useMemo(() => datePickerVariants(), []);
  const calendarSlots = useMemo(() => calendarVariants(), []);

  return (
    <FormControlVariantProvider value={variant}>
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
    </FormControlVariantProvider>
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
