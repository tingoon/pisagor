import { ark } from "@ark-ui/solid/factory";
import { navbarRecipe } from "@pisagor/recipes/navbar";
import { cn } from "@pisagor/utils";
import type { ComponentProps, JSX } from "solid-js";
import { splitProps } from "solid-js";
import { NavbarContext, useNavbar } from "./navbar.context";

export interface NavbarRootProps extends ComponentProps<typeof ark.header> {
  recipe?: typeof navbarRecipe;
}

export type NavbarPartProps = ComponentProps<typeof ark.div>;
export type NavbarNavProps = ComponentProps<typeof ark.nav>;

export function NavbarRoot(props: NavbarRootProps): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "recipe", "class"]);
  const slots = () => (local.recipe ?? navbarRecipe)();

  return (
    <NavbarContext value={{ slots: slots() }}>
      <ark.header
        {...rest}
        class={slots().base({ class: cn(local.class) })}
        data-part="root"
        data-scope="navbar"
      >
        {local.children}
      </ark.header>
    </NavbarContext>
  );
}

export function NavbarBrand(props: NavbarPartProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useNavbar();
  return (
    <ark.div
      {...rest}
      class={slots.brand({ class: cn(local.class) })}
      data-part="brand"
      data-scope="navbar"
    />
  );
}

export function NavbarContent(props: NavbarPartProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useNavbar();
  return (
    <ark.div
      {...rest}
      class={slots.content({ class: cn(local.class) })}
      data-part="content"
      data-scope="navbar"
    />
  );
}

export function NavbarNav(props: NavbarNavProps): JSX.Element {
  const [local, rest] = splitProps(props, ["aria-label", "class"]);
  const { slots } = useNavbar();
  return (
    <ark.nav
      {...rest}
      aria-label={local["aria-label"] ?? "Main"}
      class={slots.nav({ class: cn(local.class) })}
      data-part="nav"
      data-scope="navbar"
    />
  );
}

export function NavbarActions(props: NavbarPartProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useNavbar();
  return (
    <ark.div
      {...rest}
      class={slots.actions({ class: cn(local.class) })}
      data-part="actions"
      data-scope="navbar"
    />
  );
}
