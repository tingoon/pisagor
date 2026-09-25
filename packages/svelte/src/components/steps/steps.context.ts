import type { StepsItemRecipe, StepsRecipe } from "@pisagor/recipes/steps";
import { createContext } from "../../utils/create-context";

interface StepsContextValue {
  slots: StepsRecipe;
}

interface StepsItemContextValue {
  slots: StepsItemRecipe;
}

export const { setContext: setStepsContext, getContext: useSteps } =
  createContext<StepsContextValue>({ name: "Steps" });

export const { setContext: setStepsItemContext, getContext: useStepsItem } =
  createContext<StepsItemContextValue>({ name: "StepsItem" });
