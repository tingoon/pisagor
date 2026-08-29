import type { TimelineItemSlots } from "@pisagor/recipes/timeline";
import { createContext } from "../../internal/utils";

interface TimelineItemContextValue {
  slots: TimelineItemSlots;
}

export const { TimelineItemContext, useTimelineItem } = createContext<TimelineItemContextValue>()({
  name: "TimelineItem",
});
