import type { ResizableSlots } from "@pisagor/recipes/resizable";
import { createContext } from "../../internal/utils";

interface ResizableContextValue {
  slots: ResizableSlots;
}

export const { ResizableContext: ResizableSlotsContext, useResizable } =
  createContext<ResizableContextValue>()({
    name: "Resizable",
  });
