import {
  DatePicker as DatePickerPrimitive,
  Portal,
  useDatePickerContext,
} from "@ark-ui/react";
import type {
  DatePickerContentProps as DatePickerContentPrimitiveProps,
  DatePickerInputProps as DatePickerInputPrimitiveProps,
  DatePickerPresetTriggerProps,
  DatePickerRootProps as DatePickerRootPrimitiveProps,
  DatePickerTriggerProps as DatePickerTriggerPrimitiveProps,
  DatePickerValueTextProps,
} from "@ark-ui/react";
import { CalendarIcon, ClockIcon, XIcon } from "@phosphor-icons/react";
import type { DatePickerProps as BaseDatePickerProps } from "@pisagor/props";
import { calendarRecipe, datePickerRecipe } from "@pisagor/recipes";
import { type ComponentProps, createContext, type ReactNode, use } from "react";
import { useClearableInput } from "../hooks";
import { type FormControlVariant, createSlotRecipeContext } from "../internal";
import { Button } from "./button";
import { Calendar, CalendarSlotsContext } from "./calendar";
import { Input, type InputProps } from "./input";
import { InputGroup } from "./input-group";
import { useLocale } from "./provider/context";

// #region Context
const { Context: DatePickerSlotsContext, useStyles: useDatePickerStyles } =
  createSlotRecipeContext({
    name: "DatePicker",
    recipe: datePickerRecipe,
  });

const DatePickerVariantContext = createContext<
  "primary" | "secondary" | undefined
>(undefined);
DatePickerVariantContext.displayName = "DatePickerVariantContext";

function useDatePicker() {
  const styles = useDatePickerStyles();
  const variant = use(DatePickerVariantContext);

  return { ...styles, variant };
}
// #endregion

// #region Types

export interface DatePickerTriggerProps extends DatePickerTriggerPrimitiveProps {
  /**
   * Whether to show a clear button when a date is selected.
   *
   * @defaultValue false
   */
  clearable?: boolean;
}

export interface DatePickerInputProps
  extends Omit<DatePickerInputPrimitiveProps, "size">, InputProps {
  /**
   * Whether to show a clear button when the input has a value.
   *
   * @defaultValue false
   */
  clearable?: boolean;
}

export interface DatePickerTimeInputProps
  extends Omit<InputProps, "recipe">, BaseDatePickerProps {
  /**
   * Whether to show a clear button when the input has a value.
   *
   * @defaultValue false
   */
  clearable?: boolean;
}

export interface DatePickerContentProps extends DatePickerContentPrimitiveProps {
  /**
   * When `true` (default), auto-renders the standard month/year navigation and
   * day grid inside the content — no need to add calendar sub-components
   * manually.
   */
  showCalendar?: boolean;
}

