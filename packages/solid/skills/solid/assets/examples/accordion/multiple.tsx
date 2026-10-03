/** @jsxImportSource solid-js */
import { Accordion } from "@pisagor/solid/accordion";
import { shortFaqItems } from "./helpers";

export function Multiple() {
  return <Accordion items={shortFaqItems()} multiple />;
}
