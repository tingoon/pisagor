import type { PopoverRecipe } from "@pisagor/recipes";
import { createContext } from "../../utils/create-context";

export interface PopoverContentContextValue {
  slots: PopoverRecipe;
}

const ctx = createContext("PopoverContent")<PopoverContentContextValue>();
export const setPopoverContentContext = ctx.setContext;
export const usePopoverContent = ctx.getContext;
