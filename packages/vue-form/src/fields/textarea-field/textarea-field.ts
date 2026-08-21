import type { TextareaProps } from "@pisagor/vue";
import { Textarea } from "@pisagor/vue";
import { defineComponent, h, type PropType, type VNodeChild } from "vue";
import { type FieldPresentationProps, FieldShell } from "../../internal/field-shell";
import type { SetRequired } from "../../internal/types";

type ArkPart = Parameters<typeof h>[0];

// #region Types
type TextareaControlProps = SetRequired<
  Omit<TextareaProps, "name" | "onBlur" | "onChange" | "value">,
  "onValueChange"
>;

export interface TextareaFieldProps extends FieldPresentationProps, TextareaControlProps {
  name?: string;
  onBlur?: () => void;
  value?: string;
}
// #endregion

// #region Part
export const TextareaField = defineComponent({
  inheritAttrs: false,
  name: "TextareaField",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    classNames: { default: undefined, type: Object as PropType<TextareaProps["classNames"]> },
    clearable: { default: undefined, type: Boolean },
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
    rows: { default: undefined, type: Number },
    value: { default: undefined, type: String },
    variant: { default: undefined, type: String as PropType<TextareaProps["variant"]> },
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
          h(Textarea as ArkPart, {
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
            rows: props.rows,
            variant: props.variant,
            ...(props.value !== undefined ? { value: props.value } : {}),
          }),
      );
  },
});
// #endregion
