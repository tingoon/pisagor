import type { TableProps as BaseTableProps } from "@pisagor/props";
import { tableRecipe } from "@pisagor/recipes";
import type { ComponentPropsWithRef } from "react";

import { createSlotRecipeContext } from "../internal";

// #region Context
const { Context: TableStylesContext, withContext } = createSlotRecipeContext({
  name: "Table",
  recipe: tableRecipe,
});
// #endregion

// #region Types
export interface TableProps
  extends ComponentPropsWithRef<"table">, BaseTableProps {
  /**
   * The variant of the table.
   *
   * @defaultValue "plain"
   */
  variant?: "plain" | "striped";
  /**
   * Whether the table rows are hoverable.
   *
   * @defaultValue true
   */
  isHoverable?: boolean;
}

export type TableHeaderProps = ComponentPropsWithRef<"thead">;
export type TableBodyProps = ComponentPropsWithRef<"tbody">;
export type TableFooterProps = ComponentPropsWithRef<"tfoot">;
export type TableRowProps = ComponentPropsWithRef<"tr">;
export type TableHeadProps = ComponentPropsWithRef<"th">;
export type TableCellProps = ComponentPropsWithRef<"td">;
export type TableCaptionProps = ComponentPropsWithRef<"caption">;
// #endregion

// #region Parts
export function TableRoot({
  size = "md",
  variant = "plain",
  isHoverable = true,
  recipe = tableRecipe,
  className,
  ...rest
}: TableProps) {
  const slots = recipe({ size });

  return (
    <TableStylesContext value={{ slots, variants: {} as never }}>
      <div className={slots.wrapper()} data-part="wrapper" data-scope="table">
        <table
          {...rest}
          className={slots.base({ className })}
          data-hoverable={isHoverable}
          data-part="root"
          data-scope="table"
          data-variant={variant}
        />
      </div>
    </TableStylesContext>
  );
}

export const TableHeader = withContext("thead", { name: "Header" });
export const TableBody = withContext("tbody", { name: "Body" });
export const TableFooter = withContext("tfoot", { name: "Footer" });
export const TableRow = withContext("tr", { name: "Row" });
export const TableHead = withContext("th", { name: "Head" });
export const TableCell = withContext("td", { name: "Cell" });
export const TableCaption = withContext("caption", { name: "Caption" });
// #endregion

// #region Display Names
TableRoot.displayName = "Table";
// #endregion

export const Table = Object.assign(TableRoot, {
  Body: TableBody,
  Caption: TableCaption,
  Cell: TableCell,
  Footer: TableFooter,
  Head: TableHead,
  Header: TableHeader,
  Row: TableRow,
});
