import type { CollapsibleVariants } from "@pisagor/recipes/collapsible";
import { createContext } from "../../internal/utils";

interface CollapsibleContextValue {
  slots: CollapsibleVariants;
}

export const { CollapsibleContext, useCollapsible } = createContext<CollapsibleContextValue>()({
  name: "Collapsible",
});
