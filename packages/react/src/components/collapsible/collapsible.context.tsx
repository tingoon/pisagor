import type { CollapsibleRecipe } from "@pisagor/recipes/collapsible";
import { createContext } from "../../internal/utils";

interface CollapsibleContextValue {
  slots: CollapsibleRecipe;
}

export const { CollapsibleContext, useCollapsible } = createContext<CollapsibleContextValue>()({
  name: "Collapsible",
});
