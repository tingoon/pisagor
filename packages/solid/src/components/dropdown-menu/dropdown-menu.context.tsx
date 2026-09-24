import type { DropdownMenuRecipe } from "@pisagor/recipes/dropdown-menu";
import { createContext } from "../../utils";

interface DropdownMenuContextValue {
  slots: DropdownMenuRecipe;
}

export const { DropdownMenuContext, useDropdownMenu } = createContext<DropdownMenuContextValue>()({
  name: "DropdownMenu",
  strict: false,
});
