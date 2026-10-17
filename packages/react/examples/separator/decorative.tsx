import { Separator } from "@pisagor/react";

export function Decorative() {
  return (
    <div className="flex items-center gap-3 text-sm">
      <span>Profile</span>
      <Separator className="h-4" decorative orientation="vertical" />
      <span>Settings</span>
    </div>
  );
}
