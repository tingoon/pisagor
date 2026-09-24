import DropdownMenuArrow from "./dropdown-menu-arrow.svelte";
import DropdownMenuCheckboxItem from "./dropdown-menu-checkbox-item.svelte";
import DropdownMenuContent from "./dropdown-menu-content.svelte";
import DropdownMenuItem from "./dropdown-menu-item.svelte";
import DropdownMenuItemGroup from "./dropdown-menu-item-group.svelte";
import DropdownMenuItemGroupLabel from "./dropdown-menu-item-group-label.svelte";
import DropdownMenuPositioner from "./dropdown-menu-positioner.svelte";
import DropdownMenuQuickItem from "./dropdown-menu-quick-item.svelte";
import DropdownMenuRadioItem from "./dropdown-menu-radio-item.svelte";
import DropdownMenuRadioItemGroup from "./dropdown-menu-radio-item-group.svelte";
import DropdownMenuRoot from "./dropdown-menu-root.svelte";
import DropdownMenuSeparator from "./dropdown-menu-separator.svelte";
import DropdownMenuShortcut from "./dropdown-menu-shortcut.svelte";
import DropdownMenuSub from "./dropdown-menu-sub.svelte";
import DropdownMenuSubContent from "./dropdown-menu-sub-content.svelte";
import DropdownMenuTrigger from "./dropdown-menu-trigger.svelte";
import DropdownMenuTriggerItem from "./dropdown-menu-trigger-item.svelte";

export const DropdownMenu = Object.assign(DropdownMenuRoot, {
  Arrow: DropdownMenuArrow,
  CheckboxItem: DropdownMenuCheckboxItem,
  Content: DropdownMenuContent,
  Item: DropdownMenuItem,
  ItemGroup: DropdownMenuItemGroup,
  ItemGroupLabel: DropdownMenuItemGroupLabel,
  Positioner: DropdownMenuPositioner,
  QuickItem: DropdownMenuQuickItem,
  RadioItem: DropdownMenuRadioItem,
  RadioItemGroup: DropdownMenuRadioItemGroup,
  Root: DropdownMenuRoot,
  Separator: DropdownMenuSeparator,
  Shortcut: DropdownMenuShortcut,
  Sub: DropdownMenuSub,
  SubContent: DropdownMenuSubContent,
  Trigger: DropdownMenuTrigger,
  TriggerItem: DropdownMenuTriggerItem,
});
