import { Highlight as HighlightPrimitive } from "@ark-ui/react/highlight";
import { highlightVariants } from "@pisagor/styles/ui/highlight";
import { cn } from "@pisagor/utils";
import type { ComponentProps } from "react";
import type { WithTestId } from "../../internal/types";

// #region Types
type HighlightRootProps = ComponentProps<typeof HighlightPrimitive>;

interface HighlightProps extends HighlightRootProps, WithTestId {}
// #endregion

// #region Part
export function Highlight({ className, testId, ...rest }: HighlightProps) {
  return (
    <HighlightPrimitive
      {...rest}
      className={cn(highlightVariants(), className)}
      data-testid={testId}
    />
  );
}
// #endregion
