import { ark } from "@ark-ui/solid/factory";
import type {
  MenuArrowProps,
  MenuCheckboxItemProps,
  MenuContentProps,
  MenuItemGroupLabelProps,
  MenuItemGroupProps,
  MenuItemProps,
  MenuPositionerProps,
  MenuRadioItemGroupProps,
  MenuRadioItemProps,
  MenuRootProps,
  MenuSeparatorProps,
  MenuTriggerItemProps,
  MenuTriggerProps,
} from "@ark-ui/solid/menu";
import { Menu as MenuPrimitive } from "@ark-ui/solid/menu";
import {
  type DropdownMenuItemVariantProps,
  dropdownMenuItemRecipe,
  dropdownMenuRecipe,
} from "@pisagor/recipes/dropdown-menu";
import type { ComponentProps, JSX } from "solid-js";
import { Show, splitProps } from "solid-js";
import { Portal } from "solid-js/web";
import { CaretRightIcon, CheckIcon } from "../../internal/icons";
import { DropdownMenuContext, useDropdownMenu } from "./dropdown-menu.context";

export interface DropdownMenuItemGroupProps extends MenuItemGroupProps {
  heading?: string;
}

export interface DropdownMenuItemProps
  extends MenuItemProps,
    DropdownMenuItemVariantProps {
  recipe?: typeof dropdownMenuItemRecipe;
}

export interface DropdownMenuRadioItemGroupProps
  extends MenuRadioItemGroupProps {
  heading?: string;
}

export type DropdownMenuRootProps = MenuRootProps;
export type DropdownMenuTriggerProps = MenuTriggerProps;
export type DropdownMenuPositionerProps = MenuPositionerProps;

export interface DropdownMenuCheckboxItemProps extends MenuCheckboxItemProps {
  recipe?: typeof dropdownMenuItemRecipe;
}

export type DropdownMenuItemGroupLabelProps = MenuItemGroupLabelProps;

export interface DropdownMenuRadioItemProps extends MenuRadioItemProps {
  recipe?: typeof dropdownMenuItemRecipe;
}

export interface DropdownMenuSubContentProps extends MenuContentProps {
  recipe?: typeof dropdownMenuRecipe;
}

export type DropdownMenuArrowProps = MenuArrowProps;
export type DropdownMenuSeparatorProps = MenuSeparatorProps;

export interface DropdownMenuTriggerItemProps extends MenuTriggerItemProps {
  recipe?: typeof dropdownMenuItemRecipe;
}

export interface DropdownMenuContentProps extends MenuContentProps {
  recipe?: typeof dropdownMenuRecipe;
}

export type DropdownMenuShortcutProps = ComponentProps<typeof ark.span>;

export function DropdownMenuRoot(props: DropdownMenuRootProps): JSX.Element {
  const [local, rest] = splitProps(props, ["positioning"]);
  return (
    <MenuPrimitive.Root
      {...rest}
      positioning={local.positioning ?? { placement: "bottom-end" }}
    />
  );
}

export function DropdownMenuTrigger(
  props: DropdownMenuTriggerProps,
): JSX.Element {
  return <MenuPrimitive.Trigger {...props} />;
}

export function DropdownMenuPositioner(
  props: DropdownMenuPositionerProps,
): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const context = useDropdownMenu();
  const slots = () => context?.slots ?? dropdownMenuRecipe();
  return (
    <MenuPrimitive.Positioner
      {...rest}
      class={slots().positioner({ class: local.class })}
    />
  );
}

export function DropdownMenuContent(
  props: DropdownMenuContentProps,
): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "recipe", "class"]);
  const slots = () => (local.recipe ?? dropdownMenuRecipe)();

  return (
    <DropdownMenuContext value={{ slots: slots() }}>
      <Portal>
        <DropdownMenuPositioner>
          <MenuPrimitive.Content
            {...rest}
            class={slots().content({ class: local.class })}
          >
            {local.children}
          </MenuPrimitive.Content>
        </DropdownMenuPositioner>
      </Portal>
    </DropdownMenuContext>
  );
}

export function DropdownMenuItemGroup(
  props: DropdownMenuItemGroupProps,
): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "heading"]);
  return (
    <MenuPrimitive.ItemGroup {...rest}>
      <Show when={!!local.heading}>
        <DropdownMenuItemGroupLabel>{local.heading}</DropdownMenuItemGroupLabel>
      </Show>
      {local.children}
    </MenuPrimitive.ItemGroup>
  );
}

export function DropdownMenuSeparator(
  props: DropdownMenuSeparatorProps,
): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const context = useDropdownMenu();
  const slots = () => context?.slots ?? dropdownMenuRecipe();
  return (
    <MenuPrimitive.Separator
      {...rest}
      class={slots().separator({ class: local.class })}
    />
  );
}

export function DropdownMenuItem(props: DropdownMenuItemProps): JSX.Element {
  const [local, rest] = splitProps(props, ["variant", "recipe", "class"]);
  const variant = () => local.variant ?? "default";
  const recipe = () => local.recipe ?? dropdownMenuItemRecipe;
  return (
    <MenuPrimitive.Item
      {...rest}
      class={recipe()({ variant: variant() }).base({ class: local.class })}
      data-variant={variant()}
    />
  );
}

