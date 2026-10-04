import type { TimerItemGroupRecipe, TimerRecipe } from "@pisagor/recipes";

import { createContext } from "../../utils";

interface TimerContextValue {
  slots: TimerRecipe;
}

interface TimerItemGroupContextValue {
  slots: TimerItemGroupRecipe;
}

export const { TimerContext, useTimer } =
  createContext("Timer")<TimerContextValue>();

export const { TimerItemGroupContext, useTimerItemGroup } =
  createContext("TimerItemGroup")<TimerItemGroupContextValue>();
