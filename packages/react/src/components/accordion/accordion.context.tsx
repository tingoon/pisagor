import type { AccordionItemVariants } from "@pisagor/styles/accordion";
import { createContext } from "../../utils";

interface AccordionItemContextValue {
  slots: AccordionItemVariants;
}

export const { AccordionItemContext, useAccordionItem } =
  createContext<AccordionItemContextValue>()({
    name: "AccordionItem",
  });
