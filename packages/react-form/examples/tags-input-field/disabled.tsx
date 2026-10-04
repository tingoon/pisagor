import { TagsInputField } from "@pisagor/react-form";

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
