import { Menu as MenuPrimitive } from "@ark-ui/react/menu";
import { contextMenuTriggerVariants } from "@pisagor/styles/ui/context-menu";
import type { ComponentProps } from "react";
import type { WithTestId } from "../../internal/types";
import {
  DropdownMenu,
  type DropdownMenuContentProps,
  type DropdownMenuGroupProps,
  type DropdownMenuItemProps,
  type DropdownMenuRootProps,
  type DropdownMenuSeparatorProps,
  type DropdownMenuShortcutProps,
  type DropdownMenuSubTriggerProps,
} from "../dropdown-menu";
import { useDropdownMenuRoot } from "../dropdown-menu/dropdown-menu.context";

// #region Types
export interface ContextMenuRootProps extends DropdownMenuRootProps, WithTestId {}

export type ContextMenuTriggerProps = ComponentProps<typeof MenuPrimitive.ContextTrigger>;
// #endregion

// #region Parts
export function ContextMenuRoot({ testId, ...rest }: ContextMenuRootProps) {
  return <DropdownMenu {...rest} testId={testId} />;
}

export function ContextMenuTrigger({ className, ...rest }: ContextMenuTriggerProps) {
  const { testId } = useDropdownMenuRoot() ?? {};

  return (
    <MenuPrimitive.ContextTrigger
      {...rest}
      className={contextMenuTriggerVariants({ className })}
      data-testid={testId}
    />
  );
}

export function ContextMenuContent(props: DropdownMenuContentProps) {
  return <DropdownMenu.Content {...props} />;
}

export function ContextMenuGroup(props: DropdownMenuGroupProps) {
  return <DropdownMenu.Group {...props} />;
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

export function ContextMenuSubTrigger(props: DropdownMenuSubTriggerProps) {
  return <DropdownMenu.SubTrigger {...props} />;
}

export function ContextMenuShortcut(props: DropdownMenuShortcutProps) {
  return <DropdownMenu.Shortcut dataPart="shortcut" dataScope="context-menu" {...props} />;
}

ContextMenuRoot.displayName = "ContextMenu";
ContextMenuTrigger.displayName = "ContextMenu.Trigger";
ContextMenuContent.displayName = "ContextMenu.Content";
ContextMenuGroup.displayName = "ContextMenu.Group";
ContextMenuSeparator.displayName = "ContextMenu.Separator";
ContextMenuItem.displayName = "ContextMenu.Item";
ContextMenuSub.displayName = "ContextMenu.Sub";
ContextMenuSubContent.displayName = "ContextMenu.SubContent";
ContextMenuSubTrigger.displayName = "ContextMenu.SubTrigger";
ContextMenuShortcut.displayName = "ContextMenu.Shortcut";
// #endregion
