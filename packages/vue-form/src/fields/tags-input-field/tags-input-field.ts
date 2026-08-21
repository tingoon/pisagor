import type { TagsInputProps } from "@pisagor/vue";
import { TagsInput } from "@pisagor/vue";
import { defineComponent, h, type PropType, type VNodeChild } from "vue";
import { type FieldPresentationProps, FieldShell } from "../../internal/field-shell";
import type { SetRequired } from "../../internal/types";

type ArkPart = Parameters<typeof h>[0];

// #region Types
type TagsInputControlProps = SetRequired<
  Omit<TagsInputProps, "class" | "invalid" | "name">,
  "onValueChange"
>;

export interface TagsInputFieldProps extends FieldPresentationProps, TagsInputControlProps {
  name?: string;
  onBlur?: () => void;
}
// #endregion

// #region Part
export const TagsInputField = defineComponent({
  inheritAttrs: false,
  name: "TagsInputField",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    clearable: { default: undefined, type: Boolean },
    defaultValue: { default: undefined, type: Array as PropType<string[]> },
    description: { default: undefined, type: null as unknown as PropType<VNodeChild> },
    disabled: { default: undefined, type: Boolean },
    editable: { default: undefined, type: Boolean },
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
      type: Function as PropType<(value: string[]) => void>,
    },
    orientation: {
      default: undefined,
      type: String as PropType<FieldPresentationProps["orientation"]>,
    },
    placeholder: { default: undefined, type: String },
    size: { default: undefined, type: String as PropType<TagsInputProps["size"]> },
    value: { default: undefined, type: Array as PropType<string[]> },
    variant: { default: undefined, type: String as PropType<TagsInputProps["variant"]> },
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
          h(TagsInput as ArkPart, {
            ...attrs,
            clearable: props.clearable,
            defaultValue: props.defaultValue,
            disabled: props.disabled,
            editable: props.editable,
            id: props.id,
            invalid: props.invalid,
            name: props.name,
            onBlur: props.onBlur,
            onValueChange: props.onValueChange,
            placeholder: props.placeholder,
            size: props.size,
            variant: props.variant,
            ...(props.value !== undefined ? { value: props.value } : {}),
          }),
      );
  },
});
// #endregion
