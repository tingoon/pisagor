import { ark } from "@ark-ui/react/factory";
import type {
  SkipNavProps as BaseSkipNavContentProps,
  SkipNavProps as BaseSkipNavLinkProps,
} from "@pisagor/props";
import { skipNavRecipe } from "@pisagor/recipes";
import type { ComponentProps } from "react";

// #region Types
export interface SkipNavLinkProps
  extends ComponentProps<typeof ark.a>,
    BaseSkipNavLinkProps {
  /**
   * The id of the element to skip to.
   *
   * @defaultValue "skip-nav-content"
   *
   * @remarks
   * Must match the `id` on the paired `SkipNavContent`.
   */
  id?: string;
}

export interface SkipNavContentProps
  extends ComponentProps<typeof ark.div>,
    BaseSkipNavContentProps {
  /**
   * The id that SkipNavLink links to.
   *
   * @defaultValue "skip-nav-content"
   *
   * @remarks
   * Must match the `id` passed to the paired `SkipNavLink`.
   */
  id?: string;
}
// #endregion

// #region Parts
const SKIP_NAV_ID = "skip-nav-content";

export function SkipNavLink({
  children,
  id = SKIP_NAV_ID,
  recipe = skipNavRecipe,
  className,
  ...rest
}: SkipNavLinkProps) {
  const slots = recipe();

  return (
    <ark.a
      {...rest}
      className={slots.link({ className })}
      data-part="link"
      data-scope="skip-nav"
      href={`#${id}`}
    >
      {children ?? "Skip to content"}
    </ark.a>
  );
}

export function SkipNavContent({
  id = SKIP_NAV_ID,
  recipe = skipNavRecipe,
  className,
  ...rest
}: SkipNavContentProps) {
  const slots = recipe();

  return (
    <ark.div
      {...rest}
      className={slots.content({ className })}
      data-part="content"
      data-scope="skip-nav"
      id={id}
      tabIndex={-1}
    />
  );
}
// #endregion

// #region Display Names
SkipNavLink.displayName = "SkipNav.Link";
SkipNavContent.displayName = "SkipNav.Content";
// #endregion

export const SkipNav = {
  Content: SkipNavContent,
  Link: SkipNavLink,
};
