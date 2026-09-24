import BottomNavigationItem from "./bottom-navigation-item.svelte";
import BottomNavigationItemIcon from "./bottom-navigation-item-icon.svelte";
import BottomNavigationItemLabel from "./bottom-navigation-item-label.svelte";
import BottomNavigationList from "./bottom-navigation-list.svelte";
import BottomNavigationRoot from "./bottom-navigation-root.svelte";

export const BottomNavigation = Object.assign(BottomNavigationRoot, {
  Item: BottomNavigationItem,
  ItemIcon: BottomNavigationItemIcon,
  ItemLabel: BottomNavigationItemLabel,
  List: BottomNavigationList,
});
