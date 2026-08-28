import type { CalendarVariants } from "@pisagor/recipes/calendar";
import { createContext } from "../../internal/utils";

interface CalendarContextValue {
  slots: CalendarVariants;
}

export const { CalendarContext: CalendarSlotsContext, useCalendar } =
  createContext<CalendarContextValue>()({
    name: "Calendar",
  });
