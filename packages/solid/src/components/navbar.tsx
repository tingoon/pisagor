import type { NavbarRootContract, NavbarContract } from "@pisagor/contracts";
import { navbarRecipe } from "@pisagor/recipes";
import type { Component, ComponentProps, JSX } from "solid-js";
import { splitProps } from "solid-js";
import { createSlotRecipeContext } from "../internal";
import { useLocale } from "./provider/context";

// #region Context
const { withContext, withProvider } = createSlotRecipeContext({
  name: "Navbar",
  recipe: navbarRecipe,
});
// #endregion

export type NavbarRootProps = ComponentProps<"header"> & NavbarRootContract;

export type NavbarProps = NavbarRootProps & NavbarContract;

export type NavbarPartProps = ComponentProps<"div">;
export type NavbarNavProps = ComponentProps<"nav">;

export const NavbarRoot: Component<NavbarRootProps> = withProvider<
  ComponentProps<"header"> & NavbarRootContract
>("header", { name: "Root" });

export const NavbarBrand: Component<NavbarPartProps> = withContext<
  ComponentProps<"div">
>("div", {
  name: "Brand",
});

export const NavbarContent: Component<NavbarPartProps> = withContext<
  ComponentProps<"div">
>("div", {
  name: "Content",
});

const NavbarNavBase: Component<NavbarNavProps> = withContext<
  ComponentProps<"nav">
>("nav", {
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

export const NavbarActions: Component<NavbarPartProps> = withContext<
  ComponentProps<"div">
>("div", {
  name: "Actions",
});

export const Navbar = Object.assign(NavbarRoot, {
  Actions: NavbarActions,
  Brand: NavbarBrand,
  Content: NavbarContent,
  Nav: NavbarNav,
  Root: NavbarRoot,
});
