/** @jsxImportSource solid-js */
import { PasswordInput } from "@pisagor/solid/password-input";

export function Sizes() {
  return (
    <div class="flex flex-col gap-2">
      <PasswordInput placeholder="Small" size="sm" />
      <PasswordInput placeholder="Medium" size="md" />
      <PasswordInput placeholder="Large" size="lg" />
    </div>
  );
}
