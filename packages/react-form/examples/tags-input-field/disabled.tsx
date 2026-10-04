import { TagsInputField } from "../../src/fields/tags-input-field";

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
