import type { NavbarRecipe } from "@pisagor/recipes";

import { createContext } from "../../utils";

interface NavbarContextValue {
  slots: NavbarRecipe;
}

export const { NavbarContext, useNavbar } =
  createContext("Navbar")<NavbarContextValue>();
