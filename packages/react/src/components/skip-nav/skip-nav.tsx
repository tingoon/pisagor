import { ark } from "@ark-ui/react/factory";
import { skipNavRecipe } from "@pisagor/recipes/skip-nav";
import type { ComponentProps } from "react";

// #region Types
export interface SkipNavLinkProps extends ComponentProps<typeof ark.a> {
  /**
   * The id of the element to skip to.
   *
   * @defaultValue "skip-nav-content"
   *
   * @remarks
   * Must match the `id` on the paired `SkipNavContent`.
   */
  id?: string;
  /**
   * Style recipe. Defaults to `skipNavRecipe` from `@pisagor/recipes/skip-nav`.
   *
   * @defaultValue skipNavRecipe
   */
  recipe?: typeof skipNavRecipe;
}

export interface SkipNavContentProps extends ComponentProps<typeof ark.div> {
  /**
   * The id that SkipNavLink links to.
   *
   * @defaultValue "skip-nav-content"
   *
   * @remarks
   * Must match the `id` passed to the paired `SkipNavLink`.
   */
  id?: string;
  /**
   * Style recipe. Defaults to `skipNavRecipe` from `@pisagor/recipes/skip-nav`.
   *
   * @defaultValue skipNavRecipe
   */
  recipe?: typeof skipNavRecipe;
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
