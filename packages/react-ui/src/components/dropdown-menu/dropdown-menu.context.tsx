import type { DropdownMenuVariants } from "@pisagor/recipes/dropdown-menu";
import { createContext } from "../../utils";

interface DropdownMenuContextValue {
  slots: DropdownMenuVariants;
}

export const { DropdownMenuContext, useDropdownMenu } = createContext<DropdownMenuContextValue>()({
  name: "DropdownMenu",
  strict: false,
});
