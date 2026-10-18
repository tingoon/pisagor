import { Accordion } from "@pisagor/react";
import { shortFaqItems } from "./helpers";

export function NonCollapsible() {
  return (
    <Accordion
      collapsible={false}
      defaultValue={["item-1"]}
      items={shortFaqItems()}
    />
  );
}
