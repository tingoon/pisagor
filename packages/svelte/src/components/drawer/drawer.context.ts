import type { DrawerRecipe } from "@pisagor/recipes/drawer";
import { createContext } from "../../utils/create-context";

interface DrawerContextValue {
  slots: DrawerRecipe;
}

export const { setContext: setDrawerContext, getContext: useDrawer } =
  createContext<DrawerContextValue>({ name: "Drawer" });
