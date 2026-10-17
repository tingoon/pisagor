import source from "./default.tsx?raw";
import { Highlight } from "@pisagor/react";

export function Default() {
  return (
    <p className="text-foreground text-base leading-relaxed">
      <Highlight query="Pisagor" text="Build faster with Pisagor components." />
    </p>
  );
}

export { source as DefaultSource };
