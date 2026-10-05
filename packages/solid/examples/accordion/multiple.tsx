import { Accordion } from "@pisagor/solid";
import { shortFaqItems } from "./helpers";

export function Multiple() {
  return <Accordion items={shortFaqItems()} multiple />;
}
