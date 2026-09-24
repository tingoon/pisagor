import type { MenuRecipe } from "@pisagor/recipes/menu";
import { createContext } from "../../utils";

interface MenuContextValue {
  slots: MenuRecipe;
}

export const { MenuContext, useMenu } = createContext<MenuContextValue>()({
  name: "Menu",
});
