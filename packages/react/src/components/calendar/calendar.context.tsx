import type { CalendarVariants } from "@pisagor/styles/ui/calendar";
import { createContext } from "../../utils";

interface CalendarContextValue {
  slots: CalendarVariants;
}

export const { CalendarContext: CalendarSlotsContext, useCalendar } =
  createContext<CalendarContextValue>()({
    name: "Calendar",
  });
