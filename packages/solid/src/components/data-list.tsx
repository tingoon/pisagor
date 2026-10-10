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
import type { Component, ComponentProps, JSX } from "solid-js";
import { For, Show, splitProps } from "solid-js";
import { createSlotRecipeContext } from "../internal/create-slot-recipe-context";
import type { VariantClassNames } from "../internal/types";

// #region Context
const { withContext, withProvider } = createSlotRecipeContext({
  name: "DataList",
  recipe: dataListItemRecipe,
});
// #endregion

// #region Types
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

type DataListItemRootProps = ComponentProps<typeof ark.div> &
  BaseDataListItemProps;

export interface DataListItemProps
  extends Omit<DataListItemRootProps, "value"> {
  value?: JSX.Element;
  classNames?: DataListClassNames;
}
// #endregion

// #region Parts
export function DataListRoot(props: DataListRootProps): JSX.Element {
  const [local, rest] = splitProps(props, ["orientation", "recipe", "class"]);

  return (
    <ark.dl
      {...rest}
      class={(local.recipe ?? dataListRecipe)({ class: local.class })}
      data-orientation={local.orientation ?? "horizontal"}
      data-part="root"
      data-scope="data-list"
    />
  );
}

const DataListItemRoot: Component<DataListItemRootProps> = withProvider(
  ark.div,
  { defaultProps: { "data-part": "item" }, name: "Item", slot: "base" },
);

const DataListItemLabel = withContext(ark.dt, {
  defaultProps: { "data-part": "item-label" },
  name: "ItemLabel",
  slot: "label",
});

const DataListItemValue = withContext(ark.dd, {
  defaultProps: { "data-part": "item-value" },
  name: "ItemValue",
  slot: "value",
});

export function DataListItem(props: DataListItemProps): JSX.Element {
  const [local, rest] = splitProps(props, ["value", "children", "classNames"]);

  return (
    <DataListItemRoot {...rest}>
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
    </DataListItemRoot>
  );
}
// #endregion

// #region Shorthand
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
// #endregion

export const DataList = Object.assign(DataListShorthand, {
  Item: DataListItem,
  Root: DataListRoot,
});
