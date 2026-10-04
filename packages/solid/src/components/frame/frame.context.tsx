import type { FrameRecipe } from "@pisagor/recipes";
import { createContext } from "../../utils";

interface FrameContextValue {
  slots: FrameRecipe;
}

export const { FrameContext, useFrame } =
  createContext("Frame")<FrameContextValue>();