export function DropdownMenuQuickItem(
  props: DropdownMenuItemProps,
): JSX.Element {
  const [local, rest] = splitProps(props, ["variant", "recipe", "class"]);
  const context = useDropdownMenu();
  const slots = () => context?.slots ?? dropdownMenuRecipe();
  const variant = () => local.variant ?? "default";
  const recipe = () => local.recipe ?? dropdownMenuItemRecipe;

  return (
    <MenuPrimitive.Item
      {...rest}
      class={recipe()({ variant: variant() }).base({
        class: slots().quickItem({ class: local.class }),
      })}
    />
  );
}

export function DropdownMenuCheckboxItem(
  props: DropdownMenuCheckboxItemProps,
): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "recipe", "class"]);
  const slots = () =>
    (local.recipe ?? dropdownMenuItemRecipe)({
      inset: true,
      variant: "default",
    });

  return (
    <MenuPrimitive.CheckboxItem
      {...rest}
      class={slots().base({ class: local.class })}
    >
      <MenuPrimitive.ItemIndicator class={slots().indicator()}>
        <CheckIcon />
      </MenuPrimitive.ItemIndicator>
      <MenuPrimitive.ItemText class={slots().text()}>
        {local.children}
      </MenuPrimitive.ItemText>
    </MenuPrimitive.CheckboxItem>
  );
}

export function DropdownMenuRadioItemGroup(
  props: DropdownMenuRadioItemGroupProps,
): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "heading"]);
  return (
    <MenuPrimitive.RadioItemGroup {...rest}>
      <Show when={!!local.heading}>
        <DropdownMenuItemGroupLabel>{local.heading}</DropdownMenuItemGroupLabel>
      </Show>
      {local.children}
    </MenuPrimitive.RadioItemGroup>
  );
}

export function DropdownMenuItemGroupLabel(
  props: DropdownMenuItemGroupLabelProps,
): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const context = useDropdownMenu();
  const slots = () => context?.slots ?? dropdownMenuRecipe();
  return (
    <MenuPrimitive.ItemGroupLabel
      {...rest}
      class={slots().itemGroupLabel({ class: local.class })}
    />
  );
}

export function DropdownMenuRadioItem(
  props: DropdownMenuRadioItemProps,
): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "recipe", "class"]);
  const slots = () =>
    (local.recipe ?? dropdownMenuItemRecipe)({
      inset: true,
      variant: "default",
    });

  return (
    <MenuPrimitive.RadioItem
      {...rest}
      class={slots().base({ class: local.class })}
    >
      <MenuPrimitive.ItemIndicator class={slots().indicator()}>
        <CheckIcon />
      </MenuPrimitive.ItemIndicator>
      <MenuPrimitive.ItemText class={slots().text()}>
        {local.children}
      </MenuPrimitive.ItemText>
    </MenuPrimitive.RadioItem>
  );
}

export function DropdownMenuSub(props: DropdownMenuRootProps): JSX.Element {
  return <DropdownMenuRoot {...props} />;
}

export function DropdownMenuSubContent(
  props: DropdownMenuSubContentProps,
): JSX.Element {
  const [local, rest] = splitProps(props, ["recipe", "class"]);
  const slots = () => (local.recipe ?? dropdownMenuRecipe)();

  return (
    <DropdownMenuContext value={{ slots: slots() }}>
      <Portal>
        <DropdownMenuPositioner>
          <MenuPrimitive.Content
            {...rest}
            class={slots().content({ class: local.class })}
          />
        </DropdownMenuPositioner>
      </Portal>
    </DropdownMenuContext>
  );
}

export function DropdownMenuTriggerItem(
  props: DropdownMenuTriggerItemProps,
): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "recipe", "class"]);
  const recipe = () => local.recipe ?? dropdownMenuItemRecipe;

  return (
    <MenuPrimitive.TriggerItem
      {...rest}
      class={recipe()({ variant: "default" }).base({ class: local.class })}
    >
      {local.children}
      <DropdownMenuShortcut>
        <CaretRightIcon />
      </DropdownMenuShortcut>
    </MenuPrimitive.TriggerItem>
  );
}

export function DropdownMenuShortcut(
  props: DropdownMenuShortcutProps,
): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const context = useDropdownMenu();
  const slots = () => context?.slots ?? dropdownMenuRecipe();
  return (
    <ark.span
      {...rest}
      class={slots().shortcut({ class: local.class })}
      data-part="shortcut"
      data-scope="dropdown-menu"
    />
  );
}

export function DropdownMenuArrow(props: DropdownMenuArrowProps): JSX.Element {
  const [local, rest] = splitProps(props, ["style"]);
  const context = useDropdownMenu();
  const slots = () => context?.slots ?? dropdownMenuRecipe();

  return (
    <MenuPrimitive.Arrow
      {...rest}
      style={{
        "--arrow-background": "var(--popover)",
        "--arrow-size": "calc(1.5 * var(--spacing))",
        ...(typeof local.style === "object" && local.style !== null
          ? local.style
          : {}),
        left: "20px",
      }}
    >
      <MenuPrimitive.ArrowTip class={slots().arrowTip()} />
    </MenuPrimitive.Arrow>
  );
}
