import {
  type TabContentProps,
  type TabListProps,
  type TabTriggerProps,
  Tabs as TabsPrimitive,
  type TabsRootProps as TabsPrimitiveRootProps,
} from "@ark-ui/solid";
import type { TabsProps as BaseTabsRootProps } from "@pisagor/props";
import { type TabsVariantProps, tabsRecipe } from "@pisagor/recipes";
import type { Component, JSX } from "solid-js";
import { For, Show, splitProps } from "solid-js";
import { createSlotRecipeContext } from "../internal/create-slot-recipe-context";

// #region Context
const {
  useStyles: useTabs,
  withContext,
  withProvider,
} = createSlotRecipeContext({ name: "Tabs", recipe: tabsRecipe });
// #endregion

export interface LocalTabsRootProps
  extends TabsPrimitiveRootProps, BaseTabsRootProps {}

interface TabsPresetItem {
  value: string;
  label: JSX.Element;
  content: JSX.Element;
  disabled?: boolean;
}

export type TabsListProps = TabListProps &
  Pick<TabsVariantProps, "variant"> & {
    /**
     * Whether to render the animated active-tab indicator.
     *
     * @defaultValue true
     */
    showIndicator?: boolean;
  };
export type TabsTriggerProps = TabTriggerProps;
export type TabsContentProps = TabContentProps;

export interface TabsProps
  extends
    Omit<LocalTabsRootProps, "children">,
    Pick<TabsVariantProps, "variant"> {
  items?: TabsPresetItem[];
  /**
   * Whether to render the animated active-tab indicator.
   *
   * @defaultValue true
   */
  showIndicator?: boolean;
}

export const TabsRoot: Component<LocalTabsRootProps> = withProvider(
  TabsPrimitive.Root,
  { name: "Root", slot: "base" },
);

export function TabsList(props: TabsListProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "variant",
    "children",
    "class",
    "showIndicator",
  ]);
  const styles = useTabs();
  const variant = () => local.variant ?? "default";

  return (
    <TabsPrimitive.List
      {...rest}
      class={styles.slots.list({ class: local.class, variant: variant() })}
    >
      {local.children}
      <Show when={local.showIndicator ?? true}>
        <TabsPrimitive.Indicator
          class={styles.slots.indicator({ variant: variant() })}
        />
      </Show>
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
  const [local, rest] = splitProps(props, [
    "variant",
    "items",
    "showIndicator",
  ]);

  return (
    <TabsRoot {...rest}>
      <TabsList showIndicator={local.showIndicator} variant={local.variant}>
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

export type { TabsRootProps } from "@ark-ui/solid";

export const Tabs = Object.assign(TabsShorthand, {
  Content: TabsContent,
  List: TabsList,
  Root: TabsRoot,
  Trigger: TabsTrigger,
});
