import { Highlight } from "@pisagor/solid";

export function CustomStyle() {
  return (
    <p class="text-base text-foreground leading-relaxed">
      <Highlight
        class="rounded-sm bg-warning/30 px-0.5 text-warning-foreground"
        query="design"
        text="Great design systems feel invisible."
      />
    </p>
  );
}
