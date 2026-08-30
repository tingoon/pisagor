import type { NavbarRecipe } from "@pisagor/recipes/navbar";
import { createContext } from "../../internal/utils";

interface NavbarContextValue {
  slots: NavbarRecipe;
}

export const { NavbarContext, useNavbar } = createContext<NavbarContextValue>()({
  name: "Navbar",
});
