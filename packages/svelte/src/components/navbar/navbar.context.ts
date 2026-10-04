import type { NavbarRecipe } from "@pisagor/recipes";
import { createContext } from "../../utils/create-context";

interface NavbarContextValue {
  slots: NavbarRecipe;
}

const ctx = createContext("Navbar")<NavbarContextValue>();
export const setNavbarContext = ctx.setContext;
export const useNavbar = ctx.getContext;
