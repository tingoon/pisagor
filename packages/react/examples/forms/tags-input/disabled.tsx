import { TagsInput } from "@pisagor/react";

export function Disabled() {
  return (
    <TagsInput className="w-full" defaultValue={["React", "Solid"]} disabled />
  );
}
