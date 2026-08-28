import type { ResizableVariants } from "@pisagor/recipes/resizable";
import { createContext } from "../../internal/utils";

interface ResizableContextValue {
  slots: ResizableVariants;
}

export const { ResizableContext: ResizableSlotsContext, useResizable } =
  createContext<ResizableContextValue>()({
    name: "Resizable",
  });
