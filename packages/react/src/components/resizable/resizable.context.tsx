import type { ResizableRecipe } from "@pisagor/recipes";

import { createContext } from "../../utils";

interface ResizableContextValue {
  slots: ResizableRecipe;
}

export const { ResizableContext: ResizableSlotsContext, useResizable } =
  createContext("Resizable")<ResizableContextValue>();
