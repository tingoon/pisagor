import type { MenuSlots } from "@pisagor/recipes/menu";
import { createContext } from "../../internal/utils";

interface MenuContextValue {
  slots: MenuSlots;
}

export const { MenuContext, useMenu } = createContext<MenuContextValue>()({
  name: "Menu",
});
