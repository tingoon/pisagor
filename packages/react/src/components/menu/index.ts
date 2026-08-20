import {
  MenuGroup,
  MenuGroupLabel,
  MenuItem,
  MenuLink,
  MenuList,
  MenuRoot,
  MenuSeparator,
  MenuShortcut,
} from "./menu";

export type {
  MenuItemProps,
  MenuLinkProps,
  MenuListProps,
  MenuPartProps,
  MenuRootProps,
} from "./menu";

export const Menu = Object.assign(MenuRoot, {
  Group: MenuGroup,
  GroupLabel: MenuGroupLabel,
  Item: MenuItem,
  Link: MenuLink,
  List: MenuList,
  Root: MenuRoot,
  Separator: MenuSeparator,
  Shortcut: MenuShortcut,
});
