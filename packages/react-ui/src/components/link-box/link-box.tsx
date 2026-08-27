import { ark } from "@ark-ui/react/factory";
import { linkBoxVariants } from "@pisagor/recipes/link-box";
import type { ComponentProps } from "react";
import { useMemo } from "react";
import { LinkBoxContext, useLinkBox } from "./link-box.context";

// #region Types
export interface LinkBoxRootProps extends ComponentProps<typeof ark.div> {}

export interface LinkOverlayLinkProps extends ComponentProps<typeof ark.a> {}
// #endregion

// #region Parts
export function LinkBoxRoot({ className, children, ...rest }: LinkBoxRootProps) {
  const slots = useMemo(() => linkBoxVariants(), []);

  return (
    <LinkBoxContext value={{ slots }}>
      <ark.div
        {...rest}
        className={slots.base({ className })}
        data-part="root"
        data-scope="link-box"
      >
        {children}
      </ark.div>
    </LinkBoxContext>
  );
}

export function LinkOverlayLink({ className, ...rest }: LinkOverlayLinkProps) {
  const { slots } = useLinkBox();

  return (
    <ark.a
      {...rest}
      className={slots.overlay({ className })}
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
