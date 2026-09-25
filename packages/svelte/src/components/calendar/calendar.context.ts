import type { CalendarRecipe } from "@pisagor/recipes/calendar";
import { createContext } from "../../utils/create-context";

interface CalendarContextValue {
  slots: CalendarRecipe;
}

export const { setContext: setCalendarSlotsContext, getContext: useCalendar } =
  createContext<CalendarContextValue>({ name: "Calendar" });
