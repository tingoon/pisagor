import { Accordion } from "@pisagor/react";
import { faqItems } from "./helpers";

export function Default() {
  return <Accordion defaultValue={["item-1"]} items={faqItems()} />;
}
