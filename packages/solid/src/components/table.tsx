import type { TableRootContract } from "@pisagor/props";
import { tableRecipe } from "@pisagor/recipes";
import type { Component, ComponentProps, JSX } from "solid-js";
import { createMemo, splitProps } from "solid-js";
import { createSlotRecipeContext } from "../internal";

// #region Context
const { Context: TableStylesContext, withContext } = createSlotRecipeContext({
  name: "Table",
  recipe: tableRecipe,
});
// #endregion

export interface TableProps extends ComponentProps<"table">, TableRootContract {
  variant?: "plain" | "striped";
  isHoverable?: boolean;
}

export type TableHeaderProps = ComponentProps<"thead">;
export type TableBodyProps = ComponentProps<"tbody">;
export type TableFooterProps = ComponentProps<"tfoot">;
export type TableRowProps = ComponentProps<"tr">;
export type TableHeadProps = ComponentProps<"th">;
export type TableCellProps = ComponentProps<"td">;
export type TableCaptionProps = ComponentProps<"caption">;

export function TableRoot(props: TableProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "variant",
    "isHoverable",
    "recipe",
    "size",
    "class",
  ]);

  const slots = createMemo(() =>
    (local.recipe ?? tableRecipe)({ size: local.size ?? "md" }),
  );

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
        <table
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

export const TableHeader: Component<TableHeaderProps> = withContext("thead", {
  name: "Header",
});

export const TableBody: Component<TableBodyProps> = withContext("tbody", {
  name: "Body",
});

export const TableFooter: Component<TableFooterProps> = withContext("tfoot", {
  name: "Footer",
});

export const TableRow: Component<TableRowProps> = withContext("tr", {
  name: "Row",
});

export const TableHead: Component<TableHeadProps> = withContext("th", {
  name: "Head",
});

export const TableCell: Component<TableCellProps> = withContext("td", {
  name: "Cell",
});

export const TableCaption: Component<TableCaptionProps> = withContext(
  "caption",
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
