import { NumberInput as NumberInputPrimitive } from "@ark-ui/vue/number-input";
import { PhMinus, PhPlus } from "@phosphor-icons/vue";
import {
  numberFieldDecrementVariants,
  numberFieldGroupVariants,
  numberFieldIncrementVariants,
  numberFieldScrubberVariants,
  numberFieldVariants,
  numberInputInline2Variants,
  numberInputInlineVariants,
} from "@pisagor/styles/ui/number-input";
import { cn } from "@pisagor/utils";
import { defineComponent, h, type PropType } from "vue";
import { FormControlVariantProvider } from "../../internal/form-control/form-control-variant-context";
import type { FormControlVariant } from "../../internal/form-control/form-control-variants";
import {
  formControlGroupShellVariants,
  formControlShellProps,
  shellVariantArgs,
} from "../../internal/form-control/form-control-variants";
import { useFormControlVariant } from "../../internal/form-control/use-form-control-variant";
import type { WithTestId } from "../../internal/types";
import { Button } from "../button/button";
import { FieldLabel } from "../field/field";
import { Input, type InputProps } from "../input/input";
import { InputClearButton } from "../input/input-clear-button";

type ArkPart = Parameters<typeof h>[0];
type InputSize = InputProps["size"];

// #region Types
export interface NumberInputProps extends WithTestId {
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

export interface NumberInputGroupProps {
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
    testId: String,
    value: { default: undefined, type: String },
    variant: { default: undefined, type: String as PropType<FormControlVariant> },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(FormControlVariantProvider as ArkPart, { value: props.variant }, () =>
        h(
          NumberInputPrimitive.Root as ArkPart,
          {
            ...attrs,
            class: cn(numberFieldVariants(), props.class),
            "data-size": props.size,
            "data-testid": props.testId,
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
                NumberInputGroup as ArkPart,
                { clearable: props.clearable, variant: props.variant },
                () => [
                  h(NumberInputDecrement as ArkPart),
                  h(NumberInputInput as ArkPart, {
                    placeholder: props.placeholder,
                    size: props.size,
                    variant: props.variant,
                  }),
                  h(NumberInputClearTrigger as ArkPart),
                  h(NumberInputIncrement as ArkPart),
                ],
              ),
            ],
        ),
      );
  },
});

export const NumberInputGroup = defineComponent({
  inheritAttrs: false,
  name: "NumberInputGroup",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    clearable: { default: false, type: Boolean },
    variant: { default: undefined, type: String as PropType<FormControlVariant> },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const resolved = useFormControlVariant(props.variant);
      const shellArgs = shellVariantArgs(resolved);
      const controlProps = formControlShellProps(resolved);

      return h(
        NumberInputPrimitive.Control as ArkPart,
        {
          ...attrs,
          ...controlProps,
          class: cn(
            numberFieldGroupVariants(),
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
            class: numberInputInline2Variants(),
            onClear: () => api.setValue(Number.NaN),
          });
        },
      });
  },
});

export const NumberInputDecrement = defineComponent({
  inheritAttrs: false,
  name: "NumberInputDecrement",
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
          class: cn(numberFieldDecrementVariants(), props.class),
        },
        () =>
          h(Button as ArkPart, { "aria-label": "Decrement", variant: "ghost" }, () =>
            h(PhMinus, { "aria-hidden": true }),
          ),
      );
  },
});

export const NumberInputIncrement = defineComponent({
  inheritAttrs: false,
  name: "NumberInputIncrement",
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
          class: cn(numberFieldIncrementVariants(), props.class),
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
          class: cn(numberInputInlineVariants(), props.class),
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
          class: cn(numberFieldScrubberVariants(), props.class),
        },
        () =>
          h(NumberInputPrimitive.Label as ArkPart, { asChild: true }, () =>
            h(FieldLabel as ArkPart, null, slots.default),
          ),
      );
  },
});
// #endregion
