import { PhoneField } from "@pisagor/solid-form";

export function Default() {
  return (
    <PhoneField
      defaultCountry="GB"
      description="We'll only call about your delivery."
      id="phone-field-contact"
      label="Contact number"
      placeholder="Enter phone number"
    />
  );
}
