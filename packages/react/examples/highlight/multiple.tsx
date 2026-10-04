import { Highlight } from "@pisagor/react";

export function Multiple() {
  return (
    <p className="text-base text-foreground leading-relaxed">
      <Highlight
        query={["React", "Vue", "Astro"]}
        text="Use Pisagor with React, Vue, Solid, Svelte, or Astro."
      />
    </p>
  );
}
