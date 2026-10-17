import source from "./variants.tsx?raw";
import { Switch } from "@pisagor/solid";

export function Variants() {
  return (
    <div class="flex flex-wrap items-center gap-2">
      <Switch variant="primary" />
      <Switch variant="secondary" />
    </div>
  );
}

export { source as VariantsSource };
