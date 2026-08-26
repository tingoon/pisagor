import {
  DatePicker as DatePickerPrimitive,
  type DatePickerValueChangeDetails,
  useDatePickerContext as useDatePicker,
} from "@ark-ui/vue/date-picker";
import { PhCalendar, PhClock, PhX } from "@phosphor-icons/vue";
import {
  datePickerContentVariants,
  datePickerControlVariants,
  datePickerInlineVariants,
  datePickerTriggerVariants,
  datePickerValueTextVariants,
} from "@pisagor/styles/ui/date-picker";
import { cn } from "@pisagor/utils";

type ClassValue = Parameters<typeof cn>[0];

import { computed, defineComponent, h, type PropType, ref } from "vue";
import { FormControlVariantProvider } from "../../internal/form-control/form-control-variant-context";
import type { FormControlVariant } from "../../internal/form-control/form-control-variants";
import { Button } from "../button";
import type { InputProps } from "../input";
import { InputGroup } from "../input-group";
import { InputGroupRoot } from "../input-group/input-group-core";

type ArkPart = Parameters<typeof h>[0];

export interface DatePickerRootProps {
  variant?: FormControlVariant;
  positioning?: unknown;
  onValueChange?: (value: unknown) => void;
  value?: unknown;
  defaultValue?: unknown;
}

export interface DatePickerTriggerProps {
  clearable?: boolean;
}

export interface DatePickerInputProps extends Omit<InputProps, "size"> {
  clearable?: boolean;
}

export interface DatePickerTimerProps extends InputProps {
  clearable?: boolean;
}

export interface DatePickerContentProps {
  showCalendar?: boolean;
}

// #region Parts
export const DatePickerRoot = defineComponent({
  inheritAttrs: false,
  name: "DatePicker",
  props: {
    defaultValue: { default: undefined, type: null as unknown as PropType<unknown> },
    onValueChange: {
      default: undefined,
      type: Function as PropType<DatePickerRootProps["onValueChange"]>,
    },
    positioning: { default: { placement: "top" }, type: Object as PropType<unknown> },
    value: { default: undefined, type: null as unknown as PropType<unknown> },
    variant: { default: undefined, type: String as PropType<FormControlVariant | undefined> },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(FormControlVariantProvider as ArkPart, { value: props.variant }, () =>
        h(
          DatePickerPrimitive.Root as ArkPart,
          {
            ...attrs,
            defaultValue: props.defaultValue,
            modelValue: props.value,
            onValueChange: props.onValueChange
              ? (details: DatePickerValueChangeDetails) =>
                  props.onValueChange?.((details as { value?: unknown }).value)
              : undefined,
            positioning: props.positioning,
          },
          () => {
            return [slots.default?.()];
          },
        ),
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
    return () => {
      return h(
        DatePickerPrimitive.Control as ArkPart,
        {
          ...attrs,
          class: datePickerControlVariants(),
        },
        () => [
          h(
            DatePickerPrimitive.Trigger as ArkPart,
            {
              ...attrs,
              class: datePickerTriggerVariants(),
            },
            () => slots.default?.(),
          ),
          props.clearable ? h(DatePickerClearTrigger) : null,
        ],
      );
    };
  },
});

export const DatePickerInput = defineComponent({
  inheritAttrs: false,
  name: "DatePicker.Input",
  props: {
    clearable: { default: false, type: Boolean },
    size: { default: undefined, type: String as PropType<InputProps["size"]> },
  },
  setup(props, { attrs }) {
    return () => {
      return h(DatePickerPrimitive.Control as ArkPart, { ...attrs }, () =>
        h(InputGroupRoot as ArkPart, { size: props.size }, () => [
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
                { "aria-label": "Open calendar", size: "icon-md", variant: "ghost" },
                () => h(PhCalendar),
              ),
            ),
          ]),
        ]),
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
    class: { default: undefined, type: [String, Object, Array] as PropType<ClassValue> },
    clearable: { default: false, type: Boolean },
    defaultValue: { default: undefined, type: [String, Number, Array] as PropType<unknown> },
    disabled: { default: undefined, type: Boolean },
    onValueChange: {
      default: undefined,
      type: Function as PropType<((value: string) => void) | undefined>,
    },
    readOnly: { default: undefined, type: Boolean },
    value: { default: undefined, type: [String, Number, Array] as PropType<unknown> },
  },
  setup(props, { attrs }) {
    return () => {
      const internalValue = ref(props.defaultValue !== undefined ? String(props.defaultValue) : "");
      const isControlled = computed(() => props.value !== undefined);
      const current = computed(() =>
        isControlled.value ? String(props.value ?? "") : internalValue.value,
      );
      const canClear = computed(
        () => props.clearable && !props.disabled && !props.readOnly && current.value.length > 0,
      );

      const handleValueChange = (next: string) => {
        if (!isControlled.value) {
          internalValue.value = next;
        }
        props.onValueChange?.(next);
      };

      const handleClear = () => handleValueChange("");

      return h(InputGroupRoot as ArkPart, { ...attrs }, () => [
        h(InputGroup.Addon, () => h(PhClock)),
        h(
          InputGroup.Input as ArkPart,
          {
            ...attrs,
            class: cn(
              datePickerInlineVariants(),
              props.class,
              (attrs as { class?: ClassValue }).class,
            ),
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
      ]);
    };
  },
});

export const DatePickerContent = defineComponent({
  inheritAttrs: false,
  name: "DatePicker.Content",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<ClassValue> },
    showCalendar: { default: true, type: Boolean },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const content = [
        h(
          DatePickerPrimitive.Content as ArkPart,
          {
            ...attrs,
            class: cn(
              datePickerContentVariants(),
              props.class,
              (attrs as { class?: ClassValue }).class,
            ),
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

      return h("teleport", { to: "body" } as unknown as Parameters<typeof h>[1], () =>
        h(DatePickerPrimitive.Positioner as ArkPart, {}, () => content),
      );
    };
  },
});

export const DatePickerValueText = defineComponent({
  inheritAttrs: false,
  name: "DatePicker.ValueText",
  setup(_, { attrs }) {
    return () =>
      h(DatePickerPrimitive.ValueText as ArkPart, {
        ...attrs,
        class: cn(datePickerValueTextVariants(), (attrs as { class?: ClassValue }).class),
      });
  },
});

export const DatePickerPresetTrigger = defineComponent({
  inheritAttrs: false,
  name: "DatePicker.PresetTrigger",
  props: {},
  setup(_, { attrs, slots }) {
    return () =>
      h(DatePickerPrimitive.PresetTrigger as ArkPart, { ...attrs }, () => slots.default?.());
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
  Input: DatePickerInput,
  PresetTrigger: DatePickerPresetTrigger,
  Timer: DatePickerTimer,
  Trigger: DatePickerTrigger,
  ValueText: DatePickerValueText,
});
