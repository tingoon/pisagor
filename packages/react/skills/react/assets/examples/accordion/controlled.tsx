import { Accordion } from "@pisagor/react/accordion";
import { useState } from "react";
import { shortFaqItems } from "./helpers";

export function Controlled() {
  const [value, setValue] = useState(["item-1"]);

  return (
    <div>
      <Accordion
        items={shortFaqItems()}
        onValueChange={({ value }) => setValue(value)}
        value={value}
      />
      <div className="text-center text-muted-foreground text-sm">{value}</div>
    </div>
  );
}
