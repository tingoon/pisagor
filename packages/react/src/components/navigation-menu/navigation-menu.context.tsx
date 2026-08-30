import type { NavigationMenuRecipe } from "@pisagor/recipes/navigation-menu";
import { createContext } from "../../internal/utils";

interface NavigationMenuContextValue {
  slots: NavigationMenuRecipe;
}

export const { NavigationMenuContext, useNavigationMenu } =
  createContext<NavigationMenuContextValue>()({
    name: "NavigationMenu",
  });
