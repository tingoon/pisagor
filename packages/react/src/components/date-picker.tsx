import {
  DatePicker as DatePickerPrimitive,
  Portal,
  useDatePickerContext,
} from "@ark-ui/react";
import type {
  DatePickerClearTriggerProps,
  DatePickerContentProps,
  DatePickerControlProps,
  DatePickerInputProps as DatePickerInputPrimitiveProps,
  DatePickerPositionerProps,
  DatePickerRootProps as DatePickerRootPrimitiveProps,
  DatePickerTriggerProps,
  DatePickerValueTextProps,
} from "@ark-ui/react";
import {
  CalendarIcon,
  CaretLeftIcon,
  CaretRightIcon,
  ClockIcon,
  XIcon,
} from "@phosphor-icons/react";
import type {
  DatePickerContract,
  DatePickerRootContract,
} from "@pisagor/contracts";
import { calendarRecipe, datePickerRecipe } from "@pisagor/recipes";
import { createContext, type ReactNode, use } from "react";
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
// #endregion

// #region Types

export type DatePickerInputProps = DatePickerInputPrimitiveProps;

export type DatePickerTimeInputProps = Omit<
  InputProps,
  "clearable" | "recipe"
> &
  DatePickerRootContract;

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

export interface DatePickerProps
  extends DatePickerRootProps, DatePickerContract {
  /** Calendar content; defaults to month/year navigation and the day grid. */
  children?: ReactNode;
  /**
   * Whether to show a clear button when a date is selected.
   *
   * @defaultValue false
   */
  clearable?: boolean;
  /** Props forwarded to the text input. */
  inputProps?: Omit<
    InputProps,
    "clearable" | "placeholder" | "size" | "variant"
  >;
  /** Input placeholder. */
  placeholder?: string;
  /** Input size. */
  size?: InputProps["size"];
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

const Control = withContext<DatePickerControlProps>(
  DatePickerPrimitive.Control,
  { name: "Control" },
);

const Trigger = withContext<DatePickerTriggerProps>(
  DatePickerPrimitive.Trigger,
  { name: "Trigger" },
);

const Input = withContext<DatePickerInputPrimitiveProps>(
  DatePickerPrimitive.Input,
  { name: "Input" },
);

const ClearTrigger = withContext<DatePickerClearTriggerProps>(
  DatePickerPrimitive.ClearTrigger,
  { name: "ClearTrigger" },
);

const Positioner = withContext<DatePickerPositionerProps>(
  DatePickerPrimitive.Positioner,
  { name: "Positioner" },
);

const Content = withContext<DatePickerContentProps>(
  DatePickerPrimitive.Content,
  { name: "Content" },
);

const ValueText = withContext<DatePickerValueTextProps>(
  DatePickerPrimitive.ValueText,
  { name: "ValueText" },
);

const PresetTrigger = Calendar.PresetTrigger;

/** Native time field styled to match the picker. Not an Ark part. */
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
// #endregion

// #region Shorthand
/** Month/year navigation and day grid used by the shorthand. */
function DefaultCalendar() {
  return (
    <>
      <Calendar.ViewControl>
        <Calendar.PrevTrigger asChild>
          <Button size="icon-md" variant="ghost">
            <CaretLeftIcon aria-hidden className="rtl:rotate-180" />
          </Button>
        </Calendar.PrevTrigger>
        <Calendar.MonthSelect />
        <Calendar.YearSelect />
        <Calendar.NextTrigger asChild>
          <Button size="icon-md" variant="ghost">
            <CaretRightIcon aria-hidden className="rtl:rotate-180" />
          </Button>
        </Calendar.NextTrigger>
      </Calendar.ViewControl>
      <Calendar.Table>
        <Calendar.WeekDays />
        <Calendar.TableDays />
      </Calendar.Table>
    </>
  );
}

/** Clear button; hidden when there is nothing to clear. */
function ShorthandClearTrigger() {
  const { m } = useLocale();
  const api = useDatePickerContext();

  if (api.disabled || api.readOnly || api.value.length === 0) {
    return null;
  }

  return (
    <ClearTrigger asChild>
      <InputGroup.Button
        aria-label={m("datePicker.clear")}
        size="icon-xs"
        type="button"
        variant="ghost"
      >
        <XIcon />
      </InputGroup.Button>
    </ClearTrigger>
  );
}

export function DatePickerShorthand({
  children,
  classNames,
  clearable = false,
  inputProps,
  placeholder,
  size,
  variant,
  ...rest
}: DatePickerProps) {
  const { m } = useLocale();

  return (
    <Root {...rest} variant={variant}>
      <ShorthandField
        classNames={classNames}
        clearable={clearable}
        inputProps={inputProps}
        openLabel={m("datePicker.openCalendar")}
        placeholder={placeholder}
        size={size}
        variant={variant}
      />

      <Portal>
        <Positioner className={classNames?.positioner}>
          <Content className={classNames?.content}>
            {children ?? <DefaultCalendar />}
          </Content>
        </Positioner>
      </Portal>
    </Root>
  );
}

function ShorthandField({
  classNames,
  clearable,
  inputProps,
  openLabel,
  placeholder,
  size,
  variant,
}: Pick<
  DatePickerProps,
  "classNames" | "clearable" | "inputProps" | "placeholder" | "size" | "variant"
> & { openLabel: string }) {
  const { slots } = useStyles();

  return (
    <Control className={classNames?.control}>
      <InputGroup size={size} variant={variant}>
        <Input asChild>
          <InputGroup.Input {...inputProps} placeholder={placeholder} />
        </Input>

        <InputGroup.Addon align="inline-end">
          {clearable && <ShorthandClearTrigger />}

          <Trigger asChild>
            <InputGroup.Button
              aria-label={openLabel}
              size="icon-xs"
              type="button"
              variant="ghost"
            >
              <CalendarIcon
                aria-hidden
                className={slots.icon({ className: classNames?.icon })}
              />
            </InputGroup.Button>
          </Trigger>
        </InputGroup.Addon>
      </InputGroup>
    </Control>
  );
}
// #endregion

export type {
  DatePickerClearTriggerProps,
  DatePickerContentProps,
  DatePickerControlProps,
  DatePickerPositionerProps,
  DatePickerPresetTriggerProps,
  DatePickerTriggerProps,
  DatePickerValueTextProps,
} from "@ark-ui/react";

export const DatePicker = Object.assign(DatePickerShorthand, {
  ClearTrigger,
  Content,
  Control,
  Input,
  Positioner,
  PresetTrigger,
  Root,
  TimeInput,
  Trigger,
  ValueText,
});
