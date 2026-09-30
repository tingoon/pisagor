import { TagsInput } from "../../../../../src/components/tags-input/index";

export function Default() {
  return (
    <TagsInput
      clearable
      defaultValue={["Solid", "Ark"]}
      placeholder="Add a tag"
    />
  );
}
