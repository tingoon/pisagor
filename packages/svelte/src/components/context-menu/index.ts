import { DropdownMenu } from "../dropdown-menu";
import ContextMenuContent from "./context-menu-content.svelte";
import ContextMenuContextTrigger from "./context-menu-context-trigger.svelte";
import ContextMenuItem from "./context-menu-item.svelte";
import ContextMenuItemGroup from "./context-menu-item-group.svelte";
import ContextMenuRoot from "./context-menu-root.svelte";
import ContextMenuSeparator from "./context-menu-separator.svelte";
import ContextMenuShortcut from "./context-menu-shortcut.svelte";
import ContextMenuSub from "./context-menu-sub.svelte";
import ContextMenuSubContent from "./context-menu-sub-content.svelte";
import ContextMenuTriggerItem from "./context-menu-trigger-item.svelte";

export const ContextMenu = Object.assign(ContextMenuRoot, {
  Arrow: DropdownMenu.Arrow,
  CheckboxItem: DropdownMenu.CheckboxItem,
  Content: ContextMenuContent,
  ContextTrigger: ContextMenuContextTrigger,
  Item: ContextMenuItem,
  ItemGroup: ContextMenuItemGroup,
  ItemGroupLabel: DropdownMenu.ItemGroupLabel,
  ItemIndicator: DropdownMenu.ItemIndicator,
  ItemText: DropdownMenu.ItemText,
  Positioner: DropdownMenu.Positioner,
  RadioItem: DropdownMenu.RadioItem,
  RadioItemGroup: DropdownMenu.RadioItemGroup,
  Root: ContextMenuRoot,
  Separator: ContextMenuSeparator,
  Shortcut: ContextMenuShortcut,
  Sub: ContextMenuSub,
  SubContent: ContextMenuSubContent,
  TriggerItem: ContextMenuTriggerItem,
});
