import type { FrameRecipe } from "@pisagor/recipes/frame";
import { createContext } from "../../utils/create-context";

export interface FrameContextValue {
  slots: FrameRecipe;
}

const ctx = createContext<FrameContextValue>({ name: "Frame" });

export const setFrameContext = ctx.setContext;
export const useFrame = ctx.getContext;
