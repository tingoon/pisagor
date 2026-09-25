import type { NavigationMenuRecipe } from "@pisagor/recipes/navigation-menu";
import { createContext } from "../../utils";

interface NavigationMenuContextValue {
  slots: NavigationMenuRecipe;
}

export const { NavigationMenuContext, useNavigationMenu } =
  createContext<NavigationMenuContextValue>()({
    name: "NavigationMenu",
  });
