import { Accordion } from "..";
import { shortFaqItems } from "./helpers";

export function Multiple() {
  return <Accordion items={shortFaqItems()} multiple />;
}
