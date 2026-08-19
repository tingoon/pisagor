import { ark } from "@ark-ui/react/factory";
import { navbarVariants } from "@pisagor/styles/ui/navbar";
import { cn } from "@pisagor/utils";
import type { ComponentProps } from "react";
import type { VariantClassNames, WithTestId } from "../../internal/types";

// #region Variants

// #endregion

// #region Types
type NavbarClassNames = VariantClassNames<typeof navbarVariants>;

interface NavbarRootProps extends ComponentProps<typeof ark.header>, WithTestId {
  /** Slot class names */
  classNames?: NavbarClassNames;
}

interface NavbarPartProps extends ComponentProps<typeof ark.div> {
  /** Slot class names */
  classNames?: NavbarClassNames;
}

interface NavbarNavProps extends ComponentProps<typeof ark.nav> {
  /** Slot class names */
  classNames?: NavbarClassNames;
}
// #endregion

// #region Components
export function NavbarRoot({ className, classNames, testId, ...rest }: NavbarRootProps) {
  const slots = navbarVariants();

  return (
    <ark.header
      {...rest}
      className={cn(slots.root(), className, classNames?.root)}
      data-part="root"
      data-scope="navbar"
      data-testid={testId}
    />
  );
}
NavbarRoot.displayName = "Navbar";

export function NavbarBrand({ className, classNames, ...rest }: NavbarPartProps) {
  const slots = navbarVariants();

  return (
    <ark.div
      {...rest}
      className={cn(slots.brand(), className, classNames?.brand)}
      data-part="brand"
      data-scope="navbar"
    />
  );
}
NavbarBrand.displayName = "Navbar.Brand";

export function NavbarContent({ className, classNames, ...rest }: NavbarPartProps) {
  const slots = navbarVariants();

  return (
    <ark.div
      {...rest}
      className={cn(slots.content(), className, classNames?.content)}
      data-part="content"
      data-scope="navbar"
    />
  );
}
NavbarContent.displayName = "Navbar.Content";

export function NavbarNav({
  "aria-label": ariaLabel = "Main",
  className,
  classNames,
  ...rest
}: NavbarNavProps) {
  const slots = navbarVariants();

  return (
    <ark.nav
      {...rest}
      aria-label={ariaLabel}
      className={cn(slots.nav(), className, classNames?.nav)}
      data-part="nav"
      data-scope="navbar"
    />
  );
}
NavbarNav.displayName = "Navbar.Nav";

export function NavbarActions({ className, classNames, ...rest }: NavbarPartProps) {
  const slots = navbarVariants();

  return (
    <ark.div
      {...rest}
      className={cn(slots.actions(), className, classNames?.actions)}
      data-part="actions"
      data-scope="navbar"
    />
  );
}
NavbarActions.displayName = "Navbar.Actions";
// #endregion
