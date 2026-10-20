import {
  DatePicker as DatePickerPrimitive,
  type DatePickerValueChangeDetails,
  useDatePickerContext as useDatePicker,
} from "@ark-ui/vue";
import {
  PhCalendar,
  PhCaretLeft,
  PhCaretRight,
  PhClock,
  PhX,
} from "@phosphor-icons/vue";
import type {
  DatePickerContract,
  DatePickerRootContract,
} from "@pisagor/contracts";
import { calendarRecipe, datePickerRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import { computed, defineComponent, h, ref, Teleport, unref } from "vue";
import type { Component, PropType } from "vue";
import {
  type LoosePropValue,
  createContext,
  createSlotRecipeContext,
} from "../internal";
import { Button } from "./button";
import { Calendar, provideCalendarStyles } from "./calendar";
import type { InputProps } from "./input";
import { InputGroup } from "./input-group";
import { InputGroupRoot } from "./input-group/input-group-core";
import { useLocale } from "./provider/context";

type FormControlVariant = "primary" | "secondary";
type ClassValue = Parameters<typeof cn>[0];

// #region Context
const {
  Context: DatePickerStylesContext,
  useOptionalStyles: useOptionalDatePickerStyles,
  withContext,
  useStyles,
} = createSlotRecipeContext({
  name: "DatePicker",
  recipe: datePickerRecipe,
});

const [provideDatePickerVariant, , useDatePickerVariantRef] = createContext(
  "DatePickerVariant",
)<FormControlVariant | undefined>({ defaultValue: undefined, strict: false });
// #endregion

// #region Types
export interface DatePickerRootProps extends DatePickerRootContract {
  /** Calendar style recipe for `Calendar.*` parts inside the picker. */
  calendarRecipe?: typeof calendarRecipe;
  variant?: FormControlVariant;
  positioning?: unknown;
  onValueChange?: (value: unknown) => void;
  value?: unknown;
  defaultValue?: unknown;
}

export interface DatePickerTimeInputProps extends InputProps {
  clearable?: boolean;
}

export interface DatePickerProps
  extends DatePickerRootProps, DatePickerContract {
  /**
   * Whether to show a clear button when a date is selected.
   *
   * @defaultValue false
   */
  clearable?: boolean;
  /** Props forwarded to the text input. */
  inputProps?: Record<string, unknown>;
  /** Input placeholder. */
  placeholder?: string;
  /** Input size. */
  size?: InputProps["size"];
}
// #endregion

type ArkPart = Parameters<typeof h>[0];

// #region Parts
const Root = defineComponent({
  inheritAttrs: false,
  name: "DatePicker.Root",
  props: {
    calendarRecipe: {
      default: calendarRecipe,
      type: Function as PropType<typeof calendarRecipe>,
    },
    defaultValue: {
      default: undefined,
      type: null as unknown as PropType<LoosePropValue>,
    },
    onValueChange: {
      default: undefined,
      type: Function as PropType<DatePickerRootProps["onValueChange"]>,
    },
    positioning: {
      default: { placement: "top" },
      type: Object as PropType<LoosePropValue>,
    },
    recipe: {
      default: datePickerRecipe,
      type: Function as PropType<typeof datePickerRecipe>,
    },
    value: {
      default: undefined,
      type: null as unknown as PropType<LoosePropValue>,
    },
    variant: {
      default: undefined,
      type: String as PropType<FormControlVariant | undefined>,
    },
  },
  setup(props, { attrs, slots }) {
    const recipeSlots = computed(() => props.recipe());
    const calendarSlots = computed(() => props.calendarRecipe());

    provideCalendarStyles({
      get slots() {
        return calendarSlots.value;
      },
      variants: {},
    });
    provideDatePickerVariant(computed(() => props.variant));

    return () =>
      h(
        DatePickerStylesContext,
        { value: { slots: recipeSlots.value, variants: {} } },
        () =>
          h(
            DatePickerPrimitive.Root as ArkPart,
            {
              ...attrs,
              defaultValue: props.defaultValue,
              inline: false,
              modelValue: props.value,
              onValueChange: props.onValueChange
                ? (details: DatePickerValueChangeDetails) =>
                    props.onValueChange?.(
                      (details as { value?: unknown }).value,
                    )
                : undefined,
              positioning: props.positioning,
            },
            () => [slots.default?.()],
          ),
      );
  },
});

const Control = withContext(DatePickerPrimitive.Control, {
  name: "Control",
});

const Trigger = withContext(DatePickerPrimitive.Trigger, {
  name: "Trigger",
});

// Cast: the Ark input props union is too complex for `withContext` to infer.
const Input = withContext(DatePickerPrimitive.Input as Component, {
  name: "Input",
});

const ClearTrigger = withContext(DatePickerPrimitive.ClearTrigger, {
  name: "ClearTrigger",
});

const Positioner = withContext(DatePickerPrimitive.Positioner, {
  name: "Positioner",
});

const Content = withContext(DatePickerPrimitive.Content, {
  name: "Content",
});

const ValueText = withContext(DatePickerPrimitive.ValueText, {
  name: "ValueText",
});

const PresetTrigger = Calendar.PresetTrigger;

/** Native time field styled to match the picker. Not an Ark part. */
const TimeInput = defineComponent({
  inheritAttrs: false,
  name: "DatePicker.TimeInput",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<ClassValue>,
    },
    clearable: { default: false, type: Boolean },
    defaultValue: {
      default: undefined,
      type: [String, Number, Array] as PropType<LoosePropValue>,
    },
    disabled: { default: undefined, type: Boolean },
    onValueChange: {
      default: undefined,
      type: Function as PropType<((value: string) => void) | undefined>,
    },
    readOnly: { default: undefined, type: Boolean },
    value: {
      default: undefined,
      type: [String, Number, Array] as PropType<LoosePropValue>,
    },
    variant: {
      default: undefined,
      type: String as PropType<FormControlVariant | undefined>,
    },
  },
  setup(props, { attrs }) {
    // Standalone `DatePicker.TimeInput`: default recipe outside a picker.
    const optionalStyles = useOptionalDatePickerStyles();
    const styles = {
      get slots() {
        return optionalStyles?.slots ?? datePickerRecipe();
      },
    };
    const variantRef = useDatePickerVariantRef();
    const internalValue = ref(
      props.defaultValue !== undefined ? String(props.defaultValue) : "",
    );
    const isControlled = computed(() => props.value !== undefined);
    const current = computed(() =>
      isControlled.value ? String(props.value ?? "") : internalValue.value,
    );
    const canClear = computed(
      () =>
        props.clearable &&
        !props.disabled &&
        !props.readOnly &&
        current.value.length > 0,
    );

    const handleValueChange = (next: string) => {
      if (!isControlled.value) {
        internalValue.value = next;
      }
      props.onValueChange?.(next);
    };

    const handleClear = () => handleValueChange("");

    return () => {
      const contextVariant = unref(variantRef);

      return h(
        InputGroupRoot as ArkPart,
        {
          ...attrs,
          variant: props.variant ?? contextVariant,
        },
        () => [
          h(InputGroup.Addon, () => h(PhClock)),
          h(
            InputGroup.Input as ArkPart,
            {
              ...attrs,
              class: styles.slots.timer({
                class: cn(props.class, (attrs as { class?: ClassValue }).class),
              }),
              clearable: false,
              disabled: props.disabled,
              onValueChange: handleValueChange,
              readOnly: props.readOnly,
              step: "1",
              type: "time",
              value: current.value,
            } as unknown as Parameters<typeof h>[1],
          ),
          canClear.value
            ? h(InputGroup.Addon, { align: "inline-end" }, () =>
                h(InputClearButton, { onClear: handleClear }),
              )
            : null,
        ],
      );
    };
  },
});

