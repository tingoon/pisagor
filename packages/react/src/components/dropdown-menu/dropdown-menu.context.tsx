import type { DropdownMenuSlots } from "@pisagor/recipes/dropdown-menu";
import { createContext } from "../../internal/utils";

interface DropdownMenuContextValue {
  slots: DropdownMenuSlots;
}

export const { DropdownMenuContext, useDropdownMenu } = createContext<DropdownMenuContextValue>()({
  name: "DropdownMenu",
  strict: false,
});
