import type { CollapsibleSlots } from "@pisagor/recipes/collapsible";
import { createContext } from "../../internal/utils";

interface CollapsibleContextValue {
  slots: CollapsibleSlots;
}

export const { CollapsibleContext, useCollapsible } = createContext<CollapsibleContextValue>()({
  name: "Collapsible",
});
