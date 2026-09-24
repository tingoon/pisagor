import type { TimelineItemRecipe } from "@pisagor/recipes/timeline";
import { createContext } from "../../utils/create-context";

interface TimelineItemContextValue {
  slots: TimelineItemRecipe;
}

const ctx = createContext<TimelineItemContextValue>({ name: "TimelineItem" });
export const setTimelineItemContext = ctx.setContext;
export const useTimelineItem = ctx.getContext;
