import { defineComponent, h, type PropType, type VNodeChild } from "vue";
import { PhoneInput, type PhoneInputProps } from "../../../components/phone-input";
import { type FieldPresentationProps, FieldShell } from "../../internal/field-shell";

type ArkPart = Parameters<typeof h>[0];

// #region Types
export interface PhoneFieldProps
  extends FieldPresentationProps,
    Omit<PhoneInputProps, "class" | "name" | "onBlur" | "onChange" | "value"> {
  name?: string;
  onBlur?: () => void;
  onValueChange: (value: string) => void;
  value?: string;
}
// #endregion

// #region Component
export const PhoneField = defineComponent({
  inheritAttrs: false,
  name: "PhoneField",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    defaultCountry: { default: undefined, type: String },
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
    size: { default: undefined, type: String as PropType<PhoneInputProps["size"]> },
    value: { default: undefined, type: String },
    variant: { default: undefined, type: String as PropType<PhoneInputProps["variant"]> },
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
          h(PhoneInput as ArkPart, {
            ...attrs,
            defaultCountry: props.defaultCountry,
            defaultValue: props.defaultValue,
            disabled: props.disabled,
            id: props.id,
            invalid: props.invalid,
            name: props.name,
            onBlur: props.onBlur,
            onChange: props.onValueChange,
            readOnly: props.readOnly,
            size: props.size,
            variant: props.variant,
            ...(props.value !== undefined ? { value: props.value } : {}),
          }),
      );
  },
});
// #endregion
