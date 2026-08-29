import { ark } from "@ark-ui/react/factory";
import { tableRecipe } from "@pisagor/recipes/table";
import type { ComponentProps } from "react";
import { TableContext, useTable } from "./table.context";

// #region Types
export interface TableProps extends ComponentProps<typeof ark.table> {
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
  className,
  ...rest
}: TableProps) {
  const slots = tableRecipe();

  return (
    <TableContext value={{ slots }}>
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
    </TableContext>
  );
}

export function TableHeader({ className, ...rest }: TableHeaderProps) {
  const { slots } = useTable();

  return (
    <ark.thead
      {...rest}
      className={slots.header({ className })}
      data-part="header"
      data-scope="table"
    />
  );
}

export function TableBody({ className, ...rest }: TableBodyProps) {
  const { slots } = useTable();

  return (
    <ark.tbody
      {...rest}
      className={slots.body({ className })}
      data-part="body"
      data-scope="table"
    />
  );
}

export function TableFooter({ className, ...rest }: TableFooterProps) {
  const { slots } = useTable();

  return (
    <ark.tfoot
      {...rest}
      className={slots.footer({ className })}
      data-part="footer"
      data-scope="table"
    />
  );
}

export function TableRow({ className, ...rest }: TableRowProps) {
  const { slots } = useTable();

  return (
    <ark.tr {...rest} className={slots.row({ className })} data-part="row" data-scope="table" />
  );
}

export function TableHead({ className, ...rest }: TableHeadProps) {
  const { slots } = useTable();

  return (
    <ark.th {...rest} className={slots.head({ className })} data-part="head" data-scope="table" />
  );
}

export function TableCell({ className, ...rest }: TableCellProps) {
  const { slots } = useTable();

  return (
    <ark.td {...rest} className={slots.cell({ className })} data-part="cell" data-scope="table" />
  );
}

export function TableCaption({ className, ...rest }: TableCaptionProps) {
  const { slots } = useTable();

  return (
    <ark.caption
      {...rest}
      className={slots.caption({ className })}
      data-part="caption"
      data-scope="table"
    />
  );
}
// #endregion

// #region Display Names
TableRoot.displayName = "Table";
TableHeader.displayName = "Table.Header";
TableBody.displayName = "Table.Body";
TableFooter.displayName = "Table.Footer";
TableRow.displayName = "Table.Row";
TableHead.displayName = "Table.Head";
TableCell.displayName = "Table.Cell";
TableCaption.displayName = "Table.Caption";
// #endregion
