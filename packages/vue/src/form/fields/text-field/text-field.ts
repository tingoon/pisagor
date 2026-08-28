import { defineComponent, h, type PropType, type VNodeChild } from "vue";
import type { InputProps } from "../../../components";
import { Input } from "../../../components";
import { type FieldPresentationProps, FieldShell } from "../../internal/field-shell";
import type { SetRequired } from "../../internal/types";

type ArkPart = Parameters<typeof h>[0];

// #region Types
type InputControlProps = SetRequired<
  Omit<InputProps, "name" | "onBlur" | "onChange" | "value">,
  "onValueChange"
>;

export interface TextFieldProps extends FieldPresentationProps, InputControlProps {
  name?: string;
  onBlur?: () => void;
  value?: string;
}
// #endregion

// #region Part
export const TextField = defineComponent({
  inheritAttrs: false,
  name: "TextField",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    classNames: { default: undefined, type: Object as PropType<InputProps["classNames"]> },
    clearable: { default: undefined, type: Boolean },
    defaultValue: {
      default: undefined,
      type: [String, Number, Array] as PropType<InputProps["defaultValue"]>,
    },
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
    name: { default: undefined, type: String },
    onBlur: { default: undefined, type: Function as PropType<() => void> },
    onValueChange: {
      required: true,
      type: Function as PropType<(value: string) => void>,
    },
    orientation: {
      default: undefined,
      type: String as PropType<FieldPresentationProps["orientation"]>,
    },
    placeholder: { default: undefined, type: String },
    readOnly: { default: undefined, type: Boolean },
    size: { default: undefined, type: String as PropType<InputProps["size"]> },
    type: { default: undefined, type: String },
    value: { default: undefined, type: [String, Number, Array] as PropType<InputProps["value"]> },
    variant: { default: undefined, type: String as PropType<InputProps["variant"]> },
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
          h(Input as ArkPart, {
            ...attrs,
            classNames: props.classNames,
            clearable: props.clearable,
            defaultValue: props.defaultValue,
            disabled: props.disabled,
            id: props.id,
            name: props.name,
            onBlur: props.onBlur,
            onValueChange: props.onValueChange,
            placeholder: props.placeholder,
            readOnly: props.readOnly,
            size: props.size,
            type: props.type,
            variant: props.variant,
            ...(props.value !== undefined ? { value: props.value } : {}),
          }),
      );
  },
});
// #endregion
