import type { CalendarRecipe } from "@pisagor/recipes/calendar";
import { createContext } from "../../internal/utils";

interface CalendarContextValue {
  slots: CalendarRecipe;
}

export const { CalendarContext: CalendarSlotsContext, useCalendar } =
  createContext<CalendarContextValue>()({
    name: "Calendar",
  });
