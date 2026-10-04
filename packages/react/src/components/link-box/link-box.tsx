import { ark } from "@ark-ui/react/factory";
import type { LinkBoxProps as BaseLinkBoxRootProps } from "@pisagor/props";
import { linkBoxRecipe } from "@pisagor/recipes";
import type { ComponentProps } from "react";
import { LinkBoxContext, useLinkBox } from "./link-box.context";

// #region Types
export interface LinkBoxRootProps
  extends ComponentProps<typeof ark.div>,
    BaseLinkBoxRootProps {}

export type LinkOverlayLinkProps = ComponentProps<typeof ark.a>;
// #endregion

// #region Parts
export function LinkBoxRoot({
  children,
  recipe = linkBoxRecipe,
  className,
  ...rest
}: LinkBoxRootProps) {
  const slots = recipe();

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
