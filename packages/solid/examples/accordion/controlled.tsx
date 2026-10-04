/** @jsxImportSource solid-js */

import { Accordion } from "@pisagor/solid/accordion";
import { createSignal } from "solid-js";
import { shortFaqItems } from "./helpers";

export function Controlled() {
  const [value, setValue] = createSignal(["item-1"]);

  return (
    <div>
      <Accordion
        items={shortFaqItems()}
        onValueChange={({ value }) => setValue(value)}
        value={value()}
      />
      <div class="text-center text-muted-foreground text-sm">{value()}</div>
    </div>
  );
}
