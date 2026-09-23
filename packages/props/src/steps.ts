import type { StepsItemRecipeFn, StepsRecipeFn } from "@pisagor/recipes/steps";

/** Steps props. */
export interface StepsProps {
  /**
   * Style recipe override.
   * @defaultValue stepsRecipe
   */
  recipe?: StepsRecipeFn;
}

/** StepsItem props. */
export interface StepsItemProps {
  /**
   * Style recipe override.
   * @defaultValue stepsItemRecipe
   */
  recipe?: StepsItemRecipeFn;
}
