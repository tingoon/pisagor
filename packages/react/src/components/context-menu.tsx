import {
  type MenuContextTriggerProps,
  Menu as MenuPrimitive,
} from "@ark-ui/react/menu";
import type { ContextMenuProps as BaseContextMenuContextTriggerProps } from "@pisagor/props";
import { contextMenuRecipe } from "@pisagor/recipes";
import type {
  DropdownMenuContentProps,
  DropdownMenuItemGroupProps,
  DropdownMenuItemProps,
  DropdownMenuRootProps,
  DropdownMenuSeparatorProps,
  DropdownMenuShortcutProps,
  DropdownMenuTriggerItemProps,
} from "./dropdown-menu";
import { DropdownMenu } from "./dropdown-menu";

// #region Types
export type ContextMenuRootProps = DropdownMenuRootProps;

export interface ContextMenuContextTriggerProps
  extends MenuContextTriggerProps,
    BaseContextMenuContextTriggerProps {}
// #endregion

// #region Parts
export function ContextMenuRoot({ ...rest }: ContextMenuRootProps) {
  return <DropdownMenu {...rest} />;
}

export function ContextMenuContextTrigger({
  recipe = contextMenuRecipe,
  className,
  ...rest
}: ContextMenuContextTriggerProps) {
  return (
    <MenuPrimitive.ContextTrigger {...rest} className={recipe({ className })} />
  );
}

export function ContextMenuContent(props: DropdownMenuContentProps) {
  return <DropdownMenu.Content {...props} />;
}

export function ContextMenuItemGroup(props: DropdownMenuItemGroupProps) {
  return <DropdownMenu.ItemGroup {...props} />;
}

export function ContextMenuSeparator(props: DropdownMenuSeparatorProps) {
  return <DropdownMenu.Separator {...props} />;
}

export function ContextMenuItem(props: DropdownMenuItemProps) {
  return <DropdownMenu.Item {...props} />;
}

export function ContextMenuSub(props: DropdownMenuRootProps) {
  return <DropdownMenu.Sub {...props} />;
}

export function ContextMenuSubContent(props: DropdownMenuContentProps) {
  return <DropdownMenu.SubContent {...props} />;
}

export function ContextMenuTriggerItem(props: DropdownMenuTriggerItemProps) {
  return <DropdownMenu.TriggerItem {...props} />;
}

export function ContextMenuShortcut(props: DropdownMenuShortcutProps) {
  return (
    <DropdownMenu.Shortcut
      {...props}
      data-part="shortcut"
      data-scope="context-menu"
    />
  );
}
// #endregion

// #region Display Names
ContextMenuRoot.displayName = "ContextMenu";
ContextMenuContextTrigger.displayName = "ContextMenu.ContextTrigger";
ContextMenuContent.displayName = "ContextMenu.Content";
ContextMenuItemGroup.displayName = "ContextMenu.ItemGroup";
ContextMenuSeparator.displayName = "ContextMenu.Separator";
ContextMenuItem.displayName = "ContextMenu.Item";
ContextMenuSub.displayName = "ContextMenu.Sub";
ContextMenuSubContent.displayName = "ContextMenu.SubContent";
ContextMenuTriggerItem.displayName = "ContextMenu.TriggerItem";
ContextMenuShortcut.displayName = "ContextMenu.Shortcut";
// #endregion

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
