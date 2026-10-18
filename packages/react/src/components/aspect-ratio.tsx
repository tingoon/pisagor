import type {
  AspectRatioRootContract,
  AspectRatioContract,
} from "@pisagor/props";
import { aspectRatioRecipe } from "@pisagor/recipes";
import type { ComponentPropsWithRef } from "react";

// #region Types
export interface AspectRatioProps
  extends
    ComponentPropsWithRef<"div">,
    AspectRatioRootContract,
    AspectRatioContract {}
// #endregion

// #region Component
export function AspectRatio({
  ratio,
  recipe = aspectRatioRecipe,
  className,
  style,
  ...rest
}: AspectRatioProps) {
  return (
    <div
      {...rest}
      className={recipe({ className })}
      data-part="root"
      data-scope="aspect-ratio"
      style={ratio === undefined ? style : { "--ratio": ratio, ...style }}
    />
  );
}
// #endregion
