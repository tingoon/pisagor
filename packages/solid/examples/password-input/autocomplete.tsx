import source from "./autocomplete.tsx?raw";
import { PasswordInput } from "@pisagor/solid";

export function Autocomplete() {
  return (
    <div class="flex flex-col gap-2">
      <PasswordInput autocomplete="current-password" placeholder="••••••••" />
      <PasswordInput autocomplete="new-password" placeholder="••••••••" />
    </div>
  );
}

export { source as AutocompleteSource };
