import type { FrameSlots } from "@pisagor/recipes/frame";
import { createContext } from "../../internal/utils";

interface FrameContextValue {
  slots: FrameSlots;
}

export const { FrameContext, useFrame } = createContext<FrameContextValue>()({
  name: "Frame",
});
