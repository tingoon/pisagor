import type { NavbarVariants } from "@pisagor/recipes/navbar";
import { createContext } from "../../utils";

interface NavbarContextValue {
  slots: NavbarVariants;
}

export const { NavbarContext, useNavbar } = createContext<NavbarContextValue>()({
  name: "Navbar",
});
