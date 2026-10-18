import { PhoneField } from "@pisagor/react-form";

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
