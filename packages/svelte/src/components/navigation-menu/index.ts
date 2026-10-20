import NavigationMenuContent from "./navigation-menu-content.svelte";
import NavigationMenuIndicator from "./navigation-menu-indicator.svelte";
import NavigationMenuItem from "./navigation-menu-item.svelte";
import NavigationMenuLink from "./navigation-menu-link.svelte";
import NavigationMenuList from "./navigation-menu-list.svelte";
import NavigationMenuRoot from "./navigation-menu-root.svelte";
import NavigationMenuTrigger from "./navigation-menu-trigger.svelte";

export const NavigationMenu = Object.assign(NavigationMenuRoot, {
  Content: NavigationMenuContent,
  Indicator: NavigationMenuIndicator,
  Item: NavigationMenuItem,
  Link: NavigationMenuLink,
  List: NavigationMenuList,
  Trigger: NavigationMenuTrigger,
});
