import type { TimelineItemRecipe } from "@pisagor/recipes";
import { createContext } from "../../utils/create-context";

interface TimelineItemContextValue {
  slots: TimelineItemRecipe;
}

const ctx = createContext("TimelineItem")<TimelineItemContextValue>();
export const setTimelineItemContext = ctx.setContext;
export const useTimelineItem = ctx.getContext;
