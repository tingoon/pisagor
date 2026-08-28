import { ark } from "@ark-ui/react/factory";
import { navbarVariants } from "@pisagor/recipes/navbar";
import type { ComponentProps } from "react";
import { NavbarContext, useNavbar } from "./navbar.context";

// #region Types
export type NavbarRootProps = ComponentProps<typeof ark.header>;

export type NavbarPartProps = ComponentProps<typeof ark.div>;

export type NavbarNavProps = ComponentProps<typeof ark.nav>;
// #endregion

// #region Parts
export function NavbarRoot({ children, className, ...rest }: NavbarRootProps) {
  const slots = navbarVariants();

  return (
    <NavbarContext value={{ slots }}>
      <ark.header
        {...rest}
        className={slots.base({ className })}
        data-part="root"
        data-scope="navbar"
      >
        {children}
      </ark.header>
    </NavbarContext>
  );
}

export function NavbarBrand({ className, ...rest }: NavbarPartProps) {
  const { slots } = useNavbar();

  return (
    <ark.div
      {...rest}
      className={slots.brand({ className })}
      data-part="brand"
      data-scope="navbar"
    />
  );
}

export function NavbarContent({ className, ...rest }: NavbarPartProps) {
  const { slots } = useNavbar();

  return (
    <ark.div
      {...rest}
      className={slots.content({ className })}
      data-part="content"
      data-scope="navbar"
    />
  );
}

export function NavbarNav({
  "aria-label": ariaLabel = "Main",
  className,
  ...rest
}: NavbarNavProps) {
  const { slots } = useNavbar();

  return (
    <ark.nav
      {...rest}
      aria-label={ariaLabel}
      className={slots.nav({ className })}
      data-part="nav"
      data-scope="navbar"
    />
  );
}

export function NavbarActions({ className, ...rest }: NavbarPartProps) {
  const { slots } = useNavbar();

  return (
    <ark.div
      {...rest}
      className={slots.actions({ className })}
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
