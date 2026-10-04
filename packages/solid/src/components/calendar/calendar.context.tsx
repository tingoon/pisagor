import type { CalendarRecipe } from "@pisagor/recipes";
import { createContext } from "../../utils";

interface CalendarContextValue {
  slots: CalendarRecipe;
}

export const { CalendarContext: CalendarSlotsContext, useCalendar } =
  createContext("Calendar")<CalendarContextValue>();
