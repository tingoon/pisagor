import type { StepsItemRecipe, StepsRecipe } from "@pisagor/recipes/steps";
import { createContext } from "../../utils";

interface StepsContextValue {
  slots: StepsRecipe;
}

interface StepsItemContextValue {
  slots: StepsItemRecipe;
}

export const { StepsContext, useSteps } = createContext<StepsContextValue>()({
  name: "Steps",
});

export const { StepsItemContext, useStepsItem } = createContext<StepsItemContextValue>()({
  name: "StepsItem",
});
