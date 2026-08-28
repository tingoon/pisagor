import type { PopoverVariants } from "@pisagor/recipes/popover";
import { createContext } from "../../internal/utils";

interface PopoverContentContextValue {
  slots: PopoverVariants;
}

export const { PopoverContentContext, usePopoverContent } =
  createContext<PopoverContentContextValue>()({
    name: "PopoverContent",
  });
