/** @jsxImportSource solid-js */
import { TagsInputField } from "@pisagor/solid-form";

export function Disabled() {
  return (
    <TagsInputField
      disabled
      id="tags-input-field-skills-disabled"
      label="Skills"
      value={["TypeScript"]}
    />
  );
}
