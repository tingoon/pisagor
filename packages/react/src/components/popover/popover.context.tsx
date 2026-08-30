import type { PopoverRecipe } from "@pisagor/recipes/popover";
import { createContext } from "../../internal/utils";

interface PopoverContentContextValue {
  slots: PopoverRecipe;
}

export const { PopoverContentContext, usePopoverContent } =
  createContext<PopoverContentContextValue>()({
    name: "PopoverContent",
  });
