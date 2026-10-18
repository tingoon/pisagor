import { Highlight } from "@pisagor/solid";

export function CustomStyle() {
  return (
    <p class="text-foreground text-base leading-relaxed">
      <Highlight
        class="bg-warning/30 text-warning-foreground rounded-sm px-0.5"
        query="design"
        text="Great design systems feel invisible."
      />
    </p>
  );
}
