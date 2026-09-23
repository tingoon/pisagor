import { Highlight } from "..";

export function CustomStyle() {
  return (
    <p className="text-base text-foreground leading-relaxed">
      <Highlight
        className="rounded-sm bg-warning/30 px-0.5 text-warning-foreground"
        query="design"
        text="Great design systems feel invisible."
      />
    </p>
  );
}
