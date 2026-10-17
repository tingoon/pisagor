import source from "./invalid.tsx?raw";
import { TagsInputField } from "@pisagor/solid-form";

export function Invalid() {
  return (
    <TagsInputField
      error="Add at least one skill."
      id="tags-input-field-skills-invalid"
      invalid
      label="Skills"
    />
  );
}

export { source as InvalidSource };
