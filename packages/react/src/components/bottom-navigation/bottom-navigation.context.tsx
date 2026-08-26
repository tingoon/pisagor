import type { BottomNavigationVariants } from "@pisagor/styles/ui/bottom-navigation";
import { createContext } from "../../utils";

interface BottomNavigationContextValue {
  slots: BottomNavigationVariants;
}

export const { BottomNavigationContext, useBottomNavigation } =
  createContext<BottomNavigationContextValue>()({
    name: "BottomNavigation",
  });
