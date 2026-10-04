/** @jsxImportSource solid-js */
import { TextField } from "@pisagor/solid-form";

export function Invalid() {
  return (
    <TextField
      autocomplete="email"
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
