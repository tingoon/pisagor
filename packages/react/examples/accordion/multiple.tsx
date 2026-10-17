import source from "./multiple.tsx?raw";
import { Accordion } from "@pisagor/react";
import { shortFaqItems } from "./helpers";

export function Multiple() {
  return <Accordion items={shortFaqItems()} multiple />;
}

export { source as MultipleSource };
