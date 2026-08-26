import { ark } from "@ark-ui/react/factory";
import { linkBoxOverlayVariants, linkBoxVariants } from "@pisagor/styles/ui/link-box";
import type { ComponentProps } from "react";
// #region Types
export interface LinkBoxRootProps extends ComponentProps<typeof ark.div> {}

export interface LinkOverlayLinkProps extends ComponentProps<typeof ark.a> {}
// #endregion

// #region Parts
export function LinkBoxRoot({ className, ...rest }: LinkBoxRootProps) {
  return (
    <ark.div
      {...rest}
      className={linkBoxVariants({ className })}
      data-part="root"
      data-scope="link-box"
    />
  );
}

export function LinkOverlayLink({ className, ...rest }: LinkOverlayLinkProps) {
  return (
    <ark.a
      {...rest}
      className={linkBoxOverlayVariants({ className })}
      data-part="overlay"
      data-scope="link-box"
    />
  );
}
// #endregion

// #region Display Names
LinkBoxRoot.displayName = "LinkBox";
LinkOverlayLink.displayName = "LinkBox.Overlay";
// #endregion
