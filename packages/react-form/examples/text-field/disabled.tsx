import source from "./disabled.tsx?raw";
import { TextField } from "@pisagor/react-form";

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

export { source as DisabledSource };
