import { PhoneInput } from "@pisagor/react/phone-input";

export function Sizes() {
  return (
    <div className="flex flex-col gap-2">
      <PhoneInput defaultCountry="NL" placeholder="Small" size="sm" />
      <PhoneInput defaultCountry="NL" placeholder="Medium" size="md" />
      <PhoneInput defaultCountry="NL" placeholder="Large" size="lg" />
    </div>
  );
}
