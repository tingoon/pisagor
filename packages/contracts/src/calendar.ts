import type {
  CalendarRecipeFn,
  CalendarTableCellRecipeFn,
  CalendarVariantProps,
} from "@pisagor/recipes";

/**
 * Shared Calendar root contract: visual variants and recipe override. Used by
 * compound roots; excludes host DOM attributes.
 */
export interface CalendarRootContract extends CalendarVariantProps {
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
