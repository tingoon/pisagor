import { defineComponent, h, type PropType, type VNodeChild } from "vue";
import type { DatePickerProps } from "../../../components";
import { DatePicker } from "../../../components";
import { type FieldPresentationProps, FieldShell } from "../../internal/field-shell";
import type { SetRequired } from "../../internal/types";

type ArkPart = Parameters<typeof h>[0];

// #region Types
type DatePickerControlProps = SetRequired<
  Omit<DatePickerProps, "invalid" | "name" | "value">,
  "onValueChange"
>;

export interface DateFieldProps extends FieldPresentationProps, DatePickerControlProps {
  name?: string;
  onBlur?: () => void;
  placeholder?: string;
  value?: DatePickerProps["value"];
}
// #endregion

// #region Part
export const DateField = defineComponent({
  inheritAttrs: false,
  name: "DateField",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    defaultValue: { default: undefined, type: null as unknown as PropType<unknown> },
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
      type: Function as PropType<(value: unknown) => void>,
    },
    orientation: {
      default: undefined,
      type: String as PropType<FieldPresentationProps["orientation"]>,
    },
    placeholder: { default: "Pick a date", type: String },
    value: { default: undefined, type: null as unknown as PropType<unknown> },
    variant: { default: undefined, type: String as PropType<DatePickerProps["variant"]> },
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
          h(
            DatePicker as ArkPart,
            {
              ...attrs,
              defaultValue: props.defaultValue,
              disabled: props.disabled,
              invalid: props.invalid,
              name: props.name,
              onOpenChange: (details: { open: boolean }) => {
                if (!details.open) {
                  props.onBlur?.();
                }
              },
              onValueChange: (nextValue: unknown) => props.onValueChange(nextValue ?? []),
              variant: props.variant,
              ...(props.value !== undefined ? { value: props.value ?? [] } : {}),
            },
            () => [
              h(DatePicker.Input as ArkPart, { id: props.id, placeholder: props.placeholder }),
              h(DatePicker.Content as ArkPart),
            ],
          ),
      );
  },
});
// #endregion
