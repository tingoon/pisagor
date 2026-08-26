import type { TimerItemGroupVariants, TimerVariants } from "@pisagor/styles/ui/timer";
import { createContext } from "../../utils";

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
