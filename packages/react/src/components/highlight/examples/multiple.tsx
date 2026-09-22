import { Highlight } from "..";

export function Multiple() {
  return (
    <p className="text-base text-foreground leading-relaxed">
      <Highlight query={["React", "Vue", "Astro"]} text="Use Pisagor with React, Vue, or Astro." />
    </p>
  );
}
