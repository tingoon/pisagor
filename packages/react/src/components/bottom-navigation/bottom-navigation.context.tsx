import type {
  BottomNavigationItemSlots,
  BottomNavigationSlots,
} from "@pisagor/recipes/bottom-navigation";
import { createContext } from "../../internal/utils";

interface BottomNavigationContextValue {
  slots: BottomNavigationSlots;
}

interface BottomNavigationItemContextValue {
  slots: BottomNavigationItemSlots;
}

export const { BottomNavigationContext, useBottomNavigation } =
  createContext<BottomNavigationContextValue>()({
    name: "BottomNavigation",
  });

export const { BottomNavigationItemContext, useBottomNavigationItem } =
  createContext<BottomNavigationItemContextValue>()({
    name: "BottomNavigationItem",
  });
