import { TextareaField } from "..";

export function Invalid() {
  return (
    <TextareaField
      error="Please enter a short bio."
      id="textarea-field-bio-invalid"
      invalid
      label="Bio"
      placeholder="Tell us about yourself…"
    />
  );
}
