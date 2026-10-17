import { TextField } from "@pisagor/solid-form";

export function Default() {
  return (
    <TextField
      autocomplete="name"
      description="As it should appear on your invoices."
      id="text-field-full-name"
      label="Full name"
      placeholder="Jane Doe"
    />
  );
}
