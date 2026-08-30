import { PhGlobe } from "@phosphor-icons/vue";
import { phoneInputRecipe } from "@pisagor/recipes/phone-input";
import { cn } from "@pisagor/utils";

type FormControlVariant = "primary" | "secondary";

type ClassValue = Parameters<typeof cn>[0];

import { defineComponent, h, type PropType, ref } from "vue";
import type { InputProps } from "../components/input";
import { InputGroup } from "../components/input-group";
import { InputGroupRoot } from "../components/input-group/input-group-core";

type ArkPart = Parameters<typeof h>[0];

export interface PhoneInputProps {
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
    value: { default: undefined, type: String as PropType<string | undefined> },
    variant: { default: undefined, type: String as PropType<FormControlVariant | undefined> },
  },
  setup(props, { attrs }) {
    return () => {
      const slots = phoneInputRecipe({ size: props.size ?? "md" });
      const isControlled = props.value !== undefined;
      const internalValue = ref(props.defaultValue ?? "");
      const value = isControlled ? (props.value ?? "") : internalValue.value;

      const handleValueChange = (next: string) => {
        if (!isControlled) internalValue.value = next;
        props.onChange?.(next);
      };

      return h(
        InputGroupRoot as ArkPart,
        {
          ...attrs,
          class: cn(props.class, (attrs as { class?: ClassValue }).class),
          "data-part": "root",
          "data-scope": "phone-input",
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
            () => h("span", { class: slots.flag({ class: slots.flagIcon() }) }, () => h(PhGlobe)),
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
              disabled: props.disabled,
              onValueChange: handleValueChange,
              readOnly: props.readOnly,
              type: "tel",
              value,
            } as unknown as Parameters<typeof h>[1],
          ),
        ],
      );
    };
  },
});
