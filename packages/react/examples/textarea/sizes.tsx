import source from "./sizes.tsx?raw";
import { Textarea } from "@pisagor/react";

export function Sizes() {
  return (
    <div className="flex flex-col gap-2">
      <Textarea placeholder="Small" size="sm" />
      <Textarea placeholder="Medium" size="md" />
      <Textarea placeholder="Large" size="lg" />
    </div>
  );
}

export { source as SizesSource };