// Small helper for the timer clear button.
const InputClearButton = defineComponent({
  inheritAttrs: false,
  name: "DatePicker.TimerClearButton",
  props: {
    onClear: { required: true, type: Function as PropType<() => void> },
  },
  setup(props) {
    return () =>
      h(
        InputGroup.Button as ArkPart,
        {
          "aria-label": "Clear time",
          onClick: props.onClear,
          size: "icon-xs",
          type: "button",
          variant: "ghost",
        },
        () => h(PhX),
      );
  },
});

// #region Shorthand
/** Month/year navigation and day grid used by the shorthand. */
const DefaultCalendar = defineComponent({
  name: "DatePicker.DefaultCalendar",
  setup() {
    return () => [
      h(Calendar.ViewControl, null, () => [
        h(Calendar.PrevTrigger, { asChild: true }, () =>
          h(Button, { size: "icon-md", variant: "ghost" }, () =>
            h(PhCaretLeft, { "aria-hidden": true, class: "rtl:rotate-180" }),
          ),
        ),
        h(Calendar.MonthSelect),
        h(Calendar.YearSelect),
        h(Calendar.NextTrigger, { asChild: true }, () =>
          h(Button, { size: "icon-md", variant: "ghost" }, () =>
            h(PhCaretRight, { "aria-hidden": true, class: "rtl:rotate-180" }),
          ),
        ),
      ]),
      h(Calendar.Table, null, () => [
        h(Calendar.WeekDays),
        h(Calendar.TableDays),
      ]),
    ];
  },
});

