import source from "./variants.tsx?raw";
import { Input } from "@pisagor/react";

export function Variants() {
  return (
    <div className="flex flex-col gap-2">
      <Input placeholder="Primary" variant="primary" />
      <Input placeholder="Secondary" variant="secondary" />
    </div>
  );
}

export { source as VariantsSource };
