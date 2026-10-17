import { TagsInputField } from "@pisagor/react-form";

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
