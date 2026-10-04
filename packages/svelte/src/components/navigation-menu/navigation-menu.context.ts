import type { NavigationMenuRecipe } from "@pisagor/recipes";
import { createContext } from "../../utils/create-context";

interface NavigationMenuContextValue {
  slots: NavigationMenuRecipe;
}

export const {
  setContext: setNavigationMenuContext,
  getContext: useNavigationMenu,
} = createContext("NavigationMenu")<NavigationMenuContextValue>();
