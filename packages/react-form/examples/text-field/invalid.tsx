import source from "./invalid.tsx?raw";
import { TextField } from "@pisagor/react-form";

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

export { source as InvalidSource };
