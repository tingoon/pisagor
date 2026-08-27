import type { PopoverContentVariants } from "@pisagor/recipes/popover";
import { createContext } from "../../utils";

interface PopoverContentContextValue {
  slots: PopoverContentVariants;
}

export const { PopoverContentContext, usePopoverContent } =
  createContext<PopoverContentContextValue>()({
    name: "PopoverContent",
  });
