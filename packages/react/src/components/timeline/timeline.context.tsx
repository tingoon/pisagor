import type { TimelineItemRecipe } from "@pisagor/recipes/timeline";
import { createContext } from "../../internal/utils";

interface TimelineItemContextValue {
  slots: TimelineItemRecipe;
}

export const { TimelineItemContext, useTimelineItem } = createContext<TimelineItemContextValue>()({
  name: "TimelineItem",
});
