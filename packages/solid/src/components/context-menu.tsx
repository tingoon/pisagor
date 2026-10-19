import {
  Menu as MenuPrimitive,
  type MenuContextTriggerProps,
} from "@ark-ui/solid";
import type {
  ContextMenuRootContract,
  DropdownMenuContract,
} from "@pisagor/contracts";
import { contextMenuRecipe, dropdownMenuRecipe } from "@pisagor/recipes";
import type { JSX } from "solid-js";
import { Show, splitProps } from "solid-js";
import { Portal } from "solid-js/web";
import type {
  DropdownMenuRootProps,
  DropdownMenuShortcutProps,
} from "./dropdown-menu";
import { DropdownMenu } from "./dropdown-menu";

// #region Types
export type ContextMenuRootProps = DropdownMenuRootProps;

export type ContextMenuContextTriggerProps = MenuContextTriggerProps &
  ContextMenuRootContract;

export interface ContextMenuProps
  extends ContextMenuRootProps, DropdownMenuContract {
  /** Menu items. */
  children?: JSX.Element;
  /** Area that opens the menu on right-click or long press. */
  trigger?: JSX.Element;
}
// #endregion

// #region Parts
function ContextTrigger(props: ContextMenuContextTriggerProps): JSX.Element {
  const [local, rest] = splitProps(props, ["recipe", "class"]);

  return (
    <MenuPrimitive.ContextTrigger
      {...rest}
      class={(local.recipe ?? contextMenuRecipe)({ class: local.class })}
    />
  );
}

function Shortcut(props: DropdownMenuShortcutProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);

  return (
    <span
      {...rest}
      class={dropdownMenuRecipe().shortcut({ class: local.class })}
      data-part="shortcut"
      data-scope="context-menu"
    />
  );
}
// #endregion

// #region Shorthand
export function ContextMenuShorthand(props: ContextMenuProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "children",
    "classNames",
    "trigger",
  ]);

  return (
    <DropdownMenu.Root {...rest}>
      <Show when={local.trigger !== undefined}>
        <ContextTrigger class={local.classNames?.trigger}>
          {local.trigger}
        </ContextTrigger>
      </Show>

      <Portal>
        <DropdownMenu.Positioner class={local.classNames?.positioner}>
          <DropdownMenu.Content class={local.classNames?.content}>
            {local.children}
          </DropdownMenu.Content>
        </DropdownMenu.Positioner>
      </Portal>
    </DropdownMenu.Root>
  );
}
// #endregion

export const ContextMenu = Object.assign(ContextMenuShorthand, {
  Arrow: DropdownMenu.Arrow,
  ArrowTip: DropdownMenu.ArrowTip,
  CheckboxItem: DropdownMenu.CheckboxItem,
  Content: DropdownMenu.Content,
  ContextTrigger,
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
  Shortcut,
  Sub: DropdownMenu.Sub,
  TriggerItem: DropdownMenu.TriggerItem,
});
