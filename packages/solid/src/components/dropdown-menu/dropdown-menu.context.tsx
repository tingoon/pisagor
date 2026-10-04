import type { DropdownMenuRecipe } from "@pisagor/recipes";
import { createContext } from "../../utils";

interface DropdownMenuContextValue {
  slots: DropdownMenuRecipe;
}

export const { DropdownMenuContext, useDropdownMenu } = createContext(
  "DropdownMenu",
)<DropdownMenuContextValue>({ strict: false });
