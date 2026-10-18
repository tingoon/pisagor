import { Avatar } from "@pisagor/solid";
import { UserIcon } from "@squidlab/phosphor-solid/icons";

export function Fallbacks() {
  return (
    <div class="flex flex-wrap items-center gap-2">
      <Avatar alt="Jane Doe" fallback="JD" />
      <Avatar alt="John Doe" fallback="JD" />
      <Avatar alt="Guest user" fallback={<UserIcon />} />
    </div>
  );
}
