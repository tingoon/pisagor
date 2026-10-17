import source from "./variants.tsx?raw";
import { Checkbox } from "@pisagor/solid";

export function Variants() {
  return (
    <div class="flex flex-wrap items-center gap-2">
      <Checkbox variant="primary" />
      <Checkbox variant="secondary" />
    </div>
  );
}

export { source as VariantsSource };
