import type { FrameVariants } from "@pisagor/recipes/frame";
import { createContext } from "../../internal/utils";

interface FrameContextValue {
  slots: FrameVariants;
}

export const { FrameContext, useFrame } = createContext<FrameContextValue>()({
  name: "Frame",
});
