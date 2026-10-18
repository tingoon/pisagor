import { TextField } from "@pisagor/solid-form";

export function Disabled() {
  return (
    <TextField
      autocomplete="email"
      disabled
      id="text-field-email-disabled"
      label="Email"
      placeholder="you@example.com"
      type="email"
    />
  );
}
