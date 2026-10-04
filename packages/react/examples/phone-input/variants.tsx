import { PhoneInput } from "@pisagor/react/phone-input";

export function Variants() {
  return (
    <div className="flex flex-col gap-2">
      <PhoneInput defaultCountry="NL" placeholder="Primary" variant="primary" />
      <PhoneInput
        defaultCountry="NL"
        placeholder="Secondary"
        variant="secondary"
      />
    </div>
  );
}
