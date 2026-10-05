import { PhoneField } from "@pisagor/solid-form";

export function Disabled() {
  return (
    <PhoneField
      defaultCountry="US"
      disabled
      id="phone-field-disabled"
      label="Phone number"
      placeholder="Enter phone number"
    />
  );
}
