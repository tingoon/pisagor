import { ark } from "@ark-ui/solid/factory";
import {
  type TabListProps,
  Tabs as TabsPrimitive,
  type TabsRootProps,
  type TabTriggerProps,
} from "@ark-ui/solid/tabs";
import {
  bottomNavigationItemRecipe,
  bottomNavigationRecipe,
} from "@pisagor/recipes/bottom-navigation";
import { cn } from "@pisagor/utils";
import type { ComponentProps, JSX } from "solid-js";
import { splitProps } from "solid-js";
import {
  BottomNavigationContext,
  BottomNavigationItemContext,
  useBottomNavigation,
  useBottomNavigationItem,
} from "./bottom-navigation.context";

export interface BottomNavigationRootProps extends TabsRootProps {
  recipe?: typeof bottomNavigationRecipe;
}

export type BottomNavigationProps = BottomNavigationRootProps;
export type BottomNavigationListProps = TabListProps;

export interface BottomNavigationItemProps extends TabTriggerProps {
  itemRecipe?: typeof bottomNavigationItemRecipe;
}

export type BottomNavigationItemIconProps = ComponentProps<typeof ark.span>;
export type BottomNavigationItemLabelProps = ComponentProps<typeof ark.span>;

export function BottomNavigationRoot(
  props: BottomNavigationRootProps,
): JSX.Element {
  const [local, rest] = splitProps(props, ["recipe", "class"]);
  const slots = () => (local.recipe ?? bottomNavigationRecipe)();

  return (
    <BottomNavigationContext value={{ slots: slots() }}>
      <TabsPrimitive.Root
        {...rest}
        class={slots().base({ class: cn(local.class) })}
      />
    </BottomNavigationContext>
  );
}

export function BottomNavigationList(
  props: BottomNavigationListProps,
): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useBottomNavigation();
  return (
    <TabsPrimitive.List
      {...rest}
      class={slots.list({ class: cn(local.class) })}
    />
  );
}

export function BottomNavigationItem(
  props: BottomNavigationItemProps,
): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "itemRecipe", "class"]);
  const slots = () => (local.itemRecipe ?? bottomNavigationItemRecipe)();

  return (
    <BottomNavigationItemContext value={{ slots: slots() }}>
      <TabsPrimitive.Trigger
        {...rest}
        class={slots().base({ class: cn(local.class) })}
      >
        {local.children}
      </TabsPrimitive.Trigger>
    </BottomNavigationItemContext>
  );
}

export function BottomNavigationItemIcon(
  props: BottomNavigationItemIconProps,
): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useBottomNavigationItem();
  return (
    <ark.span
      {...rest}
      aria-hidden
      class={slots.icon({ class: cn(local.class) })}
      data-part="item-icon"
      data-scope="bottom-navigation"
    />
  );
}

export function BottomNavigationItemLabel(
  props: BottomNavigationItemLabelProps,
): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useBottomNavigationItem();
  return (
    <ark.span
      {...rest}
      class={slots.label({ class: cn(local.class) })}
      data-part="item-label"
      data-scope="bottom-navigation"
    />
  );
}
