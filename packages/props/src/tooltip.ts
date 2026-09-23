import type { TooltipRecipeFn } from "@pisagor/recipes/tooltip";

/** Tooltip props. */
export interface TooltipProps {
  /**
   * Style recipe override.
   * @defaultValue tooltipRecipe
   */
  recipe?: TooltipRecipeFn;
}
