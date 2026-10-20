import DropdownMenuShorthand from "./dropdown-menu.svelte";
import DropdownMenuArrow from "./dropdown-menu-arrow.svelte";
import DropdownMenuArrowTip from "./dropdown-menu-arrow-tip.svelte";
import DropdownMenuCheckboxItem from "./dropdown-menu-checkbox-item.svelte";
import DropdownMenuContent from "./dropdown-menu-content.svelte";
import DropdownMenuIndicator from "./dropdown-menu-indicator.svelte";
import DropdownMenuItem from "./dropdown-menu-item.svelte";
import DropdownMenuItemGroup from "./dropdown-menu-item-group.svelte";
import DropdownMenuItemGroupLabel from "./dropdown-menu-item-group-label.svelte";
import DropdownMenuItemIndicator from "./dropdown-menu-item-indicator.svelte";
import DropdownMenuItemText from "./dropdown-menu-item-text.svelte";
import DropdownMenuPositioner from "./dropdown-menu-positioner.svelte";
import DropdownMenuQuickItem from "./dropdown-menu-quick-item.svelte";
import DropdownMenuRadioItem from "./dropdown-menu-radio-item.svelte";
import DropdownMenuRadioItemGroup from "./dropdown-menu-radio-item-group.svelte";
import DropdownMenuRoot from "./dropdown-menu-root.svelte";
import DropdownMenuSeparator from "./dropdown-menu-separator.svelte";
import DropdownMenuShortcut from "./dropdown-menu-shortcut.svelte";
import DropdownMenuSub from "./dropdown-menu-sub.svelte";
import DropdownMenuTrigger from "./dropdown-menu-trigger.svelte";
import DropdownMenuTriggerItem from "./dropdown-menu-trigger-item.svelte";

export const DropdownMenu = Object.assign(DropdownMenuShorthand, {
  Arrow: DropdownMenuArrow,
  ArrowTip: DropdownMenuArrowTip,
  CheckboxItem: DropdownMenuCheckboxItem,
  Content: DropdownMenuContent,
  Indicator: DropdownMenuIndicator,
  Item: DropdownMenuItem,
  ItemGroup: DropdownMenuItemGroup,
  ItemGroupLabel: DropdownMenuItemGroupLabel,
  ItemIndicator: DropdownMenuItemIndicator,
  ItemText: DropdownMenuItemText,
  Positioner: DropdownMenuPositioner,
  QuickItem: DropdownMenuQuickItem,
  RadioItem: DropdownMenuRadioItem,
  RadioItemGroup: DropdownMenuRadioItemGroup,
  Root: DropdownMenuRoot,
  Separator: DropdownMenuSeparator,
  Shortcut: DropdownMenuShortcut,
  Sub: DropdownMenuSub,
  Trigger: DropdownMenuTrigger,
  TriggerItem: DropdownMenuTriggerItem,
});
