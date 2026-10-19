import type {
  DataListContract,
  DataListItemContract,
  DataListItemRootContract,
  DataListPresetItem as BaseDataListPresetItem,
  DataListRootContract,
} from "@pisagor/contracts";
import { dataListItemRecipe, dataListRecipe } from "@pisagor/recipes";
import type { ComponentProps, ComponentPropsWithRef, ReactNode } from "react";
import { createSlotRecipeContext } from "../internal";

// #region Context
const { withContext, withProvider } = createSlotRecipeContext({
  name: "DataList",
  recipe: dataListItemRecipe,
});
// #endregion

// #region Parts
export function DataListRoot({
  orientation = "horizontal",
  children,
  recipe = dataListRecipe,
  className,
  ...rest
}: ComponentPropsWithRef<"dl"> &
  DataListRootContract & {
    orientation?: "horizontal" | "vertical";
  }) {
  return (
    <dl
      {...rest}
      className={recipe({ className })}
      data-orientation={orientation}
      data-part="root"
      data-scope="data-list"
    >
      {children}
    </dl>
  );
}

const DataListItemRoot = withProvider<DataListItemRootContract>("div", {
  defaultProps: {
    "data-part": "item",
  },
  name: "Item",
  slot: "base",
});

const DataListItemLabel = withContext("dt", {
  defaultProps: {
    "data-part": "item-label",
  },
  name: "ItemLabel",
  slot: "label",
});

const DataListItemValue = withContext("dd", {
  defaultProps: {
    "data-part": "item-value",
  },
  name: "ItemValue",
  slot: "value",
});

export function DataListItem({
  value,
  children,
  className,
  classNames,
  ...rest
}: ComponentProps<typeof DataListItemRoot> &
  DataListItemRootContract &
  DataListItemContract & {
    value?: ReactNode;
  }) {
  return (
    <DataListItemRoot {...rest} className={className}>
      {children != null && (
        <DataListItemLabel className={classNames?.label}>
          {children}
        </DataListItemLabel>
      )}
      {value != null && (
        <DataListItemValue className={classNames?.value}>
          {value}
        </DataListItemValue>
      )}
    </DataListItemRoot>
  );
}
// #endregion

// #region Types
export type DataListRootProps = ComponentProps<typeof DataListRoot>;
export type DataListItemProps = ComponentProps<typeof DataListItem>;

interface DataListPresetItem extends Omit<
  BaseDataListPresetItem,
  "label" | "value"
> {
  label: ReactNode;
  value: ReactNode;
}

export interface DataListProps
  extends Omit<DataListRootProps, "children">, DataListContract {
  items?: DataListPresetItem[];
}
// #endregion

// #region Shorthand
export function DataListShorthand({ items, ...rest }: DataListProps) {
  return (
    <DataListRoot {...rest}>
      {items?.map((item, index) => (
        <DataListItem
          key={typeof item.label === "string" ? item.label : `item-${index}`}
          value={item.value}
        >
          {item.label}
        </DataListItem>
      ))}
    </DataListRoot>
  );
}

DataListRoot.displayName = "DataList.Root";
DataListItem.displayName = "DataList.Item";
DataListShorthand.displayName = "DataList";
// #endregion

export const DataList = Object.assign(DataListShorthand, {
  Item: DataListItem,
  Root: DataListRoot,
});
