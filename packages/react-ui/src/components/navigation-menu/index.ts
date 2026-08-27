import {
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuRoot,
} from "./navigation-menu";

export type {
  NavigationMenuItemProps,
  NavigationMenuLinkProps,
  NavigationMenuPartProps,
  NavigationMenuProps,
} from "./navigation-menu";

export const NavigationMenu = Object.assign(NavigationMenuRoot, {
  Item: NavigationMenuItem,
  Link: NavigationMenuLink,
  List: NavigationMenuList,
});
