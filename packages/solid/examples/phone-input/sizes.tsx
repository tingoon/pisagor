import source from "./sizes.tsx?raw";
import { PhoneInput } from "@pisagor/solid/phone-input";

export function Sizes() {
  return (
    <div class="flex flex-col gap-2">
      <PhoneInput defaultCountry="NL" placeholder="Small" size="sm" />
      <PhoneInput defaultCountry="NL" placeholder="Medium" size="md" />
      <PhoneInput defaultCountry="NL" placeholder="Large" size="lg" />
    </div>
  );
}

export { source as SizesSource };
