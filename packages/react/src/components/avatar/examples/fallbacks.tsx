import { UserIcon } from "@phosphor-icons/react";
import { Avatar } from "..";

export function Fallbacks() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Avatar alt="Jane Doe" fallback="JD" />
      <Avatar alt="John Doe" fallback="JD" />
      <Avatar alt="Guest user" fallback={<UserIcon />} />
    </div>
  );
}
