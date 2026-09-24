import type { FrameRecipe } from "@pisagor/recipes/frame";
import { createContext } from "../../utils";

interface FrameContextValue {
  slots: FrameRecipe;
}

export const { FrameContext, useFrame } = createContext<FrameContextValue>()({
  name: "Frame",
});
