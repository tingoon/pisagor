import type { TabsVariants } from "@pisagor/recipes/tabs";
import { createContext } from "../../internal/utils";

interface TabsContextValue {
  slots: TabsVariants;
}

export const { TabsContext, useTabs } = createContext<TabsContextValue>()({
  name: "Tabs",
});
