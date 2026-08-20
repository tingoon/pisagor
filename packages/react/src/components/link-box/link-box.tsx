import { ark } from "@ark-ui/react/factory";
import { linkBoxOverlayVariants, linkBoxVariants } from "@pisagor/styles/ui/link-box";
import type { ComponentProps } from "react";
import type { WithTestId } from "../../internal/types";

// #region Types
export interface LinkBoxRootProps extends ComponentProps<typeof ark.div>, WithTestId {}
// #endregion

// #region Parts
export function LinkBoxRoot({ className, testId, ...rest }: LinkBoxRootProps) {
  return (
    <ark.div
      {...rest}
      className={linkBoxVariants({ className })}
      data-part="root"
      data-scope="link-box"
      data-testid={testId}
    />
  );
}

export function LinkOverlayLink({ className, ...rest }: ComponentProps<typeof ark.a>) {
  return (
    <ark.a
      {...rest}
      className={linkBoxOverlayVariants({ className })}
      data-part="overlay"
      data-scope="link-box"
    />
  );
}

LinkBoxRoot.displayName = "LinkBox";
LinkOverlayLink.displayName = "LinkBox.Overlay";
// #endregion
