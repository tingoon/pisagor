import {
  Highlight as HighlightPrimitive,
  type HighlightProps as HighlightPrimitiveProps,
} from "@ark-ui/react/highlight";
import type { HighlightProps as HighlightSharedProps } from "@pisagor/props";
import { highlightRecipe } from "@pisagor/recipes";

// #region Types
export interface HighlightProps
  extends HighlightPrimitiveProps,
    HighlightSharedProps {}
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
