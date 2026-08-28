import type { CircularProgressVariants } from "@pisagor/recipes/circular-progress";
import { createContext } from "../../internal/utils";

interface CircularProgressContextValue {
  slots: CircularProgressVariants;
}

export const { CircularProgressSlotsContext, useCircularProgressSlots } =
  createContext<CircularProgressContextValue>()({
    name: "CircularProgressSlots",
  });
