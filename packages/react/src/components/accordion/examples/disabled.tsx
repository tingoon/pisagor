import { Accordion } from "..";
import { shortFaqItems } from "./helpers";

export function Disabled() {
  return (
    <Accordion
      defaultValue={["item-1"]}
      items={shortFaqItems().map((item) =>
        item.value === "item-2" ? { ...item, disabled: true } : item,
      )}
    />
  );
}
