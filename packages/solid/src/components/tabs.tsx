import type {
  TabContentProps,
  TabListProps,
  TabsRootProps as TabsPrimitiveRootProps,
  TabTriggerProps,
} from "@ark-ui/solid/tabs";
import { Tabs as TabsPrimitive } from "@ark-ui/solid/tabs";
import type { TabsProps as BaseTabsRootProps } from "@pisagor/props";
import { type TabsVariantProps, tabsRecipe } from "@pisagor/recipes";
import type { Component, JSX } from "solid-js";
import { For, splitProps } from "solid-js";
import { createSlotRecipeContext } from "../internal/create-slot-recipe-context";

// #region Context
const {
  useStyles: useTabs,
  withContext,
  withProvider,
} = createSlotRecipeContext({ name: "Tabs", recipe: tabsRecipe });
// #endregion

export interface LocalTabsRootProps
  extends TabsPrimitiveRootProps,
    BaseTabsRootProps {}

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
  extends Omit<LocalTabsRootProps, "children">,
    Pick<TabsVariantProps, "variant"> {
  items?: TabsPresetItem[];
}

export const TabsRoot: Component<LocalTabsRootProps> = withProvider(
  TabsPrimitive.Root,
  { name: "Root", slot: "base" },
);

export function TabsList(props: TabsListProps): JSX.Element {
  const [local, rest] = splitProps(props, ["variant", "children", "class"]);
  const styles = useTabs();
  const variant = () => local.variant ?? "default";

  return (
    <TabsPrimitive.List
      {...rest}
      class={styles.slots.list({ class: local.class, variant: variant() })}
    >
      {local.children}
      <TabsPrimitive.Indicator
        class={styles.slots.indicator({ variant: variant() })}
      />
    </TabsPrimitive.List>
  );
}

export const TabsTrigger: Component<TabsTriggerProps> = withContext(
  TabsPrimitive.Trigger,
  { name: "Trigger" },
);

export const TabsContent: Component<TabsContentProps> = withContext(
  TabsPrimitive.Content,
  { name: "Content" },
);

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

export type { TabsRootProps } from "@ark-ui/solid/tabs";

export const Tabs = Object.assign(TabsShorthand, {
  Content: TabsContent,
  List: TabsList,
  Root: TabsRoot,
  Trigger: TabsTrigger,
});
