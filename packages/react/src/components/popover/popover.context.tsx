import type { PopoverContentVariants } from "@pisagor/styles/ui/popover";
import { createContext } from "../../utils";

export const { PopoverRootContext, usePopoverRoot } = createContext<{ testId?: string }>()({
  name: "PopoverRoot",
  strict: false,
});

interface PopoverContentContextValue {
  slots: PopoverContentVariants;
}

export const { PopoverContentContext, usePopoverContent } =
  createContext<PopoverContentContextValue>()({
    name: "PopoverContent",
  });
