import { TagsInputField } from "../../src/fields/tags-input-field";

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
