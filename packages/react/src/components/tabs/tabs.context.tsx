import type { TabsVariants } from "@pisagor/styles/ui/tabs";
import { createContext } from "../../utils";

interface TabsContextValue {
  slots: TabsVariants;
}

export const { TabsContext, useTabs } = createContext<TabsContextValue>()({
  name: "Tabs",
});
