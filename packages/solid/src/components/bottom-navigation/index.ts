import {
  BottomNavigationItem,
  BottomNavigationItemIcon,
  BottomNavigationItemLabel,
  BottomNavigationList,
  BottomNavigationRoot,
} from "./bottom-navigation";

export type {
  BottomNavigationItemIconProps,
  BottomNavigationItemLabelProps,
  BottomNavigationItemProps,
  BottomNavigationListProps,
  BottomNavigationProps,
  BottomNavigationRootProps,
} from "./bottom-navigation";

export const BottomNavigation = Object.assign(BottomNavigationRoot, {
  Item: BottomNavigationItem,
  ItemIcon: BottomNavigationItemIcon,
  ItemLabel: BottomNavigationItemLabel,
  List: BottomNavigationList,
});
