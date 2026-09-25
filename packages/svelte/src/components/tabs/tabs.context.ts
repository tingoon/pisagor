import type { TabsRecipe } from "@pisagor/recipes/tabs";
import { createContext } from "../../utils/create-context";

export interface TabsContextValue {
  slots: TabsRecipe;
}

const ctx = createContext<TabsContextValue>({ name: "Tabs" });
export const setTabsContext = ctx.setContext;
export const useTabs = ctx.getContext;
