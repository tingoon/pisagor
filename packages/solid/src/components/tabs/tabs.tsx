import type {
  TabContentProps,
  TabListProps,
  TabsRootProps as TabsPrimitiveRootProps,
  TabTriggerProps,
} from "@ark-ui/solid/tabs";
import { Tabs as TabsPrimitive } from "@ark-ui/solid/tabs";
import { type TabsVariantProps, tabsRecipe } from "@pisagor/recipes/tabs";
import { cn } from "@pisagor/utils";
import type { JSX } from "solid-js";
import { For, splitProps } from "solid-js";
import { TabsContext, useTabs } from "./tabs.context";

export interface TabsRootProps extends TabsPrimitiveRootProps {
  recipe?: typeof tabsRecipe;
}

interface TabsPresetItem {
  value: string;
  label: JSX.Element;
  content: JSX.Element;
  disabled?: boolean;
}

export type TabsListProps = TabListProps & Pick<TabsVariantProps, "variant">;
export type TabsTriggerProps = TabTriggerProps;
export type TabsContentProps = TabContentProps;

export interface TabsProps
  extends Omit<TabsRootProps, "children">,
    Pick<TabsVariantProps, "variant"> {
  items?: TabsPresetItem[];
}

export function TabsRoot(props: TabsRootProps): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "recipe", "class"]);
  const slots = () => (local.recipe ?? tabsRecipe)();

  return (
    <TabsContext value={{ slots: slots() }}>
      <TabsPrimitive.Root {...rest} class={slots().base({ class: cn(local.class) })}>
        {local.children}
      </TabsPrimitive.Root>
    </TabsContext>
  );
}

export function TabsList(props: TabsListProps): JSX.Element {
  const [local, rest] = splitProps(props, ["variant", "children", "class"]);
  const { slots } = useTabs();
  const variant = () => local.variant ?? "default";

  return (
    <TabsPrimitive.List
      {...rest}
      class={slots.list({ class: cn(local.class), variant: variant() })}
    >
      {local.children}
      <TabsPrimitive.Indicator class={slots.indicator({ variant: variant() })} />
    </TabsPrimitive.List>
  );
}

export function TabsTrigger(props: TabsTriggerProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useTabs();
  return <TabsPrimitive.Trigger {...rest} class={slots.trigger({ class: cn(local.class) })} />;
}

export function TabsContent(props: TabsContentProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useTabs();
  return <TabsPrimitive.Content {...rest} class={slots.content({ class: cn(local.class) })} />;
}

export function TabsShorthand(props: TabsProps): JSX.Element {
  const [local, rest] = splitProps(props, ["variant", "items"]);

  return (
    <TabsRoot {...rest}>
      <TabsList variant={local.variant}>
        <For each={local.items}>
          {(tab) => (
            <TabsTrigger disabled={tab.disabled} value={tab.value}>
              {tab.label}
            </TabsTrigger>
          )}
        </For>
      </TabsList>
      <For each={local.items}>
        {(tab) => <TabsContent value={tab.value}>{tab.content}</TabsContent>}
      </For>
    </TabsRoot>
  );
}
