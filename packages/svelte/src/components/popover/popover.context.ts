import type { PopoverRecipe } from "@pisagor/recipes/popover";
import { createContext } from "../../utils/create-context";

export interface PopoverContentContextValue {
  slots: PopoverRecipe;
}

const ctx = createContext<PopoverContentContextValue>({
  name: "PopoverContent",
});
export const setPopoverContentContext = ctx.setContext;
export const usePopoverContent = ctx.getContext;
