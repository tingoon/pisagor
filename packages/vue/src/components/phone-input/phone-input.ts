import { PhGlobe } from "@phosphor-icons/vue";
import { phoneInputInlineVariants, phoneInputVariants } from "@pisagor/styles/ui/phone-input";
import { cn } from "@pisagor/utils";

type ClassValue = Parameters<typeof cn>[0];

import { defineComponent, h, type PropType, ref } from "vue";
import { FormControlVariantProvider } from "../../internal/form-control/form-control-variant-context";
import type { FormControlVariant } from "../../internal/form-control/form-control-variants";
import type { WithTestId } from "../../internal/types";
import type { InputProps } from "../input";
import { InputGroup } from "../input-group";
import { InputGroupRoot } from "../input-group/input-group-core";

type ArkPart = Parameters<typeof h>[0];

export interface PhoneInputProps extends WithTestId {
  class?: ClassValue;
  size?: InputProps["size"];
  variant?: FormControlVariant;
  invalid?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  defaultCountry?: string;
  inputProps?: Omit<
    InputProps,
    "className" | "onChange" | "size" | "type" | "value" | "defaultValue"
  >;
  popupProps?: unknown;
}

export const PhoneInput = defineComponent({
  inheritAttrs: false,
  name: "PhoneInput",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<ClassValue> },
    defaultCountry: { default: undefined, type: String as PropType<string | undefined> },
    defaultValue: { default: undefined, type: String as PropType<string | undefined> },
    disabled: { default: undefined, type: Boolean },
    inputProps: {
      default: undefined,
      type: Object as PropType<PhoneInputProps["inputProps"] | undefined>,
    },
    invalid: { default: undefined, type: Boolean },
    onChange: { default: undefined, type: Function as PropType<PhoneInputProps["onChange"]> },
    readOnly: { default: undefined, type: Boolean },
    size: { default: undefined, type: String as PropType<PhoneInputProps["size"]> },
    testId: String,
    value: { default: undefined, type: String as PropType<string | undefined> },
    variant: { default: undefined, type: String as PropType<FormControlVariant | undefined> },
  },
  setup(props, { attrs }) {
    return () => {
      const slots = phoneInputVariants({ size: props.size ?? "md" });
      const isControlled = props.value !== undefined;
      const internalValue = ref(props.defaultValue ?? "");
      const value = isControlled ? (props.value ?? "") : internalValue.value;

      const handleValueChange = (next: string) => {
        if (!isControlled) internalValue.value = next;
        props.onChange?.(next);
      };

      return h(FormControlVariantProvider as ArkPart, { value: props.variant }, () =>
        h(
          InputGroupRoot as ArkPart,
          {
            ...attrs,
            class: cn(props.class, (attrs as { class?: ClassValue }).class),
            "data-part": "root",
            "data-scope": "phone-input",
            "data-testid": props.testId,
            role: "group",
            size: props.size,
            variant: props.variant,
          },
          () => [
            h(
              InputGroup.Addon as ArkPart,
              {
                align: "inline-start",
                class: slots.countryTrigger({
                  class: cn((attrs as { class?: ClassValue }).class),
                }),
                "data-part": "country-trigger",
                "data-scope": "phone-input",
              },
              () =>
                h("span", { class: slots.flag({ class: phoneInputInlineVariants() }) }, () =>
                  h(PhGlobe),
                ),
            ),
            h(
              InputGroup.Input as ArkPart,
              {
                ...props.inputProps,
                ...attrs,
                "aria-invalid": props.invalid || undefined,
                class: slots.input({
                  class: cn(
                    (props.inputProps as unknown as { class?: ClassValue } | undefined)?.class,
                    (attrs as { class?: ClassValue }).class,
                  ),
                }),
                "data-invalid": props.invalid || undefined,
                "data-testid": props.testId ? `${props.testId}-input` : undefined,
                disabled: props.disabled,
                onValueChange: handleValueChange,
                readOnly: props.readOnly,
                type: "tel",
                value,
              } as unknown as Parameters<typeof h>[1],
            ),
          ],
        ),
      );
    };
  },
});
