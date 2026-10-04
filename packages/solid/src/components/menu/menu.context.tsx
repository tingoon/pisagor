import type { MenuRecipe } from "@pisagor/recipes";
import { createContext } from "../../utils";

interface MenuContextValue {
  slots: MenuRecipe;
}

export const { MenuContext, useMenu } =
  createContext("Menu")<MenuContextValue>();
