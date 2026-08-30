import type { TimerItemGroupRecipe, TimerRecipe } from "@pisagor/recipes/timer";
import { createContext } from "../../internal/utils";

interface TimerContextValue {
  slots: TimerRecipe;
}

interface TimerItemGroupContextValue {
  slots: TimerItemGroupRecipe;
}

export const { TimerContext, useTimer } = createContext<TimerContextValue>()({
  name: "Timer",
});

export const { TimerItemGroupContext, useTimerItemGroup } =
  createContext<TimerItemGroupContextValue>()({
    name: "TimerItemGroup",
  });
