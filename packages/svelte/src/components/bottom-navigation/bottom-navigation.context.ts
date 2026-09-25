import type {
  BottomNavigationItemRecipe,
  BottomNavigationRecipe,
} from "@pisagor/recipes/bottom-navigation";
import { createContext } from "../../utils/create-context";

interface BottomNavigationContextValue {
  slots: BottomNavigationRecipe;
}

interface BottomNavigationItemContextValue {
  slots: BottomNavigationItemRecipe;
}

const root = createContext<BottomNavigationContextValue>({
  name: "BottomNavigation",
});
const item = createContext<BottomNavigationItemContextValue>({
  name: "BottomNavigationItem",
});

export const setBottomNavigationContext = root.setContext;
export const useBottomNavigation = root.getContext;
export const setBottomNavigationItemContext = item.setContext;
export const useBottomNavigationItem = item.getContext;
