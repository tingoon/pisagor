import type { TooltipRecipeFn } from "@pisagor/recipes";

/** Tooltip props. */
export interface TooltipProps {
  /**
   * Style recipe override.
   * @defaultValue tooltipRecipe
   */
  recipe?: TooltipRecipeFn;
}
