import source from "./sizes.tsx?raw";
import { Switch } from "@pisagor/solid";

export function Sizes() {
  return (
    <div class="flex flex-wrap items-center gap-2">
      <Switch defaultChecked />
      <Switch
        class="[--size:--spacing(5)] sm:[--size:--spacing(6)]"
        defaultChecked
      />
    </div>
  );
}

export { source as SizesSource };
