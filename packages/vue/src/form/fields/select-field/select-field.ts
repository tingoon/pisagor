import { defineComponent, h, type PropType, type VNodeChild } from "vue";
import type { SelectProps } from "../../../components";
import { Select } from "../../../components";
import { type FieldPresentationProps, FieldShell } from "../../internal/field-shell";

type ArkPart = Parameters<typeof h>[0];

// #region Types
interface SelectOption {
  label: string;
  value: string;
}

export interface SelectFieldProps
  extends FieldPresentationProps,
    Omit<SelectProps, "class" | "invalid" | "name" | "onValueChange" | "value" | "items"> {
  items: Array<SelectOption | string>;
  name?: string;
  onBlur?: () => void;
  onValueChange: (value: string) => void;
  placeholder?: string;
  value?: string;
}
// #endregion

// #region Component
export const SelectField = defineComponent({
  inheritAttrs: false,
  name: "SelectField",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    clearable: { default: undefined, type: Boolean },
    description: { default: undefined, type: null as unknown as PropType<VNodeChild> },
    disabled: { default: undefined, type: Boolean },
    error: { default: undefined, type: null as unknown as PropType<VNodeChild> },
    id: { default: undefined, type: String },
    invalid: { default: undefined, type: Boolean },
    items: {
      required: true,
      type: Array as PropType<Array<SelectOption | string>>,
    },
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
    placeholder: { default: "Select an option", type: String },
    value: { default: undefined, type: String },
    variant: { default: undefined, type: String as PropType<SelectProps["variant"]> },
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
          h(Select as ArkPart, {
            ...attrs,
            clearable: props.clearable,
            disabled: props.disabled,
            id: props.id,
            invalid: props.invalid,
            items: props.items,
            name: props.name,
            onFocusOutside: props.onBlur,
            onValueChange: (nextValue: string | string[]) => {
              props.onValueChange(Array.isArray(nextValue) ? (nextValue.at(0) ?? "") : nextValue);
            },
            placeholder: props.placeholder,
            variant: props.variant,
            ...(props.value !== undefined ? { value: props.value ? [props.value] : [] } : {}),
          }),
      );
  },
});
// #endregion
