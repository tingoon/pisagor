import source from "./autocomplete.tsx?raw";
import { PasswordInput } from "@pisagor/react";

export function Autocomplete() {
  return (
    <div className="flex flex-col gap-2">
      <PasswordInput autoComplete="current-password" placeholder="••••••••" />
      <PasswordInput autoComplete="new-password" placeholder="••••••••" />
    </div>
  );
}

export { source as AutocompleteSource };
