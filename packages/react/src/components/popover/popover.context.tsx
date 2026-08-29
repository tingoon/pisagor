import type { PopoverSlots } from "@pisagor/recipes/popover";
import { createContext } from "../../internal/utils";

interface PopoverContentContextValue {
  slots: PopoverSlots;
}

export const { PopoverContentContext, usePopoverContent } =
  createContext<PopoverContentContextValue>()({
    name: "PopoverContent",
  });
