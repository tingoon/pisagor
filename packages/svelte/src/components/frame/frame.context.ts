import type { FrameRecipe } from "@pisagor/recipes";
import { createContext } from "../../utils/create-context";

export interface FrameContextValue {
  slots: FrameRecipe;
}

const ctx = createContext("Frame")<FrameContextValue>();

export const setFrameContext = ctx.setContext;
export const useFrame = ctx.getContext;
