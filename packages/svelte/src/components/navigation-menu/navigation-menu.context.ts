import type { NavigationMenuRecipe } from "@pisagor/recipes/navigation-menu";
import { createContext } from "../../utils/create-context";

interface NavigationMenuContextValue {
  slots: NavigationMenuRecipe;
}

export const { setContext: setNavigationMenuContext, getContext: useNavigationMenu } =
  createContext<NavigationMenuContextValue>({ name: "NavigationMenu" });
