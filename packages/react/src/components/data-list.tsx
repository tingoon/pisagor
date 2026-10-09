import { ark } from "@ark-ui/react/factory";
import type { DataListProps as BaseDataListRootProps } from "@pisagor/props";
import {
  type DataListItemRecipeSlot,
  dataListItemRecipe,
  dataListRecipe,
} from "@pisagor/recipes";
import type { ComponentProps, ReactNode } from "react";
import { createSlotRecipeContext } from "../internal/create-slot-recipe-context";
import type { VariantClassNames } from "../internal/types";

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
}: ComponentProps<typeof ark.dl> &
  BaseDataListRootProps & {
    orientation?: "horizontal" | "vertical";
  }) {
  return (
    <ark.dl
      {...rest}
      className={recipe({ className })}
      data-orientation={orientation}
      data-part="root"
      data-scope="data-list"
    >
      {children}
    </ark.dl>
  );
}

const DataListItemRoot = withProvider(ark.div, {
  defaultProps: {
    "data-part": "item",
  },
  name: "Item",
  slot: "base",
});

const DataListItemLabel = withContext(ark.dt, {
  defaultProps: {
    "data-part": "item-label",
  },
  name: "ItemLabel",
  slot: "label",
});

const DataListItemValue = withContext(ark.dd, {
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
}: ComponentProps<typeof DataListItemRoot> & {
  value?: ReactNode;
  classNames?: VariantClassNames<DataListItemRecipeSlot>;
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

interface DataListPresetItem {
  label: ReactNode;
  value: ReactNode;
}

export interface DataListProps extends Omit<DataListRootProps, "children"> {
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
