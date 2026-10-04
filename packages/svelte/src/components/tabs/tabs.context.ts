import type { TabsRecipe } from "@pisagor/recipes";
import { createContext } from "../../utils/create-context";

export interface TabsContextValue {
  slots: TabsRecipe;
}

const ctx = createContext("Tabs")<TabsContextValue>();
export const setTabsContext = ctx.setContext;
export const useTabs = ctx.getContext;
