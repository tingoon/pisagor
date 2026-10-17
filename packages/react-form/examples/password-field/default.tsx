import source from "./default.tsx?raw";
import { PasswordField } from "@pisagor/react-form";

export function Default() {
  return (
    <PasswordField
      autoComplete="new-password"
      description="At least 8 characters, including a number."
      id="password-field-new"
      label="New password"
      placeholder="Create a password"
    />
  );
}

export { source as DefaultSource };
