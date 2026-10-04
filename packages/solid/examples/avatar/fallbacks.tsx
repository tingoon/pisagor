/** @jsxImportSource solid-js */

import { Avatar } from "@pisagor/solid/avatar";
import { UserIcon } from "@pisagor/solid/icons";

export function Fallbacks() {
  return (
    <div class="flex flex-wrap items-center gap-2">
      <Avatar alt="Jane Doe" fallback="JD" />
      <Avatar alt="John Doe" fallback="JD" />
      <Avatar alt="Guest user" fallback={<UserIcon />} />
    </div>
  );
}
