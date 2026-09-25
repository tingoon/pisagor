import type { TimerItemGroupRecipe, TimerRecipe } from "@pisagor/recipes/timer";
import { createContext } from "../../utils/create-context";

interface TimerContextValue {
  slots: TimerRecipe;
}

interface TimerItemGroupContextValue {
  slots: TimerItemGroupRecipe;
}

const root = createContext<TimerContextValue>({ name: "Timer" });
const itemGroup = createContext<TimerItemGroupContextValue>({
  name: "TimerItemGroup",
});

export const setTimerContext = root.setContext;
export const useTimer = root.getContext;
export const setTimerItemGroupContext = itemGroup.setContext;
export const useTimerItemGroup = itemGroup.getContext;
