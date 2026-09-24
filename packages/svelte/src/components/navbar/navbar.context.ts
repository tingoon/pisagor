import type { NavbarRecipe } from "@pisagor/recipes/navbar";
import { createContext } from "../../utils/create-context";

interface NavbarContextValue {
  slots: NavbarRecipe;
}

const ctx = createContext<NavbarContextValue>({ name: "Navbar" });
export const setNavbarContext = ctx.setContext;
export const useNavbar = ctx.getContext;
