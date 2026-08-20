import type { CircularProgressVariants } from "@pisagor/styles/ui/circular-progress";
import { createContext } from "../../utils";

interface CircularProgressContextValue {
  slots: CircularProgressVariants;
}

export const { CircularProgressSlotsContext, useCircularProgressSlots } =
  createContext<CircularProgressContextValue>()({
    name: "CircularProgressSlots",
  });
