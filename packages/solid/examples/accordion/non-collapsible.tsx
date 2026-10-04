/** @jsxImportSource solid-js */
import { Accordion } from "@pisagor/solid/accordion";
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
