import type { ChartRecipeFn } from "@pisagor/recipes/chart";

/** Chart props. */
export interface ChartProps {
  /**
   * Style recipe override.
   * @defaultValue chartRecipe
   */
  recipe?: ChartRecipeFn;
}
