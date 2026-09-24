import NavigationMenuItem from "./navigation-menu-item.svelte";
import NavigationMenuLink from "./navigation-menu-link.svelte";
import NavigationMenuList from "./navigation-menu-list.svelte";
import NavigationMenuRoot from "./navigation-menu-root.svelte";

export const NavigationMenu = Object.assign(NavigationMenuRoot, {
  Item: NavigationMenuItem,
  Link: NavigationMenuLink,
  List: NavigationMenuList,
});
