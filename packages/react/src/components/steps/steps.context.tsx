import type { StepsItemSlots, StepsSlots } from "@pisagor/recipes/steps";
import { createContext } from "../../internal/utils";

interface StepsContextValue {
  slots: StepsSlots;
}

interface StepsItemContextValue {
  slots: StepsItemSlots;
}

export const { StepsContext, useSteps } = createContext<StepsContextValue>()({
  name: "Steps",
});

export const { StepsItemContext, useStepsItem } = createContext<StepsItemContextValue>()({
  name: "StepsItem",
});
