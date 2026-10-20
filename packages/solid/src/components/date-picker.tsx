import {
  DatePicker as DatePickerPrimitive,
  useDatePickerContext,
} from "@ark-ui/solid";
import type {
  DatePickerClearTriggerProps,
  DatePickerContentProps,
  DatePickerControlProps,
  DatePickerInputProps as DatePickerInputPrimitiveProps,
  DatePickerPositionerProps,
  DatePickerRootProps as DatePickerRootPrimitiveProps,
  DatePickerTriggerProps,
  DatePickerValueTextProps,
} from "@ark-ui/solid";
import type {
  DatePickerContract,
  DatePickerRootContract,
} from "@pisagor/contracts";
import { calendarRecipe, datePickerRecipe } from "@pisagor/recipes";
import type { JSX } from "solid-js";
import { createMemo, Show, splitProps, useContext } from "solid-js";
import { Portal } from "solid-js/web";
import {
  CalendarIcon,
  CaretLeftIcon,
  CaretRightIcon,
  ClockIcon,
  XIcon,
  createSlotRecipeContext,
} from "../internal";
import { createContext } from "../utils";
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

type FormControlVariant = "primary" | "secondary";

const { DatePickerVariantContext, useDatePickerVariant } = createContext(
  "DatePickerVariant",
)<{ readonly variant?: FormControlVariant }>({ strict: false });
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
  children?: JSX.Element;
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
function TimeInput(props: DatePickerTimeInputProps): JSX.Element {
  const [local, rest] = splitProps(props, [
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
    "variant",
  ]);
  // TimeInput may render outside Root, so both contexts are optional here.
  const pickerStyles = useContext(DatePickerSlotsContext);
  const options = useDatePickerVariant();
  const slots = () =>
    pickerStyles?.slots ?? (local.recipe ?? datePickerRecipe)();

  return (
    <InputGroup
      {...(rest as JSX.HTMLAttributes<HTMLDivElement>)}
      variant={local.variant ?? options?.variant}
    >
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
        onChange={local.onChange}
        readOnly={local.readOnly}
        ref={local.ref}
        step="1"
        type="time"
        value={local.value}
      />
    </InputGroup>
  );
}
// #endregion

// #region Shorthand
/** Month/year navigation and day grid used by the shorthand. */
function DefaultCalendar(): JSX.Element {
  return (
    <>
      <Calendar.ViewControl>
        <Calendar.PrevTrigger
          asChild={(triggerProps) => (
            <Button {...triggerProps()} size="icon-md" variant="ghost">
              <CaretLeftIcon aria-hidden class="rtl:rotate-180" />
            </Button>
          )}
        />
        <Calendar.MonthSelect />
        <Calendar.YearSelect />
        <Calendar.NextTrigger
          asChild={(triggerProps) => (
            <Button {...triggerProps()} size="icon-md" variant="ghost">
              <CaretRightIcon aria-hidden class="rtl:rotate-180" />
            </Button>
          )}
        />
      </Calendar.ViewControl>
      <Calendar.Table>
        <Calendar.WeekDays />
        <Calendar.TableDays />
      </Calendar.Table>
    </>
  );
}

/** Clear button; hidden when there is nothing to clear. */
function ShorthandClearTrigger(): JSX.Element {
  const { m } = useLocale();
  const api = useDatePickerContext();

  return (
    <Show when={!api().disabled && !api().readOnly && api().value.length > 0}>
      <ClearTrigger
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

export function DatePickerShorthand(props: DatePickerProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "children",
    "classNames",
    "clearable",
    "inputProps",
    "placeholder",
    "size",
  ]);

  return (
    <Root {...rest}>
      <ShorthandField
        classNames={local.classNames}
        clearable={local.clearable ?? false}
        inputProps={local.inputProps}
        placeholder={local.placeholder}
        size={local.size}
        variant={rest.variant}
      />

      <Portal>
        <Positioner class={local.classNames?.positioner}>
          <Content class={local.classNames?.content}>
            <Show fallback={<DefaultCalendar />} when={local.children}>
              {local.children}
            </Show>
          </Content>
        </Positioner>
      </Portal>
    </Root>
  );
}

function ShorthandField(
  props: Pick<
    DatePickerProps,
    | "classNames"
    | "clearable"
    | "inputProps"
    | "placeholder"
    | "size"
    | "variant"
  >,
): JSX.Element {
  const { m } = useLocale();
  const styles = useStyles();

  return (
    <Control class={props.classNames?.control}>
      <InputGroup size={props.size} variant={props.variant}>
        <Input
          asChild={(inputProps) => (
            <InputGroup.Input
              {...inputProps(props.inputProps)}
              clearable={false}
              placeholder={props.placeholder}
            />
          )}
        />

        <InputGroup.Addon align="inline-end">
          <Show when={props.clearable}>
            <ShorthandClearTrigger />
          </Show>

          <Trigger
            asChild={(triggerProps) => (
              <InputGroup.Button
                {...triggerProps()}
                aria-label={m("datePicker.openCalendar")}
                size="icon-xs"
                type="button"
                variant="ghost"
              >
                <CalendarIcon
                  aria-hidden
                  class={styles.slots.icon({ class: props.classNames?.icon })}
                />
              </InputGroup.Button>
            )}
          />
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
} from "@ark-ui/solid";

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
