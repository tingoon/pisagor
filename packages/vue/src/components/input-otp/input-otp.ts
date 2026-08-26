import { ark } from "@ark-ui/vue/factory";
import {
  PinInput as PinInputPrimitive,
  type PinInputValueChangeDetails,
} from "@ark-ui/vue/pin-input";
import {
  inputOtpControlVariants,
  inputOtpInlineVariants,
  inputOtpSeparatorVariants,
  inputOtpVariants,
} from "@pisagor/styles/ui/input-otp";
import { cn } from "@pisagor/utils";

type ClassValue = Parameters<typeof cn>[0];

import { defineComponent, h, type PropType } from "vue";
import { FormControlVariantProvider } from "../../internal/form-control/form-control-variant-context";
import type { FormControlVariant } from "../../internal/form-control/form-control-variants";
import type { InputProps } from "../input";
import { Input } from "../input";

type ArkPart = Parameters<typeof h>[0];

export interface InputOTPProps {
  class?: ClassValue;
  otp?: boolean;
  placeholder?: string;
  size?: InputProps["size"];
  variant?: FormControlVariant;
  blurOnComplete?: boolean;
  disabled?: boolean;
  invalid?: boolean;
  mask?: boolean;
  onValueChange?: (value: string[]) => void;
  value?: string[];
  defaultValue?: string[];
  count?: number;
}

export const InputOTPRoot = defineComponent({
  inheritAttrs: false,
  name: "InputOTP",
  props: {
    blurOnComplete: { default: undefined, type: Boolean },
    class: { default: undefined, type: [String, Object, Array] as PropType<ClassValue> },
    count: { default: undefined, type: Number },
    defaultValue: { default: undefined, type: Array as PropType<string[] | undefined> },
    disabled: { default: undefined, type: Boolean },
    invalid: { default: undefined, type: Boolean },
    mask: { default: undefined, type: Boolean },
    onValueChange: {
      default: undefined,
      type: Function as PropType<InputOTPProps["onValueChange"]>,
    },
    otp: { default: true, type: Boolean },
    placeholder: { default: undefined, type: String },
    size: { default: undefined, type: String as PropType<InputOTPProps["size"]> },
    value: { default: undefined, type: Array as PropType<string[] | undefined> },
    variant: { default: undefined, type: String as PropType<FormControlVariant | undefined> },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(FormControlVariantProvider as ArkPart, { value: props.variant }, () =>
        h(
          PinInputPrimitive.Root as ArkPart,
          {
            ...attrs,
            blurOnComplete: props.blurOnComplete,
            class: cn(inputOtpVariants(), props.class, (attrs as { class?: ClassValue }).class),
            count: props.count,
            defaultValue: props.defaultValue,
            disabled: props.disabled,
            invalid: props.invalid,
            mask: props.mask,
            modelValue: props.value,
            onValueChange: props.onValueChange
              ? (details: PinInputValueChangeDetails) => props.onValueChange?.(details.value)
              : undefined,
            otp: props.otp,
            placeholder: props.placeholder ?? "",
          },
          () => [
            h(
              PinInputPrimitive.Control as ArkPart,
              {
                class: cn(
                  inputOtpControlVariants(),
                  props.class,
                  (attrs as { class?: ClassValue }).class,
                ),
              },
              () => slots.default?.(),
            ),
            h(PinInputPrimitive.HiddenInput as ArkPart),
          ],
        ),
      );
  },
});

export const InputOTPSlot = defineComponent({
  inheritAttrs: false,
  name: "InputOTP.Slot",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<ClassValue> },
    variant: { default: undefined, type: String as PropType<FormControlVariant | undefined> },
  },
  setup(props, { attrs }) {
    return () =>
      h(
        PinInputPrimitive.Input as ArkPart,
        {
          ...(attrs as object),
          asChild: true,
        },
        () =>
          h(Input as ArkPart, {
            ...(attrs as object),
            class: cn(
              inputOtpInlineVariants(),
              props.class,
              (attrs as { class?: ClassValue }).class,
            ),
            variant: props.variant,
          }),
      );
  },
});

export const InputOTPSeparator = defineComponent({
  inheritAttrs: false,
  name: "InputOTP.Separator",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<ClassValue> },
  },
  setup(props, { attrs }) {
    return () =>
      h(ark.hr as ArkPart, {
        ...attrs,
        class: cn(
          inputOtpSeparatorVariants(),
          props.class,
          (attrs as { class?: ClassValue }).class,
        ),
        "data-part": "separator",
        "data-scope": "input-otp",
      });
  },
});
