import source from "./custom-style.tsx?raw";
import { Highlight } from "@pisagor/react";

export function CustomStyle() {
  return (
    <p className="text-foreground text-base leading-relaxed">
      <Highlight
        className="bg-warning/30 text-warning-foreground rounded-sm px-0.5"
        query="design"
        text="Great design systems feel invisible."
      />
    </p>
  );
}

export { source as CustomStyleSource };
