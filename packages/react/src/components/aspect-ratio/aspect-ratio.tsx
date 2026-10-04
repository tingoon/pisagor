import { ark } from "@ark-ui/react/factory";
import type { AspectRatioProps as AspectRatioSharedProps } from "@pisagor/props";
import { aspectRatioRecipe } from "@pisagor/recipes";
import type { ComponentProps } from "react";

// #region Types
export interface AspectRatioProps
  extends ComponentProps<typeof ark.div>,
    AspectRatioSharedProps {}
// #endregion

// #region Component
export function AspectRatio({
  recipe = aspectRatioRecipe,
  className,
  ...rest
}: AspectRatioProps) {
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
