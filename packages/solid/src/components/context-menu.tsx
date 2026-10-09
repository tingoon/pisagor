import {
  type MenuContextTriggerProps,
  Menu as MenuPrimitive,
} from "@ark-ui/solid/menu";
import type { ContextMenuProps as BaseContextMenuProps } from "@pisagor/props";
import { contextMenuRecipe } from "@pisagor/recipes";
import type { JSX } from "solid-js";
import { splitProps } from "solid-js";
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

export type ContextMenuRootProps = DropdownMenuRootProps;

export interface ContextMenuContextTriggerProps
  extends MenuContextTriggerProps,
    BaseContextMenuProps {}

export function ContextMenuRoot(props: ContextMenuRootProps): JSX.Element {
  return <DropdownMenu {...props} />;
}

export function ContextMenuContextTrigger(
  props: ContextMenuContextTriggerProps,
): JSX.Element {
  const [local, rest] = splitProps(props, ["recipe", "class"]);
  return (
    <MenuPrimitive.ContextTrigger
      {...rest}
      class={(local.recipe ?? contextMenuRecipe)({ class: local.class })}
    />
  );
}

export function ContextMenuContent(
  props: DropdownMenuContentProps,
): JSX.Element {
  return <DropdownMenu.Content {...props} />;
}

export function ContextMenuItemGroup(
  props: DropdownMenuItemGroupProps,
): JSX.Element {
  return <DropdownMenu.ItemGroup {...props} />;
}

export function ContextMenuSeparator(
  props: DropdownMenuSeparatorProps,
): JSX.Element {
  return <DropdownMenu.Separator {...props} />;
}

export function ContextMenuItem(props: DropdownMenuItemProps): JSX.Element {
  return <DropdownMenu.Item {...props} />;
}

export function ContextMenuSub(props: DropdownMenuRootProps): JSX.Element {
  return <DropdownMenu.Sub {...props} />;
}

export function ContextMenuSubContent(
  props: DropdownMenuContentProps,
): JSX.Element {
  return <DropdownMenu.SubContent {...props} />;
}

export function ContextMenuTriggerItem(
  props: DropdownMenuTriggerItemProps,
): JSX.Element {
  return <DropdownMenu.TriggerItem {...props} />;
}

export function ContextMenuShortcut(
  props: DropdownMenuShortcutProps,
): JSX.Element {
  return (
    <DropdownMenu.Shortcut
      {...props}
      data-part="shortcut"
      data-scope="context-menu"
    />
  );
}

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
