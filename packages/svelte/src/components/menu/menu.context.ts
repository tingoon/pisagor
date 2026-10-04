import type { MenuRecipe } from "@pisagor/recipes";
import { createContext } from "../../utils/create-context";

interface MenuContextValue {
  slots: MenuRecipe;
}

export const { setContext: setMenuContext, getContext: useMenu } =
  createContext("Menu")<MenuContextValue>();
