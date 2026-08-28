import type {
  BottomNavigationItemVariants,
  BottomNavigationVariants,
} from "@pisagor/recipes/bottom-navigation";
import { createContext } from "../../internal/utils";

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
