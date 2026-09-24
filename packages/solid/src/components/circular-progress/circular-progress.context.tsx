import type { CircularProgressRecipe } from "@pisagor/recipes/circular-progress";
import { createContext } from "../../utils";

interface CircularProgressContextValue {
  slots: CircularProgressRecipe;
}

export const { CircularProgressSlotsContext, useCircularProgressSlots } =
  createContext<CircularProgressContextValue>()({
    name: "CircularProgressSlots",
  });
