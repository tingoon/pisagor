import { ark } from "@ark-ui/react/factory";
import type { NavbarProps as BaseNavbarRootProps } from "@pisagor/props";
import { navbarRecipe } from "@pisagor/recipes";
import type { ComponentProps, FunctionComponent } from "react";
import { createSlotRecipeContext } from "../internal/create-slot-recipe-context";

// #region Context
const { withContext, withProvider } = createSlotRecipeContext({
  name: "Navbar",
  recipe: navbarRecipe,
});
// #endregion

// #region Parts
export const NavbarRoot = withProvider(ark.header, {
  name: "Root",
  slot: "base",
}) as FunctionComponent<
  ComponentProps<typeof ark.header> & BaseNavbarRootProps
>;

export const NavbarBrand = withContext(ark.div, {
  name: "Brand",
});

export const NavbarContent = withContext(ark.div, {
  name: "Content",
});

const NavbarNavBase = withContext(ark.nav, {
  name: "Nav",
});

export function NavbarNav({
  "aria-label": ariaLabel = "Main",
  ...rest
}: ComponentProps<typeof ark.nav>) {
  return <NavbarNavBase {...rest} aria-label={ariaLabel} />;
}

export const NavbarActions = withContext(ark.div, {
  name: "Actions",
});
// #endregion

// #region Types
export type NavbarRootProps = ComponentProps<typeof NavbarRoot>;
export type NavbarPartProps = ComponentProps<typeof NavbarBrand>;
export type NavbarNavProps = ComponentProps<typeof ark.nav>;
// #endregion

// #region Display Names
NavbarNav.displayName = "Navbar.Nav";
// #endregion

export const Navbar = Object.assign(NavbarRoot, {
  Actions: NavbarActions,
  Brand: NavbarBrand,
  Content: NavbarContent,
  Nav: NavbarNav,
  Root: NavbarRoot,
});
