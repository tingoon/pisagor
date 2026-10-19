import { TagsInput } from "@pisagor/solid";

export function Invalid() {
  return <TagsInput class="w-full" defaultValue={["React", "Solid"]} invalid />;
}
