/** @jsxImportSource solid-js */
import { TagsInput } from "@pisagor/solid/tags-input";

export function Default() {
  return (
    <TagsInput
      clearable
      defaultValue={["Solid", "Ark"]}
      placeholder="Add a tag"
    />
  );
}
