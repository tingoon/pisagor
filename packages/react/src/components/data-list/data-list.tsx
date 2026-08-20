import { ark } from "@ark-ui/react/factory";
import { type DataListSlots, dataListVariants } from "@pisagor/styles/ui/data-list";
import { cn } from "@pisagor/utils";
import type { ComponentProps, ReactNode } from "react";
import type { VariantClassNames, WithTestId } from "../../internal/types";

// #region Types
type DataListClassNames = VariantClassNames<DataListSlots>;

interface DataListPresetItem {
  label: ReactNode;
  value: ReactNode;
}

export interface DataListRootProps extends ComponentProps<typeof ark.dl>, WithTestId {
  /**
   * The orientation of the data list.
   *
   * @defaultValue "horizontal"
   */
  orientation?: "horizontal" | "vertical";
  /** Slot class names */
  classNames?: DataListClassNames;
}

export interface DataListProps extends Omit<DataListRootProps, "children"> {
  items?: DataListPresetItem[];
}

export interface DataListItemProps extends ComponentProps<typeof ark.div> {
  value?: ReactNode;
  /** Slot class names */
  classNames?: DataListClassNames;
}
// #endregion

// #region Parts
export function DataListRoot({
  orientation = "horizontal",
  className,
  classNames,
  children,
  testId,
  ...rest
}: DataListRootProps) {
  const slots = dataListVariants();

  return (
    <ark.dl
      {...rest}
      className={slots.base({ className: className })}
      data-orientation={orientation}
      data-part="root"
      data-scope="data-list"
      data-testid={testId}
    >
      {children}
    </ark.dl>
  );
}
DataListRoot.displayName = "DataList.Root";

function DataListItemLabel({ className, ...rest }: ComponentProps<typeof ark.dt>) {
  const slots = dataListVariants();

  return (
    <ark.dt
      {...rest}
      className={slots.label({ className })}
      data-part="item-label"
      data-scope="data-list"
    />
  );
}
DataListItemLabel.displayName = "DataList.ItemLabel";

function DataListItemValue({ className, ...rest }: ComponentProps<typeof ark.dd>) {
  const slots = dataListVariants();

  return (
    <ark.dd
      {...rest}
      className={slots.value({ className })}
      data-part="item-value"
      data-scope="data-list"
    />
  );
}
DataListItemValue.displayName = "DataList.ItemValue";

export function DataListItem({
  value,
  className,
  classNames,
  children,
  ...rest
}: DataListItemProps) {
  return (
    <ark.div
      {...rest}
      className={dataListVariants().item({ className: cn(className, classNames?.item) })}
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
  );
}
DataListItem.displayName = "DataList.Item";
// #endregion

// #region Shorthand
export function DataListShorthand({ items, ...rest }: DataListProps) {
  return (
    <DataListRoot {...rest}>
      {items?.map((item, index) => (
        // biome-ignore lint/suspicious/noArrayIndexKey: preset items may not have stable keys
        <DataListItem key={index} value={item.value}>
          {item.label}
        </DataListItem>
      ))}
    </DataListRoot>
  );
}
DataListShorthand.displayName = "DataList";
// #endregion
