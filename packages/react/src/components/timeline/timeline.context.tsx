import type { TimelineItemRecipe } from "@pisagor/recipes";

import { createContext } from "../../utils";

interface TimelineItemContextValue {
  slots: TimelineItemRecipe;
}

export const { TimelineItemContext, useTimelineItem } =
  createContext("TimelineItem")<TimelineItemContextValue>();
