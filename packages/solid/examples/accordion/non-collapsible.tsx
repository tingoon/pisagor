import source from "./non-collapsible.tsx?raw";
import { Accordion } from "@pisagor/solid";
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

export { source as NonCollapsibleSource };
