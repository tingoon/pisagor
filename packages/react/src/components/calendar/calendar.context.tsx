import type { CalendarSlots } from "@pisagor/recipes/calendar";
import { createContext } from "../../internal/utils";

interface CalendarContextValue {
  slots: CalendarSlots;
}

export const { CalendarContext: CalendarSlotsContext, useCalendar } =
  createContext<CalendarContextValue>()({
    name: "Calendar",
  });
