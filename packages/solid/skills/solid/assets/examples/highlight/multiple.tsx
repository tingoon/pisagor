/** @jsxImportSource solid-js */
import { Highlight } from "@pisagor/solid/highlight";

export function Multiple() {
  return (
    <p class="text-base text-foreground leading-relaxed">
      <Highlight
        query={["React", "Vue", "Astro"]}
        text="Use Pisagor with React, Vue, Solid, Svelte, or Astro."
      />
    </p>
  );
}
