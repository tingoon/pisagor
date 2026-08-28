import type { MenuVariants } from "@pisagor/recipes/menu";
import { createContext } from "../../internal/utils";

interface MenuContextValue {
  slots: MenuVariants;
}

export const { MenuContext, useMenu } = createContext<MenuContextValue>()({
  name: "Menu",
});
