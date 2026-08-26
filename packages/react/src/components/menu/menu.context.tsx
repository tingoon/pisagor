import type { MenuVariants } from "@pisagor/styles/ui/menu";
import { createContext } from "../../utils";

interface MenuContextValue {
  slots: MenuVariants;
}

export const { MenuContext, useMenu } = createContext<MenuContextValue>()({
  name: "Menu",
});
