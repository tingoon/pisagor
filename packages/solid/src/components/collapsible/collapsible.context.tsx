import type { CollapsibleRecipe } from "@pisagor/recipes/collapsible";
import { createContext } from "../../utils";

interface CollapsibleContextValue {
  slots: CollapsibleRecipe;
}

export const { CollapsibleContext, useCollapsible } = createContext<CollapsibleContextValue>()({
  name: "Collapsible",
});
