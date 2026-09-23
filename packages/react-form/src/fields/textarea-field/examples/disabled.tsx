import { TextareaField } from "..";

export function Disabled() {
  return (
    <TextareaField
      disabled
      id="textarea-field-bio-disabled"
      label="Bio"
      placeholder="Tell us about yourself…"
    />
  );
}
