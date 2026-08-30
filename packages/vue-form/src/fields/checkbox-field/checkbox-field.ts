import type { CheckboxProps } from "@pisagor/vue";
import { Checkbox, Field } from "@pisagor/vue";
import { defineComponent, h, type PropType, type VNodeChild } from "vue";
import type { FieldPresentationProps } from "../../internal/field-shell";

type ArkPart = Parameters<typeof h>[0];

// #region Types
export interface CheckboxFieldProps
  extends FieldPresentationProps,
    Omit<CheckboxProps, "checked" | "invalid" | "name" | "onCheckedChange" | "onValueChange"> {
  checked?: boolean;
  name?: string;
  onBlur?: () => void;
  onCheckedChange: (checked: boolean) => void;
  orientation?: "horizontal" | "vertical" | "responsive";
}
// #endregion

// #region Component
export const CheckboxField = defineComponent({
  inheritAttrs: false,
  name: "CheckboxField",
  props: {
    checked: { default: undefined, type: Boolean },
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
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
    onCheckedChange: {
      required: true,
      type: Function as PropType<(checked: boolean) => void>,
    },
    orientation: {
      default: "horizontal",
      type: String as PropType<"horizontal" | "vertical" | "responsive">,
    },
    variant: { default: undefined, type: String as PropType<CheckboxProps["variant"]> },
  },
  setup(props, { attrs }) {
    return () => {
      const hasLabel = Boolean(props.label ?? props.labelAccessory);

      return h(
        Field as ArkPart,
        {
          class: props.class,
          invalid: props.invalid,
          orientation: props.orientation,
        },
        () => [
          h(Checkbox as ArkPart, {
            ...attrs,
            ...(props.checked !== undefined ? { checked: props.checked } : {}),
            disabled: props.disabled,
            id: props.id,
            invalid: props.invalid,
            name: props.name,
            onBlur: props.onBlur,
            onCheckedChange: (details: { checked: boolean | "indeterminate" }) =>
              props.onCheckedChange(details.checked === true),
            variant: props.variant,
          }),
          hasLabel || props.description
            ? h(Field.Content as ArkPart, null, () => [
                hasLabel
                  ? h(Field.Label as ArkPart, { ...props.labelProps, for: props.id }, () => [
                      props.label,
                      props.labelAccessory,
                    ])
                  : null,
                props.description
                  ? h(Field.Description as ArkPart, null, () => props.description)
                  : null,
              ])
            : null,
          props.error ? h(Field.Error as ArkPart, null, () => props.error) : null,
        ],
      );
    };
  },
});
// #endregion
