import { defineComponent, h, type PropType, type VNodeChild } from "vue";
import { Field, Switch } from "../../../components";
import type { FieldPresentationProps } from "../../internal/field-shell";

type ArkPart = Parameters<typeof h>[0];

// #region Types
interface SwitchControlProps {
  class?: unknown;
  classNames?: unknown;
  disabled?: boolean;
  onValueChange: (value: boolean) => void;
  readOnly?: boolean;
  variant?: string;
}

export interface SwitchFieldProps extends FieldPresentationProps, SwitchControlProps {
  checked?: boolean;
  name?: string;
  onBlur?: () => void;
  orientation?: "horizontal" | "vertical" | "responsive";
}
// #endregion

// #region Component
export const SwitchField = defineComponent({
  inheritAttrs: false,
  name: "SwitchField",
  props: {
    checked: { default: undefined, type: Boolean },
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    classNames: { default: undefined, type: Object },
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
      type: Function as PropType<(value: boolean) => void>,
    },
    orientation: {
      default: "horizontal",
      type: String as PropType<"horizontal" | "vertical" | "responsive">,
    },
    variant: { default: undefined, type: String },
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
          h(Switch as ArkPart, {
            ...attrs,
            ...(props.checked !== undefined ? { checked: props.checked } : {}),
            classNames: props.classNames,
            disabled: props.disabled,
            id: props.id,
            invalid: props.invalid,
            name: props.name,
            onBlur: props.onBlur,
            onValueChange: props.onValueChange,
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
