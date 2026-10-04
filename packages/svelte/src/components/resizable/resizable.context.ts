import type { ResizableRecipe } from "@pisagor/recipes";
import { createContext } from "../../utils/create-context";

interface ResizableContextValue {
  slots: ResizableRecipe;
}

const ctx = createContext("Resizable")<ResizableContextValue>();
export const setResizableContext = ctx.setContext;
export const useResizable = ctx.getContext;
