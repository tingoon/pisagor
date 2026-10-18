import { FileField } from "@pisagor/react-form";

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
