import type { DrawerRecipe } from "@pisagor/recipes";
import { createContext } from "../../utils/create-context";

interface DrawerContextValue {
  slots: DrawerRecipe;
}

export const { setContext: setDrawerContext, getContext: useDrawer } =
  createContext("Drawer")<DrawerContextValue>();
