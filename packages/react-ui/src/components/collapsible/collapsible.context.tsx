import type { CollapsibleVariants } from "@pisagor/recipes/collapsible";
import { createContext } from "../../utils";

interface CollapsibleContextValue {
  slots: CollapsibleVariants;
}

export const { CollapsibleContext, useCollapsible } = createContext<CollapsibleContextValue>()({
  name: "Collapsible",
});
