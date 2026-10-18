import {
  DatePicker as DatePickerPrimitive,
  type DatePickerValueChangeDetails,
  useDatePickerContext as useDatePicker,
} from "@ark-ui/vue";
import { PhCalendar, PhClock, PhX } from "@phosphor-icons/vue";
import type { DatePickerRootContract } from "@pisagor/props";
import { calendarRecipe, datePickerRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import {
  computed,
  defineComponent,
  h,
  inject,
  provide,
  ref,
  Teleport,
  unref,
} from "vue";
import type { InjectionKey, PropType, VNodeChild } from "vue";
import {
  type LoosePropValue,
  createContext,
  createSlotRecipeContext,
} from "../internal";
import { Button } from "./button";
import { provideCalendarStyles } from "./calendar";
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

export interface DatePickerTriggerProps extends DatePickerRootContract {
  clearable?: boolean;
}

export interface DatePickerInputProps extends Omit<InputProps, "size"> {
  clearable?: boolean;
  variant?: FormControlVariant;
}

export interface DatePickerTimerProps extends InputProps {
  clearable?: boolean;
}

export interface DatePickerContentProps {
  showCalendar?: boolean;
}
// #endregion

type ArkPart = Parameters<typeof h>[0];

// #region Parts
export const DatePickerRoot = defineComponent({
  inheritAttrs: false,
  name: "DatePicker",
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

/**
 * True inside a date picker control, so nested parts do not render a second
 * one.
 */
const DatePickerInsideControlKey: InjectionKey<boolean> = Symbol(
  "DatePickerInsideControl",
);

function maybeControl(
  insideControl: boolean,
  props: Record<string, unknown>,
  children: () => VNodeChild,
): VNodeChild {
  return insideControl
    ? children()
    : h(DatePickerPrimitive.Control as ArkPart, props, children);
}

export const DatePickerControl = defineComponent({
  inheritAttrs: false,
  name: "DatePicker.Control",
  setup(_, { attrs, slots }) {
    const styles = useStyles();
    provide(DatePickerInsideControlKey, true);

    return () =>
      h(
        DatePickerPrimitive.Control as ArkPart,
        { ...attrs, class: cn(styles.slots.control(), attrs.class as string) },
        slots,
      );
  },
});

export const DatePickerTrigger = defineComponent({
  inheritAttrs: false,
  name: "DatePicker.Trigger",
  props: {
    clearable: { default: false, type: Boolean },
  },
  setup(props, { attrs, slots }) {
    const styles = useStyles();
    const insideControl = inject(DatePickerInsideControlKey, false);
    if (!insideControl) provide(DatePickerInsideControlKey, true);

    return () =>
      maybeControl(
        insideControl,
        {
          ...attrs,
          class: styles.slots.control(),
        },
        () => [
          h(
            DatePickerPrimitive.Trigger as ArkPart,
            {
              ...attrs,
              class: styles.slots.trigger(),
            },
            () => slots.default?.(),
          ),
          props.clearable ? h(DatePickerClearTrigger) : null,
        ],
      );
  },
});

export const DatePickerInput = defineComponent({
  inheritAttrs: false,
  name: "DatePicker.Input",
  props: {
    clearable: { default: false, type: Boolean },
    size: { default: undefined, type: String as PropType<InputProps["size"]> },
    variant: {
      default: undefined,
      type: String as PropType<FormControlVariant | undefined>,
    },
  },
  setup(props, { attrs }) {
    const { m } = useLocale();
    const variantRef = useDatePickerVariantRef();
    const insideControl = inject(DatePickerInsideControlKey, false);
    if (!insideControl) provide(DatePickerInsideControlKey, true);

    return () => {
      const contextVariant = unref(variantRef);

      return maybeControl(insideControl, { ...attrs }, () =>
        h(
          InputGroupRoot as ArkPart,
          {
            size: props.size,
            variant: props.variant ?? contextVariant,
          },
          () => [
            h(DatePickerPrimitive.Input as ArkPart, { asChild: true }, () =>
              h(InputGroup.Input as ArkPart, {
                clearable: false,
                ...attrs,
                type: "text",
              }),
            ),
            h(InputGroup.Addon, { align: "inline-end" }, () => [
              props.clearable ? h(DatePickerClearTrigger) : null,
              h(DatePickerPrimitive.Trigger as ArkPart, { asChild: true }, () =>
                h(
                  Button as ArkPart,
                  {
                    "aria-label": m("datePicker.openCalendar"),
                    size: "icon-md",
                    variant: "ghost",
                  },
                  () => h(PhCalendar),
                ),
              ),
            ]),
          ],
        ),
      );
    };
  },
});

export const DatePickerClearTrigger = defineComponent({
  inheritAttrs: false,
  name: "DatePicker.ClearTrigger",
  setup(_, { attrs }) {
    return () => {
      const api = useDatePicker();

      const apiTyped = api as {
        disabled?: boolean;
        readOnly?: boolean;
        value?: unknown;
      };

      const disabled = apiTyped.disabled;
      const readOnly = apiTyped.readOnly;
      const value = apiTyped.value as unknown[];

      if (disabled || readOnly || !Array.isArray(value) || value.length === 0) {
        return null;
      }

      return h(
        DatePickerPrimitive.ClearTrigger as ArkPart,
        { asChild: true } as unknown as Parameters<typeof h>[1],
        () =>
          h(
            InputGroup.Button as ArkPart,
            {
              ...attrs,
              "aria-label": "Clear date",
              "data-part": "button",
              "data-scope": "input-group",
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

export const DatePickerTimer = defineComponent({
  inheritAttrs: false,
  name: "DatePicker.Timer",
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
    // Standalone `DatePicker.Timer` (React parity): default recipe outside a picker.
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

export const DatePickerContent = defineComponent({
  inheritAttrs: false,
  name: "DatePicker.Content",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<ClassValue>,
    },
    showCalendar: { default: true, type: Boolean },
  },
  setup(props, { attrs, slots }) {
    const styles = useStyles();

    return () => {
      const content = [
        h(
          DatePickerPrimitive.Content as ArkPart,
          {
            ...attrs,
            class: styles.slots.content({
              class: cn(props.class, (attrs as { class?: ClassValue }).class),
            }),
          },
          () =>
            props.showCalendar && !slots.default
              ? [
                  h(DatePickerPrimitive.ViewControl as ArkPart, () => [
                    h(DatePickerPrimitive.PrevTrigger as ArkPart),
                    h(DatePickerPrimitive.MonthSelect as ArkPart),
                    h(DatePickerPrimitive.YearSelect as ArkPart),
                    h(DatePickerPrimitive.NextTrigger as ArkPart),
                  ]),
                  h(DatePickerPrimitive.Table as ArkPart),
                ]
              : slots.default?.(),
        ),
      ];

      return h(Teleport, { to: "body" }, [
        h(DatePickerPrimitive.Positioner as ArkPart, {}, () => content),
      ]);
    };
  },
});

export const DatePickerValueText = defineComponent({
  inheritAttrs: false,
  name: "DatePicker.ValueText",
  setup(_, { attrs }) {
    const styles = useStyles();

    return () =>
      h(DatePickerPrimitive.ValueText as ArkPart, {
        ...attrs,
        class: styles.slots.valueText({
          class: cn((attrs as { class?: ClassValue }).class),
        }),
      });
  },
});

export const DatePickerPresetTrigger = defineComponent({
  inheritAttrs: false,
  name: "DatePicker.PresetTrigger",
  props: {},
  setup(_, { attrs, slots }) {
    return () =>
      h(DatePickerPrimitive.PresetTrigger as ArkPart, { ...attrs }, () =>
        slots.default?.(),
      );
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

export const DatePicker = Object.assign(DatePickerRoot, {
  ClearTrigger: DatePickerClearTrigger,
  Content: DatePickerContent,
  Control: DatePickerControl,
  Input: DatePickerInput,
  PresetTrigger: DatePickerPresetTrigger,
  TimeInput: DatePickerTimer,
  /** @deprecated Use `TimeInput`. */
  Timer: DatePickerTimer,
  Trigger: DatePickerTrigger,
  ValueText: DatePickerValueText,
});

export type { DatePickerRootProps as DatePickerProps };
