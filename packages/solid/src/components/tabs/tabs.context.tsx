import type { TabsRecipe } from "@pisagor/recipes";
import { createContext } from "../../utils";

interface TabsContextValue {
  slots: TabsRecipe;
}

export const { TabsContext, useTabs } =
  createContext("Tabs")<TabsContextValue>();
