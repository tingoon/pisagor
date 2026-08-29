import type { TimerItemGroupSlots, TimerSlots } from "@pisagor/recipes/timer";
import { createContext } from "../../internal/utils";

interface TimerContextValue {
  slots: TimerSlots;
}

interface TimerItemGroupContextValue {
  slots: TimerItemGroupSlots;
}

export const { TimerContext, useTimer } = createContext<TimerContextValue>()({
  name: "Timer",
});

export const { TimerItemGroupContext, useTimerItemGroup } =
  createContext<TimerItemGroupContextValue>()({
    name: "TimerItemGroup",
  });
