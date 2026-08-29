import { Highlight as HighlightPrimitive } from "@ark-ui/react/highlight";
import { highlightRecipe } from "@pisagor/recipes/highlight";
import type { ComponentProps } from "react";

// #region Types
type HighlightRootProps = ComponentProps<typeof HighlightPrimitive>;

export type HighlightProps = HighlightRootProps;
// #endregion

// #region Part
export function Highlight({ className, ...rest }: HighlightProps) {
  return <HighlightPrimitive {...rest} className={highlightRecipe({ className })} />;
}
// #endregion

// #region Display Names
Highlight.displayName = "Highlight";
// #endregion
