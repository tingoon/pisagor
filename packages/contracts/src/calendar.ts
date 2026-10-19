import type {
  CalendarRecipeFn,
  CalendarTableCellRecipeFn,
} from "@pisagor/recipes";

/**
 * Shared Calendar root contract: recipe override. Used by compound roots;
 * excludes host DOM attributes.
 */
export interface CalendarRootContract {
  /**
   * Style recipe override.
   *
   * @defaultValue calendarRecipe
   */
  recipe?: CalendarRecipeFn;
}

/**
 * Shared CalendarTableCell root contract: recipe override. Used by compound
 * roots; excludes host DOM attributes.
 */
export interface CalendarTableCellRootContract {
  /**
   * Style recipe override.
   *
   * @defaultValue calendarTableCellRecipe
   */
  recipe?: CalendarTableCellRecipeFn;
}
