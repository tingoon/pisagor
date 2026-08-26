import type { TimerVariants } from "@pisagor/styles/ui/timer";
import { createContext } from "../../utils";

interface TimerContextValue {
  slots: TimerVariants;
}

export const { TimerContext, useTimer } = createContext<TimerContextValue>()({
  name: "Timer",
});
