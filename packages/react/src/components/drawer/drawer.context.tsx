import type { DrawerSlots } from "@pisagor/recipes/drawer";
import { createContext } from "../../internal/utils";

interface DrawerContextValue {
  /** Slot class recipes from `drawerRecipe`. */
  slots: DrawerSlots;
}

export const { DrawerContext, useDrawer } = createContext<DrawerContextValue>()({
  name: "Drawer",
});
