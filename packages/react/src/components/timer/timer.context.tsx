import type { TimerItemGroupVariants, TimerVariants } from "@pisagor/recipes/timer";
import { createContext } from "../../internal/utils";

interface TimerContextValue {
  slots: TimerVariants;
}

interface TimerItemGroupContextValue {
  slots: TimerItemGroupVariants;
}

export const { TimerContext, useTimer } = createContext<TimerContextValue>()({
  name: "Timer",
});

export const { TimerItemGroupContext, useTimerItemGroup } =
  createContext<TimerItemGroupContextValue>()({
    name: "TimerItemGroup",
  });
