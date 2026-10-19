import { Accordion } from "@pisagor/solid";
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
