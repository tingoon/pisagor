import { ark } from "@ark-ui/react/factory";
import {
  type DataListItemRecipeSlot,
  dataListItemRecipe,
  dataListRecipe,
} from "@pisagor/recipes/data-list";
import type { ComponentProps, ReactNode } from "react";
import type { VariantClassNames } from "../../internal/types";
import { DataListItemContext, useDataListItem } from "./data-list.context";

// #region Types
type DataListClassNames = VariantClassNames<DataListItemRecipeSlot>;

interface DataListPresetItem {
  label: ReactNode;
  value: ReactNode;
}

export interface DataListRootProps extends ComponentProps<typeof ark.dl> {
  /**
   * The orientation of the data list.
   *
   * @defaultValue "horizontal"
   */
  orientation?: "horizontal" | "vertical";
}

export interface DataListProps extends Omit<DataListRootProps, "children"> {
  items?: DataListPresetItem[];
}

export interface DataListItemProps extends ComponentProps<typeof ark.div> {
  value?: ReactNode;
  /** Slot class names */
  classNames?: DataListClassNames;
}

interface DataListItemLabelProps extends ComponentProps<typeof ark.dt> {}

interface DataListItemValueProps extends ComponentProps<typeof ark.dd> {}
// #endregion

// #region Parts
export function DataListRoot({
  orientation = "horizontal",
  children,
  className,
  ...rest
}: DataListRootProps) {
  return (
    <ark.dl
      {...rest}
      className={dataListRecipe({ className })}
      data-orientation={orientation}
      data-part="root"
      data-scope="data-list"
    >
      {children}
    </ark.dl>
  );
}

function DataListItemLabel({ className, ...rest }: DataListItemLabelProps) {
  const { slots } = useDataListItem();

  return (
    <ark.dt
      {...rest}
      className={slots.label({ className })}
      data-part="item-label"
      data-scope="data-list"
    />
  );
}

function DataListItemValue({ className, ...rest }: DataListItemValueProps) {
  const { slots } = useDataListItem();

  return (
    <ark.dd
      {...rest}
      className={slots.value({ className })}
      data-part="item-value"
      data-scope="data-list"
    />
  );
}

export function DataListItem({
  value,
  children,
  className,
  classNames,
  ...rest
}: DataListItemProps) {
  const slots = dataListItemRecipe();

  return (
    <DataListItemContext value={{ slots }}>
      <ark.div
        {...rest}
        className={slots.base({ className })}
        data-part="item"
        data-scope="data-list"
      >
        {children != null && (
          <DataListItemLabel className={classNames?.label}>{children}</DataListItemLabel>
        )}
        {value != null && (
          <DataListItemValue className={classNames?.value}>{value}</DataListItemValue>
        )}
      </ark.div>
    </DataListItemContext>
  );
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
// #endregion

// #region Display Names
DataListRoot.displayName = "DataList.Root";
DataListItemLabel.displayName = "DataList.ItemLabel";
DataListItemValue.displayName = "DataList.ItemValue";
DataListItem.displayName = "DataList.Item";
DataListShorthand.displayName = "DataList";
// #endregion
