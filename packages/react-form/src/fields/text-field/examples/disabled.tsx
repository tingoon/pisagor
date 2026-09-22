import { TextField } from "..";

export function Disabled() {
  return (
    <TextField
      autoComplete="email"
      disabled
      id="text-field-email-disabled"
      label="Email"
      placeholder="you@example.com"
      type="email"
    />
  );
}
