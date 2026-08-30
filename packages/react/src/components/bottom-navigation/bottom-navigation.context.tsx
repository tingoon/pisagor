import type {
  BottomNavigationItemRecipe,
  BottomNavigationRecipe,
} from "@pisagor/recipes/bottom-navigation";
import { createContext } from "../../internal/utils";

interface BottomNavigationContextValue {
  slots: BottomNavigationRecipe;
}

interface BottomNavigationItemContextValue {
  slots: BottomNavigationItemRecipe;
}

export const { BottomNavigationContext, useBottomNavigation } =
  createContext<BottomNavigationContextValue>()({
    name: "BottomNavigation",
  });

export const { BottomNavigationItemContext, useBottomNavigationItem } =
  createContext<BottomNavigationItemContextValue>()({
    name: "BottomNavigationItem",
  });
