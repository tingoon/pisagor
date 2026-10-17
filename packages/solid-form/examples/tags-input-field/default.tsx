import { TagsInputField } from "@pisagor/solid-form";

export function Default() {
  return (
    <TagsInputField
      defaultValue={["design", "frontend"]}
      description="Press Enter to add a tag."
      id="tags-input-field-topics"
      label="Topics"
    />
  );
}
