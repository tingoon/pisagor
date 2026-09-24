import type { CalendarRecipe } from "@pisagor/recipes/calendar";
import { createContext } from "../../utils";

interface CalendarContextValue {
  slots: CalendarRecipe;
}

export const { CalendarContext: CalendarSlotsContext, useCalendar } =
  createContext<CalendarContextValue>()({
    name: "Calendar",
  });
