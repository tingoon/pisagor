import { DropdownMenu } from "../dropdown-menu";
import ContextMenuShorthand from "./context-menu.svelte";
import ContextMenuContextTrigger from "./context-menu-context-trigger.svelte";
import ContextMenuShortcut from "./context-menu-shortcut.svelte";

export const ContextMenu = Object.assign(ContextMenuShorthand, {
  Arrow: DropdownMenu.Arrow,
  ArrowTip: DropdownMenu.ArrowTip,
  CheckboxItem: DropdownMenu.CheckboxItem,
  Content: DropdownMenu.Content,
  ContextTrigger: ContextMenuContextTrigger,
  Indicator: DropdownMenu.Indicator,
  Item: DropdownMenu.Item,
  ItemGroup: DropdownMenu.ItemGroup,
  ItemGroupLabel: DropdownMenu.ItemGroupLabel,
  ItemIndicator: DropdownMenu.ItemIndicator,
  ItemText: DropdownMenu.ItemText,
  Positioner: DropdownMenu.Positioner,
  RadioItem: DropdownMenu.RadioItem,
  RadioItemGroup: DropdownMenu.RadioItemGroup,
  Root: DropdownMenu.Root,
  Separator: DropdownMenu.Separator,
  Shortcut: ContextMenuShortcut,
  Sub: DropdownMenu.Sub,
  TriggerItem: DropdownMenu.TriggerItem,
});
