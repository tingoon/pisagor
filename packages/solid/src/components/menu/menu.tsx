import { ark } from "@ark-ui/solid/factory";
import { type MenuItemVariantProps, menuItemRecipe, menuRecipe } from "@pisagor/recipes/menu";
import { cn } from "@pisagor/utils";
import type { ComponentProps, JSX } from "solid-js";
import { splitProps } from "solid-js";
import { MenuContext, useMenu } from "./menu.context";

export interface MenuRootProps extends ComponentProps<typeof ark.nav> {
  recipe?: typeof menuRecipe;
}

export type MenuPartProps = ComponentProps<typeof ark.div>;
export type MenuListProps = ComponentProps<typeof ark.ul>;

export interface MenuItemProps extends ComponentProps<typeof ark.button>, MenuItemVariantProps {
  recipe?: typeof menuItemRecipe;
}

export interface MenuLinkProps extends ComponentProps<typeof ark.a> {
  active?: boolean;
}

export type MenuGroupLabelProps = ComponentProps<typeof ark.div>;
export type MenuSeparatorProps = ComponentProps<typeof ark.div>;
export type MenuShortcutProps = ComponentProps<typeof ark.span>;

export function MenuRoot(props: MenuRootProps): JSX.Element {
  const [local, rest] = splitProps(props, ["aria-label", "children", "recipe", "class"]);
  const slots = () => (local.recipe ?? menuRecipe)();

  return (
    <MenuContext value={{ slots: slots() }}>
      <ark.nav
        {...rest}
        aria-label={local["aria-label"] ?? "Menu"}
        class={slots().base({ class: cn(local.class) })}
        data-part="root"
        data-scope="menu"
      >
        {local.children}
      </ark.nav>
    </MenuContext>
  );
}

export function MenuList(props: MenuListProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useMenu();
  return (
    <ark.ul
      {...rest}
      class={slots.list({ class: cn(local.class) })}
      data-part="list"
      data-scope="menu"
      role="list"
    />
  );
}

export function MenuGroup(props: MenuPartProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useMenu();
  return (
    <ark.div
      {...rest}
      class={slots.group({ class: cn(local.class) })}
      data-part="group"
      data-scope="menu"
      role="group"
    />
  );
}

export function MenuGroupLabel(props: MenuGroupLabelProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useMenu();
  return (
    <ark.div
      {...rest}
      class={slots.groupLabel({ class: cn(local.class) })}
      data-part="group-label"
      data-scope="menu"
    />
  );
}

export function MenuItem(props: MenuItemProps): JSX.Element {
  const [local, rest] = splitProps(props, ["variant", "type", "recipe", "class"]);
  const { slots } = useMenu();
  const variant = () => local.variant ?? "default";
  const recipe = () => local.recipe ?? menuItemRecipe;

  return (
    <ark.li class={slots.wrapper()} data-part="item-wrapper" data-scope="menu" role="none">
      <ark.button
        {...rest}
        class={cn(recipe()({ variant: variant() }), local.class)}
        data-part="item"
        data-scope="menu"
        data-variant={variant()}
        type={local.type ?? "button"}
      />
    </ark.li>
  );
}

export function MenuLink(props: MenuLinkProps): JSX.Element {
  const [local, rest] = splitProps(props, ["active", "class"]);
  const { slots } = useMenu();
  const active = () => local.active ?? false;

  return (
    <ark.li class={slots.wrapper()} data-part="item-wrapper" data-scope="menu" role="none">
      <ark.a
        {...rest}
        aria-current={active() ? "page" : undefined}
        class={slots.link({ class: cn(local.class) })}
        data-active={active()}
        data-part="link"
        data-scope="menu"
      />
    </ark.li>
  );
}

export function MenuSeparator(props: MenuSeparatorProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useMenu();
  return (
    <ark.div
      {...rest}
      aria-hidden
      class={slots.separator({ class: cn(local.class) })}
      data-part="separator"
      data-scope="menu"
      role="separator"
    />
  );
}

export function MenuShortcut(props: MenuShortcutProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useMenu();
  return (
    <ark.span
      {...rest}
      class={slots.shortcut({ class: cn(local.class) })}
      data-part="shortcut"
      data-scope="menu"
    />
  );
}
