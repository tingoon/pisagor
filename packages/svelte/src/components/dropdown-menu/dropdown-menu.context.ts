import type { DropdownMenuRecipe } from "@pisagor/recipes/dropdown-menu";
import { createContext } from "../../utils/create-context";

interface DropdownMenuContextValue {
  slots: DropdownMenuRecipe;
}

const ctx = createContext<DropdownMenuContextValue | undefined>({
  defaultValue: undefined,
  name: "DropdownMenu",
  strict: false,
});

export const setDropdownMenuContext = ctx.setContext;
export const useDropdownMenu = ctx.getContext;
