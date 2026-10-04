import type { DrawerRecipe } from "@pisagor/recipes";
import { createContext } from "../../utils";

interface DrawerContextValue {
  slots: DrawerRecipe;
}

export const { DrawerContext, useDrawer } =
  createContext("Drawer")<DrawerContextValue>();
