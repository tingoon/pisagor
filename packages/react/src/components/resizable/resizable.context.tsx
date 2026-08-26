import type { ResizableVariants } from "@pisagor/styles/ui/resizable";
import { createContext } from "../../utils";

interface ResizableContextValue {
  slots: ResizableVariants;
}

export const { ResizableContext: ResizableSlotsContext, useResizable } =
  createContext<ResizableContextValue>()({
    name: "Resizable",
  });
