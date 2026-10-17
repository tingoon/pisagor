import source from "./sizes.tsx?raw";
import { Accordion } from "@pisagor/react";
import { faqItems } from "./helpers";

const sizes = ["sm", "md", "lg"] as const;

export function Sizes() {
  return (
    <div className="flex flex-col gap-4">
      {sizes.map((size) => (
        <Accordion items={faqItems()} key={size} size={size} />
      ))}
    </div>
  );
}

export { source as SizesSource };
