import { PhoneInput, type PhoneInputProps } from "@pisagor/solid/phone-input";
import { splitProps } from "solid-js";
import {
  type FieldPresentationProps,
  FieldShell,
} from "../../internal/field-shell";

// #region Types
export interface PhoneFieldProps
  extends FieldPresentationProps,
    Omit<PhoneInputProps, "name" | "onBlur" | "onChange" | "value"> {
  name?: string;
  value?: string;
  onBlur?: () => void;
  onValueChange?: (value: string) => void;
}
// #endregion

// #region Component
export function PhoneField(props: PhoneFieldProps) {
  const [local, phoneInputProps] = splitProps(props, [
    "orientation",
    "defaultCountry",
    "invalid",
    "name",
    "value",
    "description",
    "error",
    "id",
    "label",
    "labelAccessory",
    "labelProps",
    "onBlur",
    "onValueChange",
    "class",
  ]);

  return (
    <FieldShell
      class={local.class}
      description={local.description}
      error={local.error}
      id={local.id}
      invalid={local.invalid}
      label={local.label}
      labelAccessory={local.labelAccessory}
      labelProps={local.labelProps}
      orientation={local.orientation}
    >
      <PhoneInput
        {...phoneInputProps}
        {...(local.value !== undefined ? { value: local.value } : {})}
        defaultCountry={local.defaultCountry}
        id={local.id}
        invalid={local.invalid}
        name={local.name}
        onBlur={local.onBlur}
        onChange={local.onValueChange}
      />
    </FieldShell>
  );
}
// #endregion
