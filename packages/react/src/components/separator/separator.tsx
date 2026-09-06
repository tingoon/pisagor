import { ark } from "@ark-ui/react/factory";
import { separatorRecipe } from "@pisagor/recipes/separator";
import type { ComponentProps } from "react";

// #region Types
export interface SeparatorProps extends ComponentProps<typeof ark.div> {
  /**
   * The orientation of the separator.
   *
   * @defaultValue "horizontal"
   */
  orientation?: "horizontal" | "vertical";
  /**
   * Style recipe. Defaults to `separatorRecipe` from `@pisagor/recipes/separator`.
   *
   * @defaultValue separatorRecipe
   */
  recipe?: typeof separatorRecipe;
}
// #endregion

// #region Component
export function Separator({
  orientation = "horizontal",
  recipe = separatorRecipe,
  className,
  ...rest
}: SeparatorProps) {
  return (
    <ark.div
      {...rest}
      aria-orientation={orientation}
      className={recipe({ className })}
      data-orientation={orientation}
      data-part="root"
      data-scope="separator"
      role="separator"
    />
  );
}
// #endregion
