import { Highlight as HighlightPrimitive } from "@ark-ui/react/highlight";
import { highlightRecipe } from "@pisagor/recipes/highlight";
import type { ComponentProps } from "react";

// #region Types
export type HighlightProps = ComponentProps<typeof HighlightPrimitive>;
// #endregion

// #region Component
export function Highlight({ className, ...rest }: HighlightProps) {
  return <HighlightPrimitive {...rest} className={highlightRecipe({ className })} />;
}
// #endregion
