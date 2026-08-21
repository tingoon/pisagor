import type { InputOTPProps } from "@pisagor/vue";
import { InputOTP } from "@pisagor/vue";
import { defineComponent, h, type PropType, type VNodeChild } from "vue";
import { type FieldPresentationProps, FieldShell } from "../../internal/field-shell";

type ArkPart = Parameters<typeof h>[0];

// #region Types
export interface OtpFieldProps
  extends FieldPresentationProps,
    Omit<InputOTPProps, "class" | "invalid" | "onValueChange" | "value" | "name" | "onBlur"> {
  name?: string;
  onBlur?: () => void;
  onValueChange: (value: string) => void;
  value?: string;
  /**
   * Number of OTP digits.
   *
   * @defaultValue 6
   */
  length?: number;
}
// #endregion

// #region Part
export const OtpField = defineComponent({
  inheritAttrs: false,
  name: "OtpField",
  props: {
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
    length: { default: 6, type: Number },
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
    value: { default: undefined, type: String },
    variant: { default: undefined, type: String as PropType<InputOTPProps["variant"]> },
  },
  setup(props, { attrs }) {
    return () => {
      const length = props.length ?? 6;
      const separatorAt = length > 1 ? Math.floor(length / 2) : -1;
      const slots: ReturnType<typeof h>[] = [];

      for (let index = 0; index < length; index += 1) {
        if (index === separatorAt) {
          slots.push(h(InputOTP.Separator as ArkPart, { key: `otp-separator-${index}` }));
        }
        slots.push(h(InputOTP.Slot as ArkPart, { index, key: `otp-slot-${index}` }));
      }

      return h(
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
            InputOTP as ArkPart,
            {
              ...attrs,
              disabled: props.disabled,
              id: props.id,
              invalid: props.invalid,
              name: props.name,
              onBlur: props.onBlur,
              onValueChange: (nextValue: string[]) => props.onValueChange(nextValue.join("")),
              variant: props.variant,
              ...(props.value !== undefined
                ? { value: props.value ? props.value.split("") : [] }
                : {}),
            },
            () => slots,
          ),
      );
    };
  },
});
// #endregion
