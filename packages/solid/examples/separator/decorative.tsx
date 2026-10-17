import source from "./decorative.tsx?raw";
import { Separator } from "@pisagor/solid";

export function Decorative() {
  return (
    <div class="flex items-center gap-3 text-sm">
      <span>Profile</span>
      <Separator class="h-4" decorative orientation="vertical" />
      <span>Settings</span>
    </div>
  );
}

export { source as DecorativeSource };
