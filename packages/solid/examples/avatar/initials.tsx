import source from "./initials.tsx?raw";
import { Avatar } from "@pisagor/solid";

export function Initials() {
  return (
    <div class="flex flex-wrap items-center gap-2">
      <Avatar name="Jane Doe" />
      <Avatar name="Ada" />
      <Avatar name="Grace Brewster Hopper" />
    </div>
  );
}

export { source as InitialsSource };
