import { Accordion } from "@pisagor/react";
import { shortFaqItems } from "./helpers";

export function OrientationHorizontal() {
  return (
    <Accordion
      defaultValue={["item-1"]}
      items={shortFaqItems()}
      orientation="horizontal"
    />
  );
}
