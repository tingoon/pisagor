import { Accordion } from "@pisagor/solid";
import { createSignal } from "solid-js";
import { shortFaqItems } from "./helpers";

export function Controlled() {
  const [value, setValue] = createSignal<string[]>(["item-1"]);

  return (
    <div>
      <Accordion
        items={shortFaqItems()}
        onValueChange={({ value: next }) => setValue(next)}
        value={value()}
      />
      <div class="text-center text-muted-foreground text-sm">
        {value().join(", ")}
      </div>
    </div>
  );
}
