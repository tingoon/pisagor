import { Highlight as HighlightPrimitive } from "@ark-ui/react/highlight";
import { highlightVariants } from "@pisagor/recipes/highlight";
import type { ComponentProps } from "react";

// #region Types
type HighlightRootProps = ComponentProps<typeof HighlightPrimitive>;

export type HighlightProps = HighlightRootProps;
// #endregion

// #region Part
export function Highlight({ className, ...rest }: HighlightProps) {
  return <HighlightPrimitive {...rest} className={highlightVariants({ className })} />;
}
// #endregion

// #region Display Names
Highlight.displayName = "Highlight";
// #endregion
