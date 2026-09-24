import NavbarActions from "./navbar-actions.svelte";
import NavbarBrand from "./navbar-brand.svelte";
import NavbarContent from "./navbar-content.svelte";
import NavbarNav from "./navbar-nav.svelte";
import NavbarRoot from "./navbar-root.svelte";

export const Navbar = Object.assign(NavbarRoot, {
  Actions: NavbarActions,
  Brand: NavbarBrand,
  Content: NavbarContent,
  Nav: NavbarNav,
  Root: NavbarRoot,
});
