import {
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuRoot,
} from "./navigation-menu";

export const NavigationMenu = Object.assign(NavigationMenuRoot, {
  Item: NavigationMenuItem,
  Link: NavigationMenuLink,
  List: NavigationMenuList,
});
