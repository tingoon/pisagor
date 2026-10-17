import source from "./sizes.tsx?raw";
import { Accordion } from "@pisagor/solid";
import { For } from "solid-js";
import { faqItems } from "./helpers";

const sizes = ["sm", "md", "lg"] as const;

export function Sizes() {
  return (
    <div class="flex flex-col gap-4">
      <For each={sizes}>
        {(size) => <Accordion items={faqItems()} size={size} />}
      </For>
    </div>
  );
}

export { source as SizesSource };
