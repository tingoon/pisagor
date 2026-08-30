import type { FrameRecipe } from "@pisagor/recipes/frame";
import { createContext } from "../../internal/utils";

interface FrameContextValue {
  slots: FrameRecipe;
}

export const { FrameContext, useFrame } = createContext<FrameContextValue>()({
  name: "Frame",
});
