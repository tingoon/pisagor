import { Accordion } from "@pisagor/react";
import { shortFaqItems } from "./helpers";

export function OrientationVertical() {
  return (
    <Accordion
      defaultValue={["item-1"]}
      items={shortFaqItems()}
      orientation="vertical"
    />
  );
}
