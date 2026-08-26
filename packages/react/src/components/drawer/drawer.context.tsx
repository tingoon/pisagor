import type { DrawerVariants } from "@pisagor/styles/ui/drawer";
import { createContext } from "../../utils";

interface DrawerContextValue {
  /** Slot class recipes from `drawerVariants`. */
  slots: DrawerVariants;
}

export const { DrawerContext, useDrawer } = createContext<DrawerContextValue>()({
  name: "Drawer",
});