/** Clear button; hidden when there is nothing to clear. */
const ShorthandClearTrigger = defineComponent({
  name: "DatePicker.ShorthandClearTrigger",
  setup() {
    const { m } = useLocale();
    const api = useDatePicker();

    return () => {
      const { disabled, readOnly, value } = api.value;

      if (disabled || readOnly || value.length === 0) {
        return null;
      }

      return h(ClearTrigger as ArkPart, { asChild: true }, () =>
        h(
          InputGroup.Button as ArkPart,
          {
            "aria-label": m("datePicker.clear"),
            size: "icon-xs",
            type: "button",
            variant: "ghost",
          },
          () => h(PhX),
        ),
      );
    };
  },
});

const ShorthandField = defineComponent({
  name: "DatePicker.ShorthandField",
  props: {
    classNames: {
      default: undefined,
      type: Object as PropType<DatePickerProps["classNames"]>,
    },
    clearable: { default: false, type: Boolean },
    inputProps: {
      default: undefined,
      type: Object as PropType<DatePickerProps["inputProps"]>,
    },
    placeholder: { default: undefined, type: String },
    size: { default: undefined, type: String as PropType<InputProps["size"]> },
    variant: {
      default: undefined,
      type: String as PropType<FormControlVariant | undefined>,
    },
  },
  setup(props) {
    const { m } = useLocale();
    const styles = useStyles();

    return () =>
      h(Control as ArkPart, { class: props.classNames?.control }, () =>
        h(
          InputGroupRoot as ArkPart,
          { size: props.size, variant: props.variant },
          () => [
            h(Input as ArkPart, { asChild: true }, () =>
              h(InputGroup.Input as ArkPart, {
                clearable: false,
                ...props.inputProps,
                placeholder: props.placeholder,
                type: "text",
              }),
            ),
            h(InputGroup.Addon, { align: "inline-end" }, () => [
              props.clearable ? h(ShorthandClearTrigger) : null,
              h(Trigger as ArkPart, { asChild: true }, () =>
                h(
                  InputGroup.Button as ArkPart,
                  {
                    "aria-label": m("datePicker.openCalendar"),
                    size: "icon-xs",
                    type: "button",
                    variant: "ghost",
                  },
                  () =>
                    h(PhCalendar, {
                      "aria-hidden": true,
                      class: styles.slots.icon({
                        class: props.classNames?.icon,
                      }),
                    }),
                ),
              ),
            ]),
          ],
        ),
      );
  },
});

export const DatePickerShorthand = defineComponent({
  inheritAttrs: false,
  name: "DatePicker",
  props: {
    classNames: {
      default: undefined,
      type: Object as PropType<DatePickerProps["classNames"]>,
    },
    clearable: { default: false, type: Boolean },
    inputProps: {
      default: undefined,
      type: Object as PropType<DatePickerProps["inputProps"]>,
    },
    placeholder: { default: undefined, type: String },
    size: { default: undefined, type: String as PropType<InputProps["size"]> },
    variant: {
      default: undefined,
      type: String as PropType<FormControlVariant | undefined>,
    },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(Root as ArkPart, { ...attrs, variant: props.variant }, () => [
        h(ShorthandField, {
          classNames: props.classNames,
          clearable: props.clearable,
          inputProps: props.inputProps,
          placeholder: props.placeholder,
          size: props.size,
          variant: props.variant,
        }),
        h(Teleport, { to: "body" }, [
          h(
            Positioner as ArkPart,
            { class: props.classNames?.positioner },
            () =>
              h(Content as ArkPart, { class: props.classNames?.content }, () =>
                slots.default ? slots.default() : h(DefaultCalendar),
              ),
          ),
        ]),
      ]);
  },
});
// #endregion

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
