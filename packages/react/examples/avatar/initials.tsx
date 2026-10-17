import source from "./initials.tsx?raw";
import { Avatar } from "@pisagor/react";

export function Initials() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Avatar name="Jane Doe" />
      <Avatar name="Ada" />
      <Avatar name="Grace Brewster Hopper" />
    </div>
  );
}

export { source as InitialsSource };
