/** @jsxImportSource solid-js */
import { PasswordInput } from "@pisagor/solid";

export function Autocomplete() {
  return (
    <div class="flex flex-col gap-2">
      <PasswordInput autoComplete="current-password" placeholder="••••••••" />
      <PasswordInput autoComplete="new-password" placeholder="••••••••" />
    </div>
  );
}
