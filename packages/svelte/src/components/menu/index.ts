import MenuGroup from "./menu-group.svelte";
import MenuGroupLabel from "./menu-group-label.svelte";
import MenuItem from "./menu-item.svelte";
import MenuLink from "./menu-link.svelte";
import MenuList from "./menu-list.svelte";
import MenuRoot from "./menu-root.svelte";
import MenuSeparator from "./menu-separator.svelte";
import MenuShortcut from "./menu-shortcut.svelte";

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
