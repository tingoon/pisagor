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
  DatePickerTriggerProps,
  DatePickerValueTextProps,
} from "@ark-ui/react";
import { CalendarIcon, ClockIcon, XIcon } from "@phosphor-icons/react";
import type { DatePickerRootContract } from "@pisagor/contracts";
import { calendarRecipe, datePickerRecipe } from "@pisagor/recipes";
import { type ComponentProps, createContext, type ReactNode, use } from "react";
import { type FormControlVariant, createSlotRecipeContext } from "../internal";
import { Button } from "./button";
import { Calendar, CalendarSlotsContext } from "./calendar";
import type { InputProps } from "./input";
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

const DatePickerVariantContext = createContext<
  "primary" | "secondary" | undefined
>(undefined);
DatePickerVariantContext.displayName = "DatePickerVariantContext";

function useDatePicker() {
  const styles = useStyles();
  const variant = use(DatePickerVariantContext);

  return { ...styles, variant };
}
// #endregion

// #region Types

export type DatePickerInputProps = Omit<DatePickerInputPrimitiveProps, "size"> &
  Omit<InputProps, "clearable">;

export type DatePickerTimeInputProps = Omit<
  InputProps,
  "clearable" | "recipe"
> &
  DatePickerRootContract;

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
    DatePickerRootContract {
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
function Root({
  variant,
  positioning = { placement: "top" },
  children,
  onValueChange,
  recipe = datePickerRecipe,
  calendarRecipe: calendarRecipeProp = calendarRecipe,
  ...rest
}: DatePickerRootProps) {
  const slots = recipe();
  const calendarResolved = {
    surfaceVariant: useFormControlSurface(),
    variant,
  };
  const calendarSlots = calendarRecipeProp(calendarResolved);

  return (
    <DatePickerSlotsContext value={{ slots, variants: {} as never }}>
      <DatePickerVariantContext value={variant}>
        <CalendarSlotsContext
          value={{ slots: calendarSlots, variants: calendarResolved as never }}
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

const ControlBase = withContext<
  ComponentProps<typeof DatePickerPrimitive.Control>
>(DatePickerPrimitive.Control, {
  name: "Control",
});

function Control({
  className,
  ...rest
}: ComponentProps<typeof DatePickerPrimitive.Control>) {
  return (
    <DatePickerInsideControlContext value={true}>
      <ControlBase {...rest} className={className} />
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
      <ControlBase className={className}>{children}</ControlBase>
    </DatePickerInsideControlContext>
  );
}

const TriggerBase = withContext<DatePickerTriggerProps>(
  DatePickerPrimitive.Trigger,
  {
    name: "Trigger",
  },
);

function Trigger({ children, className, ...rest }: DatePickerTriggerProps) {
  const { slots } = useDatePicker();

  return (
    <MaybeDatePickerControl className={slots.control()}>
      <TriggerBase {...rest} className={className}>
        {children}
      </TriggerBase>
    </MaybeDatePickerControl>
  );
}

function InputPart({
  size,
  variant,
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
          <InputGroup.Input />
        </DatePickerPrimitive.Input>

        <InputGroup.Addon align="inline-end">
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

function ClearTrigger() {
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

function TimeInput({
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

  return (
    <InputGroup {...rest} variant={variant ?? contextVariant}>
      <InputGroup.Addon>
        <ClockIcon />
      </InputGroup.Addon>
      <InputGroup.Input
        className={slots.timer({ className })}
        classNames={classNames}
        defaultValue={defaultValue}
        disabled={disabled}
        id={id}
        onChange={onChange}
        readOnly={readOnly}
        ref={ref}
        step="1"
        type="time"
        value={value}
      />
    </InputGroup>
  );
}

const ContentBase = withContext<DatePickerContentProps>(
  DatePickerPrimitive.Content,
  {
    name: "Content",
  },
);

function Content({
  showCalendar = true,
  children,
  className,
  ...rest
}: DatePickerContentProps) {
  return (
    <Portal>
      <DatePickerPrimitive.Positioner>
        <ContentBase {...rest} className={className}>
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
        </ContentBase>
      </DatePickerPrimitive.Positioner>
    </Portal>
  );
}

const ValueText = withContext<DatePickerValueTextProps>(
  DatePickerPrimitive.ValueText,
  { name: "ValueText" },
);

function PresetTrigger(props: DatePickerPresetTriggerProps) {
  return <Calendar.PresetTrigger {...props} />;
}
// #endregion

export type {
  DatePickerPresetTriggerProps,
  DatePickerTriggerProps,
  DatePickerValueTextProps,
} from "@ark-ui/react";

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
