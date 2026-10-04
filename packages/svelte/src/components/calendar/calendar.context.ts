import type { CalendarRecipe } from "@pisagor/recipes";
import { createContext } from "../../utils/create-context";

interface CalendarContextValue {
  slots: CalendarRecipe;
}

export const { setContext: setCalendarSlotsContext, getContext: useCalendar } =
  createContext("Calendar")<CalendarContextValue>();
