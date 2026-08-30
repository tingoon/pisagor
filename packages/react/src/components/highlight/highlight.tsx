import { Highlight as HighlightPrimitive, type HighlightProps } from "@ark-ui/react/highlight";
import { highlightRecipe } from "@pisagor/recipes/highlight";

// #region Component
export function Highlight({ className, ...rest }: HighlightProps) {
  return <HighlightPrimitive {...rest} className={highlightRecipe({ className })} />;
}
// #endregion
