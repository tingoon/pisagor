import { ark } from "@ark-ui/react/factory";
import { skipNavVariants } from "@pisagor/recipes/skip-nav";
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
}
// #endregion

// #region Parts
const SKIP_NAV_ID = "skip-nav-content";

export function SkipNavLink({ children, id = SKIP_NAV_ID, className, ...rest }: SkipNavLinkProps) {
  const slots = skipNavVariants();

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

export function SkipNavContent({ id = SKIP_NAV_ID, className, ...rest }: SkipNavContentProps) {
  const slots = skipNavVariants();

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
