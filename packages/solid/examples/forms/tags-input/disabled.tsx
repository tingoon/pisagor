import { TagsInput } from "@pisagor/solid";

export function Disabled() {
  return (
    <TagsInput class="w-full" defaultValue={["React", "Solid"]} disabled />
  );
}
