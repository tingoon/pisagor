import { ark } from "@ark-ui/react/factory";
import type { TableProps as BaseTableProps } from "@pisagor/props";
import { tableRecipe } from "@pisagor/recipes";
import type { ComponentProps } from "react";
import { createSlotRecipeContext } from "../internal/create-slot-recipe-context";

// #region Context
const { Context: TableStylesContext, withContext } = createSlotRecipeContext({
  name: "Table",
  recipe: tableRecipe,
});
// #endregion

// #region Types
export interface TableProps
  extends ComponentProps<typeof ark.table>,
    BaseTableProps {
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

export type TableHeaderProps = ComponentProps<typeof ark.thead>;
export type TableBodyProps = ComponentProps<typeof ark.tbody>;
export type TableFooterProps = ComponentProps<typeof ark.tfoot>;
export type TableRowProps = ComponentProps<typeof ark.tr>;
export type TableHeadProps = ComponentProps<typeof ark.th>;
export type TableCellProps = ComponentProps<typeof ark.td>;
export type TableCaptionProps = ComponentProps<typeof ark.caption>;
// #endregion

// #region Parts
export function TableRoot({
  variant = "plain",
  isHoverable = true,
  recipe = tableRecipe,
  className,
  ...rest
}: TableProps) {
  const slots = recipe();

  return (
    <TableStylesContext value={{ slots, variants: {} as never }}>
      <div className={slots.wrapper()} data-part="wrapper" data-scope="table">
        <ark.table
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

export const TableHeader = withContext(ark.thead, { name: "Header" });
export const TableBody = withContext(ark.tbody, { name: "Body" });
export const TableFooter = withContext(ark.tfoot, { name: "Footer" });
export const TableRow = withContext(ark.tr, { name: "Row" });
export const TableHead = withContext(ark.th, { name: "Head" });
export const TableCell = withContext(ark.td, { name: "Cell" });
export const TableCaption = withContext(ark.caption, { name: "Caption" });
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
