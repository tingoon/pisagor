import { PhoneField } from "@pisagor/react-form";

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
