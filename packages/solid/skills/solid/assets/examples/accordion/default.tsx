/** @jsxImportSource solid-js */
import { Accordion } from "@pisagor/solid/accordion";
import { faqItems } from "./helpers";

export function Default() {
  return <Accordion defaultValue={["item-1"]} items={faqItems()} />;
}
