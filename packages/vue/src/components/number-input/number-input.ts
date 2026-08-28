import { NumberInput as NumberInputPrimitive } from "@ark-ui/vue/number-input";
import { PhMinus, PhPlus } from "@phosphor-icons/vue";
import { formControlGroupShellVariants } from "@pisagor/recipes/form-control";
import { numberInputVariants } from "@pisagor/recipes/number-input";
import { cn } from "@pisagor/utils";
import { defineComponent, h, type PropType } from "vue";
import { Button } from "../button/button";
import { FieldLabel } from "../field/field";
import { Input, type InputProps } from "../input/input";
import { InputClearButton } from "../input/input-clear-button";

type FormControlVariant = "primary" | "secondary";

type ArkPart = Parameters<typeof h>[0];
type InputSize = InputProps["size"];

// #region Types
export interface NumberInputProps {
  class?: unknown;
  clearable?: boolean;
  defaultValue?: string;
  disabled?: boolean;
  max?: number;
  min?: number;
  onValueChange?: (value: number) => void;
  placeholder?: string;
  readOnly?: boolean;
  size?: InputSize;
  step?: number;
  value?: string;
  variant?: FormControlVariant;
}

export interface NumberInputControlProps {
  class?: unknown;
  clearable?: boolean;
  variant?: FormControlVariant;
}
// #endregion

// #region Parts
export const NumberInputRoot = defineComponent({
  inheritAttrs: false,
  name: "NumberInputRoot",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    clearable: { default: false, type: Boolean },
    defaultValue: { default: undefined, type: String },
    disabled: { default: undefined, type: Boolean },
    max: { default: undefined, type: Number },
    min: { default: undefined, type: Number },
    onValueChange: {
      default: undefined,
      type: Function as PropType<NumberInputProps["onValueChange"]>,
    },
    placeholder: { default: undefined, type: String },
    readOnly: { default: undefined, type: Boolean },
    size: { default: "md", type: String as PropType<InputSize> },
    step: { default: undefined, type: Number },
    value: { default: undefined, type: String },
    variant: { default: undefined, type: String as PropType<FormControlVariant> },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        NumberInputPrimitive.Root as ArkPart,
        {
          ...attrs,
          class: cn(numberInputVariants().base(), props.class),
          "data-size": props.size,
          defaultValue: props.defaultValue,
          disabled: props.disabled,
          max: props.max,
          min: props.min,
          modelValue: props.value,
          onValueChange: props.onValueChange
            ? (details: { value: string }) => props.onValueChange?.(Number(details.value))
            : undefined,
          readOnly: props.readOnly,
          step: props.step,
        },
        () =>
          slots.default?.() ?? [
            h(
              NumberInputControl as ArkPart,
              { clearable: props.clearable, variant: props.variant },
              () => [
                h(NumberInputDecrementTrigger as ArkPart),
                h(NumberInputInput as ArkPart, {
                  placeholder: props.placeholder,
                  size: props.size,
                  variant: props.variant,
                }),
                h(NumberInputClearTrigger as ArkPart),
                h(NumberInputIncrementTrigger as ArkPart),
              ],
            ),
          ],
      );
  },
});

export const NumberInputControl = defineComponent({
  inheritAttrs: false,
  name: "NumberInputControl",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    clearable: { default: false, type: Boolean },
    variant: { default: undefined, type: String as PropType<FormControlVariant> },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const resolved = {
        surfaceVariant: undefined,
        variant: props.variant ?? ("primary" as FormControlVariant),
      };
      const shellArgs = { variant: resolved.variant };
      const controlProps = { "data-variant": resolved.variant };

      return h(
        NumberInputPrimitive.Control as ArkPart,
        {
          ...attrs,
          ...controlProps,
          class: cn(
            numberInputVariants().control(),
            formControlGroupShellVariants({ size: "md", ...shellArgs }),
            props.class,
          ),
          "data-clearable": props.clearable || undefined,
        },
        slots,
      );
    };
  },
});

export const NumberInputClearTrigger = defineComponent({
  name: "NumberInputClearTrigger",
  setup() {
    return () =>
      h(NumberInputPrimitive.Context as ArkPart, null, {
        default: (api: { setValue: (value: number) => void; value: string | undefined }) => {
          const hasValue =
            api.value !== undefined && api.value !== null && String(api.value).length > 0;

          if (!hasValue) {
            return null;
          }

          return h(InputClearButton as ArkPart, {
            class: numberInputVariants().clearTrigger(),
            onClear: () => api.setValue(Number.NaN),
          });
        },
      });
  },
});

export const NumberInputDecrementTrigger = defineComponent({
  inheritAttrs: false,
  name: "NumberInputDecrementTrigger",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs }) {
    return () =>
      h(
        NumberInputPrimitive.DecrementTrigger as ArkPart,
        {
          ...attrs,
          asChild: true,
          class: cn(numberInputVariants().decrementTrigger(), props.class),
        },
        () =>
          h(Button as ArkPart, { "aria-label": "Decrement", variant: "ghost" }, () =>
            h(PhMinus, { "aria-hidden": true }),
          ),
      );
  },
});

export const NumberInputIncrementTrigger = defineComponent({
  inheritAttrs: false,
  name: "NumberInputIncrementTrigger",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs }) {
    return () =>
      h(
        NumberInputPrimitive.IncrementTrigger as ArkPart,
        {
          ...attrs,
          asChild: true,
          class: cn(numberInputVariants().incrementTrigger(), props.class),
        },
        () =>
          h(Button as ArkPart, { "aria-label": "Increment", variant: "ghost" }, () =>
            h(PhPlus, { "aria-hidden": true }),
          ),
      );
  },
});

export const NumberInputInput = defineComponent({
  inheritAttrs: false,
  name: "NumberInputInput",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    classNames: { default: undefined, type: Object as PropType<InputProps["classNames"]> },
    placeholder: { default: undefined, type: String },
    size: { default: undefined, type: String as PropType<InputSize> },
    variant: { default: undefined, type: String as PropType<FormControlVariant> },
  },
  setup(props, { attrs }) {
    return () =>
      h(NumberInputPrimitive.Input as ArkPart, { asChild: true, ...attrs }, () =>
        h(Input as ArkPart, {
          ...(attrs as object),
          class: cn(numberInputVariants().input(), props.class),
          classNames: props.classNames,
          placeholder: props.placeholder,
          size: props.size,
          variant: props.variant,
        }),
      );
  },
});

export const NumberInputScrubber = defineComponent({
  inheritAttrs: false,
  name: "NumberInputScrubber",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        NumberInputPrimitive.Scrubber as ArkPart,
        {
          ...attrs,
          asChild: true,
          class: cn(numberInputVariants().scrubber(), props.class),
        },
        () =>
          h(NumberInputPrimitive.Label as ArkPart, { asChild: true }, () =>
            h(FieldLabel as ArkPart, null, slots.default),
          ),
      );
  },
});
// #endregion
