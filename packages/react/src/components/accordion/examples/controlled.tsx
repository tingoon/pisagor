import { useState } from "react";
import { Accordion } from "..";
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
