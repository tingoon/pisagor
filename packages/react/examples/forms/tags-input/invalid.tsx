import { TagsInput } from "@pisagor/react";

export function Invalid() {
  return (
    <TagsInput className="w-full" defaultValue={["React", "Solid"]} invalid />
  );
}
