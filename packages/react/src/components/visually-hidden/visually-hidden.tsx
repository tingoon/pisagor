import { ark } from "@ark-ui/react/factory";
import { visuallyHiddenVariants } from "@pisagor/styles/ui/visually-hidden";
import type { ComponentProps } from "react";
import type { WithTestId } from "../../internal/types";

// #region Types
export interface VisuallyHiddenProps extends ComponentProps<typeof ark.span>, WithTestId {}
// #endregion

// #region Part
/**
 * Hides content visually while keeping it available to assistive technology.
 */
export function VisuallyHidden({ className, testId, ...rest }: VisuallyHiddenProps) {
  return (
    <ark.span
      {...rest}
      className={visuallyHiddenVariants({ className })}
      data-part="root"
      data-scope="visually-hidden"
      data-testid={testId}
    />
  );
}
// #endregion

// #region Display Names
VisuallyHidden.displayName = "VisuallyHidden";
// #endregion
