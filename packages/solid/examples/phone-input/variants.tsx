import { PhoneInput } from "@pisagor/solid/phone-input";

export function Variants() {
  return (
    <div class="flex flex-col gap-2">
      <PhoneInput defaultCountry="NL" placeholder="Primary" variant="primary" />
      <PhoneInput
        defaultCountry="NL"
        placeholder="Secondary"
        variant="secondary"
      />
    </div>
  );
}
