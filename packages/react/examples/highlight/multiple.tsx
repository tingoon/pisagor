import source from "./multiple.tsx?raw";
import { Highlight } from "@pisagor/react";

export function Multiple() {
  return (
    <p className="text-foreground text-base leading-relaxed">
      <Highlight
        query={["React", "Vue", "Astro"]}
        text="Use Pisagor with React, Vue, Solid, Svelte, or Astro."
      />
    </p>
  );
}

export { source as MultipleSource };
