import type { PopoverRecipe } from "@pisagor/recipes";
import { createContext } from "../../utils";

interface PopoverContentContextValue {
  slots: PopoverRecipe;
}

export const { PopoverContentContext, usePopoverContent } =
  createContext("PopoverContent")<PopoverContentContextValue>();
