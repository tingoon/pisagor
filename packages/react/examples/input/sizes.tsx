import source from "./sizes.tsx?raw";
import { Input } from "@pisagor/react";

export function Sizes() {
  return (
    <div className="flex flex-col gap-2">
      <Input placeholder="Small" size="sm" />
      <Input placeholder="Medium" size="md" />
      <Input placeholder="Large" size="lg" />
    </div>
  );
}

export { source as SizesSource };
