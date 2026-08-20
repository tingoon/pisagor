import { Menu as MenuPrimitive } from "@ark-ui/react/menu";
import { contextMenuTriggerVariants } from "@pisagor/styles/ui/context-menu";
import { cn } from "@pisagor/utils";
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
import { useDropdownMenuRoot } from "../dropdown-menu/dropdown-menu";

// #region Types
export interface ContextMenuRootProps extends DropdownMenuRootProps, WithTestId {}

export type ContextMenuTriggerProps = ComponentProps<typeof MenuPrimitive.ContextTrigger>;
// #endregion

// #region Parts
export function ContextMenuRoot({ testId, ...rest }: ContextMenuRootProps) {
  return <DropdownMenu {...rest} testId={testId} />;
}
ContextMenuRoot.displayName = "ContextMenu";

export function ContextMenuTrigger({ className, ...rest }: ContextMenuTriggerProps) {
  const { testId } = useDropdownMenuRoot() ?? {};

  return (
    <MenuPrimitive.ContextTrigger
      {...rest}
      className={cn(contextMenuTriggerVariants(), className)}
      data-testid={testId}
    />
  );
}
ContextMenuTrigger.displayName = "ContextMenu.Trigger";

export function ContextMenuContent(props: DropdownMenuContentProps) {
  return <DropdownMenu.Content {...props} />;
}
ContextMenuContent.displayName = "ContextMenu.Content";

export function ContextMenuGroup(props: DropdownMenuGroupProps) {
  return <DropdownMenu.Group {...props} />;
}
ContextMenuGroup.displayName = "ContextMenu.Group";

export function ContextMenuSeparator(props: DropdownMenuSeparatorProps) {
  return <DropdownMenu.Separator {...props} />;
}
ContextMenuSeparator.displayName = "ContextMenu.Separator";

export function ContextMenuItem(props: DropdownMenuItemProps) {
  return <DropdownMenu.Item {...props} />;
}
ContextMenuItem.displayName = "ContextMenu.Item";

export function ContextMenuSub(props: DropdownMenuRootProps) {
  return <DropdownMenu.Sub {...props} />;
}
ContextMenuSub.displayName = "ContextMenu.Sub";

export function ContextMenuSubContent(props: DropdownMenuContentProps) {
  return <DropdownMenu.SubContent {...props} />;
}
ContextMenuSubContent.displayName = "ContextMenu.SubContent";

export function ContextMenuSubTrigger(props: DropdownMenuSubTriggerProps) {
  return <DropdownMenu.SubTrigger {...props} />;
}
ContextMenuSubTrigger.displayName = "ContextMenu.SubTrigger";

export function ContextMenuShortcut(props: DropdownMenuShortcutProps) {
  return <DropdownMenu.Shortcut dataPart="shortcut" dataScope="context-menu" {...props} />;
}
ContextMenuShortcut.displayName = "ContextMenu.Shortcut";
// #endregion
