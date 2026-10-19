import type { NavbarContract, NavbarRootContract } from "@pisagor/contracts";
import { navbarRecipe } from "@pisagor/recipes";
import type { ComponentProps, ComponentPropsWithRef } from "react";
import { createSlotRecipeContext } from "../internal";
import { useLocale } from "./provider/context";

// #region Context
const { withContext, withProvider } = createSlotRecipeContext({
  name: "Navbar",
  recipe: navbarRecipe,
});
// #endregion

// #region Parts
export const NavbarRoot = withProvider("header")<NavbarRootContract>({
  name: "Root",
  slot: "base",
});

export const NavbarBrand = withContext("div", {
  name: "Brand",
});

export const NavbarContent = withContext("div", {
  name: "Content",
});

const NavbarNavBase = withContext("nav", {
  name: "Nav",
});

export function NavbarNav({
  "aria-label": ariaLabelProp,
  ...rest
}: ComponentPropsWithRef<"nav">) {
  const { m } = useLocale();
  const ariaLabel = m("navbar.label", ariaLabelProp);

  return <NavbarNavBase {...rest} aria-label={ariaLabel} />;
}

export const NavbarActions = withContext("div", {
  name: "Actions",
});
// #endregion

// #region Types
export type NavbarRootProps = ComponentProps<typeof NavbarRoot>;
export type NavbarPartProps = ComponentProps<typeof NavbarBrand>;
export type NavbarNavProps = ComponentPropsWithRef<"nav">;

export interface NavbarProps extends NavbarRootProps, NavbarContract {}
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
