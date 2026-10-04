import type {
  BottomNavigationItemRecipe,
  BottomNavigationRecipe,
} from "@pisagor/recipes";

import { createContext } from "../../utils";

interface BottomNavigationContextValue {
  slots: BottomNavigationRecipe;
}

interface BottomNavigationItemContextValue {
  slots: BottomNavigationItemRecipe;
}

export const { BottomNavigationContext, useBottomNavigation } =
  createContext("BottomNavigation")<BottomNavigationContextValue>();

export const { BottomNavigationItemContext, useBottomNavigationItem } =
  createContext("BottomNavigationItem")<BottomNavigationItemContextValue>();