export interface DatePickerRootProps
  extends
    Omit<DatePickerRootPrimitiveProps, "onValueChange">,
    BaseDatePickerProps {
  /** Visual shell variant. Defaults to `primary`. */
  variant?: FormControlVariant;
  onValueChange?: (value: DatePickerRootProps["value"]) => void;
  /**
   * Calendar style recipe. Defaults to `calendarRecipe` from
   * `@pisagor/recipes/calendar`.
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
    <DatePickerSlotsContext value={{ slots, variants: {} as never }}>
      <DatePickerVariantContext value={variant}>
        <CalendarSlotsContext
          value={{ slots: calendarSlots, variants: {} as never }}
        >
          <DatePickerPrimitive.Root
            {...rest}
            inline={false}
            onValueChange={
              onValueChange
                ? (details) => onValueChange(details.value)
                : undefined
            }
            positioning={positioning}
          >
            {children}
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
const DatePickerInsideControlContext = createContext(false);

export function DatePickerControl({
  className,
  ...rest
}: ComponentProps<typeof DatePickerPrimitive.Control>) {
  const { slots } = useDatePicker();

  return (
    <DatePickerInsideControlContext value={true}>
      <DatePickerPrimitive.Control
        {...rest}
        className={slots.control({ className })}
      />
    </DatePickerInsideControlContext>
  );
}

function MaybeDatePickerControl({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const insideControl = use(DatePickerInsideControlContext);

  if (insideControl) {
    return children;
  }

  return (
    <DatePickerInsideControlContext value={true}>
      <DatePickerPrimitive.Control className={className}>
        {children}
      </DatePickerPrimitive.Control>
    </DatePickerInsideControlContext>
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
    <MaybeDatePickerControl className={slots.control()}>
      <DatePickerPrimitive.Trigger
        {...rest}
        className={slots.trigger({ className })}
      >
        {children}
      </DatePickerPrimitive.Trigger>
      {clearable ? <DatePickerClearTrigger /> : null}
    </MaybeDatePickerControl>
  );
}

export function DatePickerInput({
  size,
  variant,
  clearable = false,
  className,
  ...rest
}: DatePickerInputProps) {
  const { m } = useLocale();
  const { slots, variant: contextVariant } = useDatePicker();

  return (
    <MaybeDatePickerControl>
      <InputGroup
        className={className}
        size={size}
        variant={variant ?? contextVariant}
      >
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
              <Button
                aria-label={m("datePicker.openCalendar")}
                size="icon-md"
                variant="ghost"
              >
                <CalendarIcon aria-hidden className={slots.icon()} />
              </Button>
            </DatePickerPrimitive.Trigger>
          </InputGroup.Button>
        </InputGroup.Addon>
      </InputGroup>
    </MaybeDatePickerControl>
  );
}

export function DatePickerClearTrigger() {
  const { m } = useLocale();
  const api = useDatePickerContext();

  if (api.disabled || api.readOnly || api.value.length === 0) {
    return null;
  }

  return (
    <DatePickerPrimitive.ClearTrigger asChild>
      <InputGroup.Button
        aria-label={m("datePicker.clear")}
        size="icon-xs"
        type="button"
        variant="ghost"
      >
        <XIcon />
      </InputGroup.Button>
    </DatePickerPrimitive.ClearTrigger>
  );
}

export function DatePickerTimeInput({
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
  recipe = datePickerRecipe,
  variant,
  ...rest
}: DatePickerTimeInputProps) {
  const styles = use(DatePickerSlotsContext);
  const contextVariant = use(DatePickerVariantContext);
  const slots = styles?.slots ?? recipe();
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
    <InputGroup {...rest} variant={variant ?? contextVariant}>
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
        <DatePickerPrimitive.Content
          {...rest}
          className={slots.content({ className })}
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

export function DatePickerValueText({
  className,
  ...rest
}: DatePickerValueTextProps) {
  const { slots } = useDatePicker();

  return (
    <DatePickerPrimitive.ValueText
      {...rest}
      className={slots.valueText({ className })}
    />
  );
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
DatePickerTimeInput.displayName = "DatePicker.TimeInput";
DatePickerContent.displayName = "DatePicker.Content";
DatePickerValueText.displayName = "DatePicker.ValueText";
DatePickerPresetTrigger.displayName = "DatePicker.PresetTrigger";

// #endregion

export type {
  DatePickerPresetTriggerProps,
  DatePickerValueTextProps,
} from "@ark-ui/react";

export type { DatePickerRootProps as DatePickerProps };

export const DatePicker = Object.assign(DatePickerRoot, {
  ClearTrigger: DatePickerClearTrigger,
  Content: DatePickerContent,
  Control: DatePickerControl,
  Input: DatePickerInput,
  PresetTrigger: DatePickerPresetTrigger,
  TimeInput: DatePickerTimeInput,
  /** @deprecated Use `DatePicker.TimeInput`. */
  Timer: DatePickerTimeInput,
  Trigger: DatePickerTrigger,
  ValueText: DatePickerValueText,
});
