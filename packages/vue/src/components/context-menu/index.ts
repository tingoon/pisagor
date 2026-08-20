import {
  ContextMenuContent,
  ContextMenuContextTrigger,
  ContextMenuItem,
  ContextMenuItemGroup,
  ContextMenuRoot,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuTriggerItem,
} from "./context-menu";

export const ContextMenu = Object.assign(ContextMenuRoot, {
  Content: ContextMenuContent,
  ContextTrigger: ContextMenuContextTrigger,
  Item: ContextMenuItem,
  ItemGroup: ContextMenuItemGroup,
  Separator: ContextMenuSeparator,
  Shortcut: ContextMenuShortcut,
  Sub: ContextMenuSub,
  SubContent: ContextMenuSubContent,
  TriggerItem: ContextMenuTriggerItem,
});
