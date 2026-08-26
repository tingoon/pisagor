import type { NavigationMenuVariants } from "@pisagor/styles/ui/navigation-menu";
import { createContext } from "../../utils";

interface NavigationMenuContextValue {
  slots: NavigationMenuVariants;
}

export const { NavigationMenuContext, useNavigationMenu } =
  createContext<NavigationMenuContextValue>()({
    name: "NavigationMenu",
  });
