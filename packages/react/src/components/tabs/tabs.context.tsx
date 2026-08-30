import type { TabsRecipe } from "@pisagor/recipes/tabs";
import { createContext } from "../../utils";

interface TabsContextValue {
  slots: TabsRecipe;
}

export const { TabsContext, useTabs } = createContext<TabsContextValue>()({
  name: "Tabs",
});
