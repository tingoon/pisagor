import type {
  BottomNavigationItemRecipe,
  BottomNavigationRecipe,
} from "@pisagor/recipes";
import { createContext } from "../../utils/create-context";

interface BottomNavigationContextValue {
  slots: BottomNavigationRecipe;
}

interface BottomNavigationItemContextValue {
  slots: BottomNavigationItemRecipe;
}

const root = createContext("BottomNavigation")<BottomNavigationContextValue>();
const item = createContext(
  "BottomNavigationItem",
)<BottomNavigationItemContextValue>();

export const setBottomNavigationContext = root.setContext;
export const useBottomNavigation = root.getContext;
export const setBottomNavigationItemContext = item.setContext;
export const useBottomNavigationItem = item.getContext;
