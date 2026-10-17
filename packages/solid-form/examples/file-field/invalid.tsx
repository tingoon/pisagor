import { FileField } from "@pisagor/solid-form";

export function Invalid() {
  return (
    <FileField
      error="Please choose a file."
      id="file-field-avatar-invalid"
      invalid
      label="Avatar"
    />
  );
}
