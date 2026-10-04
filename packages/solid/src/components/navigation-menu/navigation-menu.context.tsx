import type { NavigationMenuRecipe } from "@pisagor/recipes";
import { createContext } from "../../utils";

interface NavigationMenuContextValue {
  slots: NavigationMenuRecipe;
}

export const { NavigationMenuContext, useNavigationMenu } =
  createContext("NavigationMenu")<NavigationMenuContextValue>();
