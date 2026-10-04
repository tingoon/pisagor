import type { CircularProgressRecipe } from "@pisagor/recipes";

import { createContext } from "../../utils";

interface CircularProgressContextValue {
  slots: CircularProgressRecipe;
}

export const { CircularProgressSlotsContext, useCircularProgressSlots } =
  createContext("CircularProgressSlots")<CircularProgressContextValue>();
