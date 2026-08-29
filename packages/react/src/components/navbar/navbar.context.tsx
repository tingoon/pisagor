import type { NavbarSlots } from "@pisagor/recipes/navbar";
import { createContext } from "../../internal/utils";

interface NavbarContextValue {
  slots: NavbarSlots;
}

export const { NavbarContext, useNavbar } = createContext<NavbarContextValue>()({
  name: "Navbar",
});
