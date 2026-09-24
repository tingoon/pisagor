import { ark } from "@ark-ui/solid/factory";
import { navigationMenuRecipe } from "@pisagor/recipes/navigation-menu";
import { cn } from "@pisagor/utils";
import type { ComponentProps, JSX } from "solid-js";
import { splitProps } from "solid-js";
import { NavigationMenuContext, useNavigationMenu } from "./navigation-menu.context";

export interface NavigationMenuProps extends ComponentProps<typeof ark.nav> {
  recipe?: typeof navigationMenuRecipe;
}

export type NavigationMenuPartProps = ComponentProps<typeof ark.ul>;
export type NavigationMenuItemProps = ComponentProps<typeof ark.li>;

export interface NavigationMenuLinkProps extends ComponentProps<typeof ark.a> {
  active?: boolean;
}

export function NavigationMenuRoot(props: NavigationMenuProps): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "recipe", "class"]);
  const slots = () => (local.recipe ?? navigationMenuRecipe)();

  return (
    <NavigationMenuContext value={{ slots: slots() }}>
      <ark.nav
        {...rest}
        class={slots().base({ class: cn(local.class) })}
        data-part="root"
        data-scope="navigation-menu"
      >
        {local.children}
      </ark.nav>
    </NavigationMenuContext>
  );
}

export function NavigationMenuList(props: NavigationMenuPartProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useNavigationMenu();
  return (
    <ark.ul
      {...rest}
      class={slots.list({ class: cn(local.class) })}
      data-part="list"
      data-scope="navigation-menu"
    />
  );
}

export function NavigationMenuItem(props: NavigationMenuItemProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useNavigationMenu();
  return (
    <ark.li
      {...rest}
      class={slots.item({ class: cn(local.class) })}
      data-part="item"
      data-scope="navigation-menu"
    />
  );
}

export function NavigationMenuLink(props: NavigationMenuLinkProps): JSX.Element {
  const [local, rest] = splitProps(props, ["active", "class"]);
  const { slots } = useNavigationMenu();
  const active = () => local.active ?? false;

  return (
    <ark.a
      {...rest}
      aria-current={active() ? "page" : undefined}
      class={slots.link({ class: cn(local.class) })}
      data-active={active()}
      data-part="link"
      data-scope="navigation-menu"
    />
  );
}
