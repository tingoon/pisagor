import { ark } from "@ark-ui/solid/factory";
import type {
  DataListItemProps as BaseDataListItemProps,
  DataListProps as BaseDataListRootProps,
} from "@pisagor/props";
import {
  type DataListItemRecipeSlot,
  dataListItemRecipe,
  dataListRecipe,
} from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import type { ComponentProps, JSX } from "solid-js";
import { For, Show, splitProps } from "solid-js";
import type { VariantClassNames } from "../../internal/types";
import { DataListItemContext, useDataListItem } from "./data-list.context";

type DataListClassNames = VariantClassNames<DataListItemRecipeSlot>;

interface DataListPresetItem {
  label: JSX.Element;
  value: JSX.Element;
}

export interface DataListRootProps
  extends ComponentProps<typeof ark.dl>,
    BaseDataListRootProps {
  orientation?: "horizontal" | "vertical";
}

export interface DataListProps extends Omit<DataListRootProps, "children"> {
  items?: DataListPresetItem[];
}

export interface DataListItemProps
  extends ComponentProps<typeof ark.div>,
    BaseDataListItemProps {
  value?: JSX.Element;
  classNames?: DataListClassNames;
}

type DataListItemLabelProps = ComponentProps<typeof ark.dt>;
type DataListItemValueProps = ComponentProps<typeof ark.dd>;

export function DataListRoot(props: DataListRootProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "orientation",
    "children",
    "recipe",
    "class",
  ]);

  return (
    <ark.dl
      {...rest}
      class={(local.recipe ?? dataListRecipe)({ class: cn(local.class) })}
      data-orientation={local.orientation ?? "horizontal"}
      data-part="root"
      data-scope="data-list"
    >
      {local.children}
    </ark.dl>
  );
}

function DataListItemLabel(props: DataListItemLabelProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useDataListItem();

  return (
    <ark.dt
      {...rest}
      class={slots.label({ class: cn(local.class) })}
      data-part="item-label"
      data-scope="data-list"
    />
  );
}

function DataListItemValue(props: DataListItemValueProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useDataListItem();

  return (
    <ark.dd
      {...rest}
      class={slots.value({ class: cn(local.class) })}
      data-part="item-value"
      data-scope="data-list"
    />
  );
}

export function DataListItem(props: DataListItemProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "value",
    "children",
    "recipe",
    "class",
    "classNames",
  ]);
  const slots = () => (local.recipe ?? dataListItemRecipe)();

  return (
    <DataListItemContext value={{ slots: slots() }}>
      <ark.div
        {...rest}
        class={slots().base({ class: cn(local.class) })}
        data-part="item"
        data-scope="data-list"
      >
        <Show when={local.children != null}>
          <DataListItemLabel class={local.classNames?.label}>
            {local.children}
          </DataListItemLabel>
        </Show>
        <Show when={local.value != null}>
          <DataListItemValue class={local.classNames?.value}>
            {local.value}
          </DataListItemValue>
        </Show>
      </ark.div>
    </DataListItemContext>
  );
}

export function DataListShorthand(props: DataListProps): JSX.Element {
  const [local, rest] = splitProps(props, ["items"]);

  return (
    <DataListRoot {...rest}>
      <For each={local.items}>
        {(item) => <DataListItem value={item.value}>{item.label}</DataListItem>}
      </For>
    </DataListRoot>
  );
}
