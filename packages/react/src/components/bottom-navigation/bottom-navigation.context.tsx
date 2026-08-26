import type {
  BottomNavigationItemVariants,
  BottomNavigationVariants,
} from "@pisagor/styles/ui/bottom-navigation";
import { createContext } from "../../utils";

interface BottomNavigationContextValue {
  slots: BottomNavigationVariants;
}

interface BottomNavigationItemContextValue {
  slots: BottomNavigationItemVariants;
}

export const { BottomNavigationContext, useBottomNavigation } =
  createContext<BottomNavigationContextValue>()({
    name: "BottomNavigation",
  });

export const { BottomNavigationItemContext, useBottomNavigationItem } =
  createContext<BottomNavigationItemContextValue>()({
    name: "BottomNavigationItem",
  });
