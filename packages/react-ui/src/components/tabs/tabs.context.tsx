import type { TabsVariants } from "@pisagor/recipes/tabs";
import { createContext } from "../../utils";

interface TabsContextValue {
  slots: TabsVariants;
}

export const { TabsContext, useTabs } = createContext<TabsContextValue>()({
  name: "Tabs",
});
