import { ark } from "@ark-ui/solid/factory";
import type { TableProps as BaseTableProps } from "@pisagor/props";
import { tableRecipe } from "@pisagor/recipes";
import type { Component, ComponentProps, JSX } from "solid-js";
import { createMemo, splitProps } from "solid-js";
import { createSlotRecipeContext } from "../internal/create-slot-recipe-context";

// #region Context
const { Context: TableStylesContext, withContext } = createSlotRecipeContext({
  name: "Table",
  recipe: tableRecipe,
});
// #endregion

export interface TableProps
  extends ComponentProps<typeof ark.table>,
    BaseTableProps {
  variant?: "plain" | "striped";
  isHoverable?: boolean;
}

export type TableHeaderProps = ComponentProps<typeof ark.thead>;
export type TableBodyProps = ComponentProps<typeof ark.tbody>;
export type TableFooterProps = ComponentProps<typeof ark.tfoot>;
export type TableRowProps = ComponentProps<typeof ark.tr>;
export type TableHeadProps = ComponentProps<typeof ark.th>;
export type TableCellProps = ComponentProps<typeof ark.td>;
export type TableCaptionProps = ComponentProps<typeof ark.caption>;

export function TableRoot(props: TableProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "variant",
    "isHoverable",
    "recipe",
    "class",
  ]);

  const slots = createMemo(() => (local.recipe ?? tableRecipe)());

  return (
    <TableStylesContext
      value={{
        get slots() {
          return slots();
        },
        variants: {},
      }}
    >
      <div class={slots().wrapper()} data-part="wrapper" data-scope="table">
        <ark.table
          {...rest}
          class={slots().base({ class: local.class })}
          data-hoverable={local.isHoverable ?? true}
          data-part="root"
          data-scope="table"
          data-variant={local.variant ?? "plain"}
        />
      </div>
    </TableStylesContext>
  );
}

export const TableHeader: Component<TableHeaderProps> = withContext(ark.thead, {
  name: "Header",
});

export const TableBody: Component<TableBodyProps> = withContext(ark.tbody, {
  name: "Body",
});

export const TableFooter: Component<TableFooterProps> = withContext(ark.tfoot, {
  name: "Footer",
});

export const TableRow: Component<TableRowProps> = withContext(ark.tr, {
  name: "Row",
});

export const TableHead: Component<TableHeadProps> = withContext(ark.th, {
  name: "Head",
});

export const TableCell: Component<TableCellProps> = withContext(ark.td, {
  name: "Cell",
});

export const TableCaption: Component<TableCaptionProps> = withContext(
  ark.caption,
  { name: "Caption" },
);

export const Table = Object.assign(TableRoot, {
  Body: TableBody,
  Caption: TableCaption,
  Cell: TableCell,
  Footer: TableFooter,
  Head: TableHead,
  Header: TableHeader,
  Row: TableRow,
});
