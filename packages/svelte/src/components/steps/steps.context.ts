import type { StepsItemRecipe, StepsRecipe } from "@pisagor/recipes";
import { createContext } from "../../utils/create-context";

interface StepsContextValue {
  slots: StepsRecipe;
}

interface StepsItemContextValue {
  slots: StepsItemRecipe;
}

export const { setContext: setStepsContext, getContext: useSteps } =
  createContext("Steps")<StepsContextValue>();

export const { setContext: setStepsItemContext, getContext: useStepsItem } =
  createContext("StepsItem")<StepsItemContextValue>();
