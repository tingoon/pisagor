import { ark } from "@ark-ui/react/factory";
import { visuallyHiddenRecipe } from "@pisagor/recipes/visually-hidden";
import type { ComponentProps } from "react";

// #region Types
export interface VisuallyHiddenProps extends ComponentProps<typeof ark.span> {
  /**
   * Style recipe. Defaults to `visuallyHiddenRecipe` from `@pisagor/recipes/visually-hidden`.
   *
   * @defaultValue visuallyHiddenRecipe
   */
  recipe?: typeof visuallyHiddenRecipe;
}
// #endregion

// #region Component
/**
 * Hides content visually while keeping it available to assistive technology.
 */
export function VisuallyHidden({
  recipe = visuallyHiddenRecipe,
  className,
  ...rest
}: VisuallyHiddenProps) {
  return (
    <ark.span
      {...rest}
      className={recipe({ className })}
      data-part="root"
      data-scope="visually-hidden"
    />
  );
}
// #endregion
