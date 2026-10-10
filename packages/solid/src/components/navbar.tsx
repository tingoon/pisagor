import { ark } from "@ark-ui/solid/factory";
import type { NavbarProps as BaseNavbarRootProps } from "@pisagor/props";
import { navbarRecipe } from "@pisagor/recipes";
import type { Component, ComponentProps, JSX } from "solid-js";
import { splitProps } from "solid-js";
import { createSlotRecipeContext } from "../internal/create-slot-recipe-context";

// #region Context
const { withContext, withProvider } = createSlotRecipeContext({
  name: "Navbar",
  recipe: navbarRecipe,
});
// #endregion

export interface NavbarRootProps
  extends ComponentProps<typeof ark.header>,
    BaseNavbarRootProps {}

export type NavbarPartProps = ComponentProps<typeof ark.div>;
export type NavbarNavProps = ComponentProps<typeof ark.nav>;

export const NavbarRoot: Component<NavbarRootProps> = withProvider(ark.header, {
  name: "Root",
  slot: "base",
});

export const NavbarBrand: Component<NavbarPartProps> = withContext(ark.div, {
  name: "Brand",
});

export const NavbarContent: Component<NavbarPartProps> = withContext(ark.div, {
  name: "Content",
});

const NavbarNavBase: Component<NavbarNavProps> = withContext(ark.nav, {
  name: "Nav",
});

export function NavbarNav(props: NavbarNavProps): JSX.Element {
  const [local, rest] = splitProps(props, ["aria-label"]);

  return <NavbarNavBase {...rest} aria-label={local["aria-label"] ?? "Main"} />;
}

export const NavbarActions: Component<NavbarPartProps> = withContext(ark.div, {
  name: "Actions",
});

export const Navbar = Object.assign(NavbarRoot, {
  Actions: NavbarActions,
  Brand: NavbarBrand,
  Content: NavbarContent,
  Nav: NavbarNav,
  Root: NavbarRoot,
});
