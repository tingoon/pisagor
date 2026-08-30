import type { ResizableRecipe } from "@pisagor/recipes/resizable";
import { createContext } from "../../internal/utils";

interface ResizableContextValue {
  slots: ResizableRecipe;
}

export const { ResizableContext: ResizableSlotsContext, useResizable } =
  createContext<ResizableContextValue>()({
    name: "Resizable",
  });
