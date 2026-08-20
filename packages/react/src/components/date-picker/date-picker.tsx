import {
  DatePicker as DatePickerPrimitive,
  useDatePickerContext as useDatePicker,
} from "@ark-ui/react/date-picker";
import { Portal } from "@ark-ui/react/portal";
import { CalendarIcon, ClockIcon, XIcon } from "@phosphor-icons/react";
import {
  datePickerContentVariants,
  datePickerControlVariants,
  datePickerInline2Variants,
  datePickerInlineVariants,
  datePickerTriggerVariants,
  datePickerValueVariants,
} from "@pisagor/styles/ui/date-picker";
import { cn } from "@pisagor/utils";
import type { ComponentProps } from "react";
import { useClearableInput } from "../../hooks";
import { FormControlVariantProvider } from "../../internal/form-control/form-control-variant-context";
import type { FormControlVariant } from "../../internal/form-control/form-control-variants";
import type { WithTestId } from "../../internal/types";
import { Button } from "../button";
import { Calendar } from "../calendar";
import { Input, type InputProps } from "../input";
import { InputGroup } from "../input-group";
import { DatePickerRootContext, useDatePickerRoot } from "./date-picker.context";

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

interface DatePickerTimerProps extends InputProps {
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
  extends Omit<ComponentProps<typeof DatePickerPrimitive.Root>, "onValueChange">,
    WithTestId {
  /** Visual shell variant. When omitted, resolves from the nearest `Surface` context. */
  variant?: FormControlVariant;
  onValueChange?: (value: ComponentProps<typeof DatePickerPrimitive.Root>["value"]) => void;
}

export type DatePickerValueProps = ComponentProps<typeof DatePickerPrimitive.ValueText>;

export type DatePickerPresetTriggerProps = ComponentProps<typeof DatePickerPrimitive.PresetTrigger>;
// #endregion

// #region Parts
export function DatePickerRoot({
  positioning = { placement: "top" },
  onValueChange,
  variant,
  testId,
  ...rest
}: DatePickerRootProps) {
  const { "data-testid": dataTestId, ...props } = rest as typeof rest & { "data-testid"?: string };

  return (
    <DatePickerRootContext value={{ testId: dataTestId ?? testId }}>
      <FormControlVariantProvider value={variant}>
        <DatePickerPrimitive.Root
          inline={false}
          onValueChange={onValueChange ? (details) => onValueChange(details.value) : undefined}
          positioning={positioning}
          {...props}
        />
      </FormControlVariantProvider>
    </DatePickerRootContext>
  );
}
DatePickerRoot.displayName = "DatePicker";

export function DatePickerTrigger({
  className,
  children,
  clearable = false,
  ...rest
}: DatePickerTriggerProps) {
  const { testId } = useDatePickerRoot() ?? {};

  return (
    <DatePickerPrimitive.Control className={datePickerControlVariants()} data-testid={testId}>
      <DatePickerPrimitive.Trigger {...rest} className={cn(datePickerTriggerVariants(), className)}>
        {children}
      </DatePickerPrimitive.Trigger>
      {clearable ? <DatePickerClearTrigger /> : null}
    </DatePickerPrimitive.Control>
  );
}
DatePickerTrigger.displayName = "DatePicker.Trigger";

export function DatePickerInput({
  size,
  className,
  clearable = false,
  ...rest
}: DatePickerInputProps) {
  const { testId } = useDatePickerRoot() ?? {};

  return (
    <DatePickerPrimitive.Control data-testid={testId}>
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
                <CalendarIcon aria-hidden className={datePickerInline2Variants()} />
              </Button>
            </DatePickerPrimitive.Trigger>
          </InputGroup.Button>
        </InputGroup.Addon>
      </InputGroup>
    </DatePickerPrimitive.Control>
  );
}
DatePickerInput.displayName = "DatePicker.Input";

export function DatePickerClearTrigger() {
  const api = useDatePicker();

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
DatePickerClearTrigger.displayName = "DatePicker.ClearTrigger";

export function DatePickerTimer({
  id,
  value,
  defaultValue,
  className,
  classNames,
  clearable = false,
  onChange,
  disabled,
  readOnly,
  ref,
  ...rest
}: DatePickerTimerProps) {
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
        className={cn(datePickerInlineVariants(), className)}
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
DatePickerTimer.displayName = "DatePicker.Timer";

export function DatePickerContent({
  className,
  showCalendar = true,
  children,
  ...rest
}: DatePickerContentProps) {
  return (
    <Portal>
      <DatePickerPrimitive.Positioner>
        <DatePickerPrimitive.Content
          {...rest}
          className={cn(datePickerContentVariants(), className)}
        >
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
DatePickerContent.displayName = "DatePicker.Content";

export function DatePickerValue({ className, ...rest }: DatePickerValueProps) {
  return (
    <DatePickerPrimitive.ValueText {...rest} className={cn(datePickerValueVariants(), className)} />
  );
}
DatePickerValue.displayName = "DatePicker.Value";

export function DatePickerPresetTrigger(props: DatePickerPresetTriggerProps) {
  return <Calendar.PresetTrigger {...props} />;
}
DatePickerPresetTrigger.displayName = "DatePicker.PresetTrigger";
// #endregion
