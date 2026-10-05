import { TagsInput } from "@pisagor/solid";

export function Default() {
  return (
    <TagsInput
      clearable
      defaultValue={["Solid", "Ark"]}
      placeholder="Add a tag"
    />
  );
}
