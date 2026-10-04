import type { DropdownMenuRecipe } from "@pisagor/recipes";
import { createContext } from "../../utils/create-context";

interface DropdownMenuContextValue {
  slots: DropdownMenuRecipe;
}

const ctx = createContext("DropdownMenu")<DropdownMenuContextValue | undefined>(
  {
    defaultValue: undefined,
    strict: false,
  },
);

export const setDropdownMenuContext = ctx.setContext;
export const useDropdownMenu = ctx.getContext;
