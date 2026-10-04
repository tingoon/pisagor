import type {
  CalendarRecipeFn,
  CalendarTableCellRecipeFn,
} from "@pisagor/recipes";

/** Calendar props. */
export interface CalendarProps {
  /**
   * Style recipe override.
   * @defaultValue calendarRecipe
   */
  recipe?: CalendarRecipeFn;
}

/** CalendarTableCell props. */
export interface CalendarTableCellProps {
  /**
   * Style recipe override.
   * @defaultValue calendarTableCellRecipe
   */
  recipe?: CalendarTableCellRecipeFn;
}
