import type { MenuRecipe } from "@pisagor/recipes/menu";
import { createContext } from "../../utils/create-context";

interface MenuContextValue {
  slots: MenuRecipe;
}

export const { setContext: setMenuContext, getContext: useMenu } = createContext<MenuContextValue>({
  name: "Menu",
});
