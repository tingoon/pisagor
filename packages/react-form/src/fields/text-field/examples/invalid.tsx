import { TextField } from "..";

export function Invalid() {
  return (
    <TextField
      autoComplete="email"
      error="Please enter a valid email address."
      id="text-field-email-invalid"
      invalid
      label="Email"
      placeholder="you@example.com"
      type="email"
      value="not-an-email"
    />
  );
}
