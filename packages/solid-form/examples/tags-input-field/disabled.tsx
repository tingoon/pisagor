import source from "./disabled.tsx?raw";
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

export { source as DisabledSource };
