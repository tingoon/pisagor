import { defineComponent, h, type PropType, type VNodeChild } from "vue";
import type { NumberInputProps } from "../../../components";
import { NumberInput } from "../../../components";
import { type FieldPresentationProps, FieldShell } from "../../internal/field-shell";
import type { SetRequired } from "../../internal/types";

type ArkPart = Parameters<typeof h>[0];

// #region Types
type NumberInputControlProps = SetRequired<
  Omit<NumberInputProps, "invalid" | "name" | "value">,
  "onValueChange"
>;

export interface NumberFieldProps extends FieldPresentationProps, NumberInputControlProps {
  name?: string;
  onBlur?: () => void;
  placeholder?: string;
  value?: number;
}
// #endregion

// #region Part
export const NumberField = defineComponent({
  inheritAttrs: false,
  name: "NumberField",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    clearable: { default: false, type: Boolean },
    defaultValue: { default: undefined, type: String },
    description: { default: undefined, type: null as unknown as PropType<VNodeChild> },
    disabled: { default: undefined, type: Boolean },
    error: { default: undefined, type: null as unknown as PropType<VNodeChild> },
    id: { default: undefined, type: String },
    invalid: { default: undefined, type: Boolean },
    label: { default: undefined, type: null as unknown as PropType<VNodeChild> },
    labelAccessory: { default: undefined, type: null as unknown as PropType<VNodeChild> },
    labelProps: {
      default: undefined,
      type: Object as PropType<FieldPresentationProps["labelProps"]>,
    },
    max: { default: undefined, type: Number },
    min: { default: undefined, type: Number },
    name: { default: undefined, type: String },
    onBlur: { default: undefined, type: Function as PropType<() => void> },
    onValueChange: {
      required: true,
      type: Function as PropType<(value: number) => void>,
    },
    orientation: {
      default: undefined,
      type: String as PropType<FieldPresentationProps["orientation"]>,
    },
    placeholder: { default: undefined, type: String },
    readOnly: { default: undefined, type: Boolean },
    size: { default: undefined, type: String as PropType<NumberInputProps["size"]> },
    step: { default: undefined, type: Number },
    value: { default: undefined, type: Number },
    variant: { default: undefined, type: String as PropType<NumberInputProps["variant"]> },
  },
  setup(props, { attrs }) {
    return () =>
      h(
        FieldShell as ArkPart,
        {
          class: props.class,
          description: props.description,
          error: props.error,
          id: props.id,
          invalid: props.invalid,
          label: props.label,
          labelAccessory: props.labelAccessory,
          labelProps: props.labelProps,
          orientation: props.orientation,
        },
        () =>
          h(NumberInput as ArkPart, {
            ...attrs,
            clearable: props.clearable,
            defaultValue: props.defaultValue,
            disabled: props.disabled,
            id: props.id,
            invalid: props.invalid,
            max: props.max,
            min: props.min,
            name: props.name,
            onBlur: props.onBlur,
            onValueChange: props.onValueChange,
            placeholder: props.placeholder,
            readOnly: props.readOnly,
            size: props.size,
            step: props.step,
            variant: props.variant,
            ...(props.value !== undefined
              ? { value: Number.isFinite(props.value) ? String(props.value) : "" }
              : {}),
          }),
      );
  },
});
// #endregion
