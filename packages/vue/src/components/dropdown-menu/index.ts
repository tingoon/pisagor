export type {
  DropdownMenuItemGroupProps,
  DropdownMenuItemProps,
  DropdownMenuRadioItemGroupProps,
  DropdownMenuRootProps,
} from "./dropdown-menu";

import {
  DropdownMenuArrow,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuItemGroup,
  DropdownMenuItemGroupLabel,
  DropdownMenuPositioner,
  DropdownMenuQuickItem,
  DropdownMenuRadioItem,
  DropdownMenuRadioItemGroup,
  DropdownMenuRoot,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuTrigger,
  DropdownMenuTriggerItem,
  useDropdownMenuRoot,
} from "./dropdown-menu";

export { useDropdownMenuRoot };

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
  Separator: DropdownMenuSeparator,
  Shortcut: DropdownMenuShortcut,
  Sub: DropdownMenuSub,
  SubContent: DropdownMenuSubContent,
  Trigger: DropdownMenuTrigger,
  TriggerItem: DropdownMenuTriggerItem,
});
