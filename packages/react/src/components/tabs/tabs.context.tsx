import type { TabsSlots } from "@pisagor/recipes/tabs";
import { createContext } from "../../internal/utils";

interface TabsContextValue {
  slots: TabsSlots;
}

export const { TabsContext, useTabs } = createContext<TabsContextValue>()({
  name: "Tabs",
});
