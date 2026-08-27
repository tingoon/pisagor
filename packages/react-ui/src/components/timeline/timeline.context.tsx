import type { TimelineItemVariants } from "@pisagor/recipes/timeline";
import { createContext } from "../../utils";

interface TimelineItemContextValue {
  slots: TimelineItemVariants;
}

export const { TimelineItemContext, useTimelineItem } = createContext<TimelineItemContextValue>()({
  name: "TimelineItem",
});
