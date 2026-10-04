import type { StepsItemRecipe, StepsRecipe } from "@pisagor/recipes";

import { createContext } from "../../utils";

interface StepsContextValue {
  slots: StepsRecipe;
}

interface StepsItemContextValue {
  slots: StepsItemRecipe;
}

export const { StepsContext, useSteps } =
  createContext("Steps")<StepsContextValue>();

export const { StepsItemContext, useStepsItem } =
  createContext("StepsItem")<StepsItemContextValue>();
