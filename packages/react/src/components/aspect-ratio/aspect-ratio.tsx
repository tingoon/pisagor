import { ark } from "@ark-ui/react/factory";
import { aspectRatioRecipe } from "@pisagor/recipes/aspect-ratio";
import type { ComponentProps } from "react";

// #region Types
export interface AspectRatioProps extends ComponentProps<typeof ark.div> {
  /**
   * Style recipe. Defaults to `aspectRatioRecipe` from `@pisagor/recipes/aspect-ratio`.
   *
   * @defaultValue aspectRatioRecipe
   */
  recipe?: typeof aspectRatioRecipe;
}
// #endregion

// #region Component
export function AspectRatio({ recipe = aspectRatioRecipe, className, ...rest }: AspectRatioProps) {
  return (
    <ark.div
      {...rest}
      className={recipe({ className })}
      data-part="root"
      data-scope="aspect-ratio"
    />
  );
}
// #endregion
