import type { ResizableRecipe } from "@pisagor/recipes/resizable";
import { createContext } from "../../utils/create-context";

interface ResizableContextValue {
  slots: ResizableRecipe;
}

const ctx = createContext<ResizableContextValue>({ name: "Resizable" });
export const setResizableContext = ctx.setContext;
export const useResizable = ctx.getContext;
