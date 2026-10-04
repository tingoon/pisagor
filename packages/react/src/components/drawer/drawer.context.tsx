import type { DrawerRecipe } from "@pisagor/recipes";

import { createContext } from "../../utils";

interface DrawerContextValue {
  /** Slot class recipes from `drawerRecipe`. */
  slots: DrawerRecipe;
}

export const { DrawerContext, useDrawer } =
  createContext("Drawer")<DrawerContextValue>();
