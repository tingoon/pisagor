import { NavbarActions, NavbarBrand, NavbarContent, NavbarNav, NavbarRoot } from "./navbar";

export type { NavbarNavProps, NavbarPartProps, NavbarRootProps } from "./navbar";

export const Navbar = Object.assign(NavbarRoot, {
  Actions: NavbarActions,
  Brand: NavbarBrand,
  Content: NavbarContent,
  Nav: NavbarNav,
  Root: NavbarRoot,
});
