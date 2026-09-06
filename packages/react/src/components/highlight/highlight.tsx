import {
  Highlight as HighlightPrimitive,
  type HighlightProps as HighlightPrimitiveProps,
} from "@ark-ui/react/highlight";
import { highlightRecipe } from "@pisagor/recipes/highlight";

// #region Types
export interface HighlightProps extends HighlightPrimitiveProps {
  /**
   * Style recipe. Defaults to `highlightRecipe` from `@pisagor/recipes/highlight`.
   *
   * @defaultValue highlightRecipe
   */
  recipe?: typeof highlightRecipe;
}
// #endregion

// #region Component
export function Highlight({ recipe = highlightRecipe, className, ...rest }: HighlightProps) {
  return <HighlightPrimitive {...rest} className={recipe({ className })} />;
}
// #endregion
