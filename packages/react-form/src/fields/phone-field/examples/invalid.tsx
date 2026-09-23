import { PhoneField } from "..";

export function Invalid() {
  return (
    <PhoneField
      defaultCountry="US"
      error="Please enter a phone number."
      id="phone-field-invalid"
      invalid
      label="Phone number"
      placeholder="Enter phone number"
    />
  );
}
