import { ark } from "@ark-ui/react/factory";
import { linkBoxOverlayVariants, linkBoxVariants } from "@pisagor/styles/ui/link-box";
import { cn } from "@pisagor/utils";
import type { ComponentProps } from "react";
import type { WithTestId } from "../../internal/types";

// #region Types
interface LinkBoxRootProps extends ComponentProps<typeof ark.div>, WithTestId {}
// #endregion

// #region Components
export function LinkBoxRoot({ className, testId, ...rest }: LinkBoxRootProps) {
  return (
    <ark.div
      {...rest}
      className={cn(linkBoxVariants(), className)}
      data-part="root"
      data-scope="link-box"
      data-testid={testId}
    />
  );
}
LinkBoxRoot.displayName = "LinkBox";

export function LinkOverlayLink({ className, ...rest }: ComponentProps<typeof ark.a>) {
  return (
    <ark.a
      {...rest}
      className={cn(linkBoxOverlayVariants(), className)}
      data-part="overlay"
      data-scope="link-box"
    />
  );
}
LinkOverlayLink.displayName = "LinkBox.Overlay";
// #endregion
