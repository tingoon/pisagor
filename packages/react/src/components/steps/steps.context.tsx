import type { StepsItemVariants, StepsVariants } from "@pisagor/styles/ui/steps";
import { createContext } from "../../utils";

interface StepsContextValue {
  slots: StepsVariants;
}

interface StepsItemContextValue {
  slots: StepsItemVariants;
}

export const { StepsContext, useSteps } = createContext<StepsContextValue>()({
  name: "Steps",
});

export const { StepsItemContext, useStepsItem } = createContext<StepsItemContextValue>()({
  name: "StepsItem",
});
