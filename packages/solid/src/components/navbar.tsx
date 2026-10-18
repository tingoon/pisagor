import { ark, type HTMLArkProps } from "@ark-ui/solid";
import type { NavbarProps as BaseNavbarRootProps } from "@pisagor/props";
import { navbarRecipe } from "@pisagor/recipes";
import type { Component, JSX } from "solid-js";
import { splitProps } from "solid-js";
import { createSlotRecipeContext } from "../internal";
import { useLocale } from "./provider/context";

// #region Context
const { withContext, withProvider } = createSlotRecipeContext({
  name: "Navbar",
  recipe: navbarRecipe,
});
// #endregion

export interface NavbarRootProps
  extends HTMLArkProps<"header">, BaseNavbarRootProps {}

export type NavbarPartProps = HTMLArkProps<"div">;
export type NavbarNavProps = HTMLArkProps<"nav">;

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
  const { m } = useLocale();
  const [local, rest] = splitProps(props, ["aria-label"]);

  return (
    <NavbarNavBase
      {...rest}
      aria-label={m("navbar.label", local["aria-label"])}
    />
  );
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
