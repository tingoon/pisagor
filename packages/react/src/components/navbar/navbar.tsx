import { ark } from "@ark-ui/react/factory";
import { type NavbarSlots, navbarVariants } from "@pisagor/styles/ui/navbar";
import { cn } from "@pisagor/utils";
import type { ComponentProps } from "react";
import type { VariantClassNames } from "../../internal/types";

// #region Types
type NavbarClassNames = VariantClassNames<NavbarSlots>;

export interface NavbarRootProps extends ComponentProps<typeof ark.header> {
  /** Slot class names */
  classNames?: NavbarClassNames;
}

export interface NavbarPartProps extends ComponentProps<typeof ark.div> {
  /** Slot class names */
  classNames?: NavbarClassNames;
}

export interface NavbarNavProps extends ComponentProps<typeof ark.nav> {
  /** Slot class names */
  classNames?: NavbarClassNames;
}
// #endregion

// #region Parts
export function NavbarRoot({ className, classNames, ...rest }: NavbarRootProps) {
  const slots = navbarVariants();

  return (
    <ark.header
      {...rest}
      className={slots.base({ className: className })}
      data-part="root"
      data-scope="navbar"
    />
  );
}

export function NavbarBrand({ className, classNames, ...rest }: NavbarPartProps) {
  const slots = navbarVariants();

  return (
    <ark.div
      {...rest}
      className={slots.brand({ className: cn(className, classNames?.brand) })}
      data-part="brand"
      data-scope="navbar"
    />
  );
}

export function NavbarContent({ className, classNames, ...rest }: NavbarPartProps) {
  const slots = navbarVariants();

  return (
    <ark.div
      {...rest}
      className={slots.content({ className: cn(className, classNames?.content) })}
      data-part="content"
      data-scope="navbar"
    />
  );
}

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
      className={slots.nav({ className: cn(className, classNames?.nav) })}
      data-part="nav"
      data-scope="navbar"
    />
  );
}

export function NavbarActions({ className, classNames, ...rest }: NavbarPartProps) {
  const slots = navbarVariants();

  return (
    <ark.div
      {...rest}
      className={slots.actions({ className: cn(className, classNames?.actions) })}
      data-part="actions"
      data-scope="navbar"
    />
  );
}
// #endregion

// #region Display Names
NavbarRoot.displayName = "Navbar";
NavbarBrand.displayName = "Navbar.Brand";
NavbarContent.displayName = "Navbar.Content";
NavbarNav.displayName = "Navbar.Nav";
NavbarActions.displayName = "Navbar.Actions";
// #endregion
