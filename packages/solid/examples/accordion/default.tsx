import source from "./default.tsx?raw";
import { Accordion } from "@pisagor/solid";
import { faqItems } from "./helpers";

export function Default() {
  return <Accordion defaultValue={["item-1"]} items={faqItems()} />;
}

export { source as DefaultSource };
