import type { CircularProgressSlots } from "@pisagor/recipes/circular-progress";
import { createContext } from "../../internal/utils";

interface CircularProgressContextValue {
  slots: CircularProgressSlots;
}

export const { CircularProgressSlotsContext, useCircularProgressSlots } =
  createContext<CircularProgressContextValue>()({
    name: "CircularProgressSlots",
  });
