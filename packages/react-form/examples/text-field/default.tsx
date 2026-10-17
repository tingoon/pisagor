import { TextField } from "@pisagor/react-form";

export function Default() {
  return (
    <TextField
      autoComplete="name"
      description="As it should appear on your invoices."
      id="text-field-full-name"
      label="Full name"
      placeholder="Jane Doe"
    />
  );
}
