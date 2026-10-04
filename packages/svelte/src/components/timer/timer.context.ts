import type { TimerItemGroupRecipe, TimerRecipe } from "@pisagor/recipes";
import { createContext } from "../../utils/create-context";

interface TimerContextValue {
  slots: TimerRecipe;
}

interface TimerItemGroupContextValue {
  slots: TimerItemGroupRecipe;
}

const root = createContext("Timer")<TimerContextValue>();
const itemGroup = createContext("TimerItemGroup")<TimerItemGroupContextValue>();

export const setTimerContext = root.setContext;
export const useTimer = root.getContext;
export const setTimerItemGroupContext = itemGroup.setContext;
export const useTimerItemGroup = itemGroup.getContext;
