import { Menu as MenuPrimitive, Portal } from "@ark-ui/react";
import type { MenuContextTriggerProps } from "@ark-ui/react";
import type {
  ContextMenuRootContract,
  DropdownMenuContract,
} from "@pisagor/contracts";
import { contextMenuRecipe, dropdownMenuRecipe } from "@pisagor/recipes";
import type { ReactNode } from "react";
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
  children?: ReactNode;
  /** Area that opens the menu on right-click or long press. */
  trigger?: ReactNode;
}
// #endregion

// #region Parts
function ContextTrigger({
  recipe = contextMenuRecipe,
  className,
  ...rest
}: ContextMenuContextTriggerProps) {
  return (
    <MenuPrimitive.ContextTrigger {...rest} className={recipe({ className })} />
  );
}

function Shortcut({ className, ...rest }: DropdownMenuShortcutProps) {
  return (
    <span
      {...rest}
      className={dropdownMenuRecipe().shortcut({ className })}
      data-part="shortcut"
      data-scope="context-menu"
    />
  );
}

ContextTrigger.displayName = "ContextMenu.ContextTrigger";
Shortcut.displayName = "ContextMenu.Shortcut";
// #endregion

// #region Shorthand
export function ContextMenuShorthand({
  children,
  classNames,
  trigger,
  ...rest
}: ContextMenuProps) {
  return (
    <DropdownMenu.Root {...rest}>
      {trigger !== undefined && (
        <ContextTrigger className={classNames?.trigger}>
          {trigger}
        </ContextTrigger>
      )}

      <Portal>
        <DropdownMenu.Positioner className={classNames?.positioner}>
          <DropdownMenu.Content className={classNames?.content}>
            {children}
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
