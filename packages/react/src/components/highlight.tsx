import {
  Highlight as HighlightPrimitive,
  type HighlightProps as HighlightPrimitiveProps,
} from "@ark-ui/react";
import type { HighlightRootContract } from "@pisagor/props";
import { highlightRecipe } from "@pisagor/recipes";

// #region Types
export interface HighlightProps
  extends HighlightPrimitiveProps, HighlightRootContract {}
// #endregion

// #region Component
export function Highlight({
  recipe = highlightRecipe,
  className,
  ...rest
}: HighlightProps) {
  return <HighlightPrimitive {...rest} className={recipe({ className })} />;
}
// #endregion
