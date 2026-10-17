import source from "./variants.tsx?raw";
import { Toggle } from "@pisagor/react";

export function Variants() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Toggle variant="ghost">Default</Toggle>
      <Toggle variant="outline">Outline</Toggle>
    </div>
  );
}

export { source as VariantsSource };
