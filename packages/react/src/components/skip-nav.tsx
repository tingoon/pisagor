import { ark, type HTMLArkProps } from "@ark-ui/react";
import type { SkipNavRootContract } from "@pisagor/contracts";
import { skipNavRecipe } from "@pisagor/recipes";
import type { ComponentPropsWithRef } from "react";

import { useLocale } from "./provider/context";

// #region Types
export interface SkipNavLinkProps
  extends HTMLArkProps<"a">, SkipNavRootContract {
  /**
   * The id of the element to skip to.
   *
   * @remarks
   *   Must match the `id` on the paired `SkipNavContent`.
   * @defaultValue "skip-nav-content"
   */
  id?: string;
}

export interface SkipNavContentProps
  extends ComponentPropsWithRef<"div">, SkipNavRootContract {
  /**
   * The id that SkipNavLink links to.
   *
   * @remarks
   *   Must match the `id` passed to the paired `SkipNavLink`.
   * @defaultValue "skip-nav-content"
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
  const { m } = useLocale();
  const slots = recipe();

  return (
    <ark.a
      {...rest}
      className={slots.link({ className })}
      data-part="link"
      data-scope="skip-nav"
      href={`#${id}`}
    >
      {m("skipNav.label", children)}
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
    <div
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
