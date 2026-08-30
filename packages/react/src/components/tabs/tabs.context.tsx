import type { TabsRecipe } from "@pisagor/recipes/tabs";
import { createContext } from "../../internal/utils";

interface TabsContextValue {
  slots: TabsRecipe;
}

export const { TabsContext, useTabs } = createContext<TabsContextValue>()({
  name: "Tabs",
});
