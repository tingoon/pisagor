import type { DrawerRecipe } from "@pisagor/recipes/drawer";
import { createContext } from "../../utils";

interface DrawerContextValue {
  slots: DrawerRecipe;
}

export const { DrawerContext, useDrawer } = createContext<DrawerContextValue>()({
  name: "Drawer",
});
