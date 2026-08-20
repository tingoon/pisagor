import { ark } from "@ark-ui/react/factory";
import {
  tableBodyVariants,
  tableCaptionVariants,
  tableCellVariants,
  tableFooterVariants,
  tableHeaderVariants,
  tableHeadVariants,
  tableRowVariants,
  tableVariants,
  tableWrapperVariants,
} from "@pisagor/styles/ui/table";
import type { ComponentProps } from "react";
import type { WithTestId } from "../../internal/types";

// #region Types
export interface TableProps extends ComponentProps<typeof ark.table>, WithTestId {
  /**
   * Whether the table rows are hoverable.
   *
   * @defaultValue true
   */
  isHoverable?: boolean;
  /**
   * The variant of the table.
   *
   * @defaultValue "plain"
   */
  variant?: "plain" | "striped";
}

export interface TableHeaderProps extends ComponentProps<typeof ark.thead> {}
export interface TableBodyProps extends ComponentProps<typeof ark.tbody> {}
export interface TableFooterProps extends ComponentProps<typeof ark.tfoot> {}
export interface TableRowProps extends ComponentProps<typeof ark.tr> {}
export interface TableHeadProps extends ComponentProps<typeof ark.th> {}
export interface TableCellProps extends ComponentProps<typeof ark.td> {}
export interface TableCaptionProps extends ComponentProps<typeof ark.caption> {}
// #endregion

// #region Parts
export function TableRoot({
  variant = "plain",
  isHoverable = true,
  className,
  testId,
  ...rest
}: TableProps) {
  return (
    <div className={tableWrapperVariants()} data-part="wrapper" data-scope="table">
      <ark.table
        {...rest}
        className={tableVariants({ className })}
        data-hoverable={isHoverable}
        data-part="root"
        data-scope="table"
        data-testid={testId}
        data-variant={variant}
      />
    </div>
  );
}

export function TableHeader({ className, ...rest }: TableHeaderProps) {
  return (
    <ark.thead
      {...rest}
      className={tableHeaderVariants({ className })}
      data-part="header"
      data-scope="table"
    />
  );
}

export function TableBody({ className, ...rest }: TableBodyProps) {
  return (
    <ark.tbody
      {...rest}
      className={tableBodyVariants({ className })}
      data-part="body"
      data-scope="table"
    />
  );
}

export function TableFooter({ className, ...rest }: TableFooterProps) {
  return (
    <ark.tfoot
      {...rest}
      className={tableFooterVariants({ className })}
      data-part="footer"
      data-scope="table"
    />
  );
}

export function TableRow({ className, ...rest }: TableRowProps) {
  return (
    <ark.tr
      {...rest}
      className={tableRowVariants({ className })}
      data-part="row"
      data-scope="table"
    />
  );
}

export function TableHead({ className, ...rest }: TableHeadProps) {
  return (
    <ark.th
      {...rest}
      className={tableHeadVariants({ className })}
      data-part="head"
      data-scope="table"
    />
  );
}

export function TableCell({ className, ...rest }: TableCellProps) {
  return (
    <ark.td
      {...rest}
      className={tableCellVariants({ className })}
      data-part="cell"
      data-scope="table"
    />
  );
}

export function TableCaption({ className, ...rest }: TableCaptionProps) {
  return (
    <ark.caption
      {...rest}
      className={tableCaptionVariants({ className })}
      data-part="caption"
      data-scope="table"
    />
  );
}

TableRoot.displayName = "Table";
TableHeader.displayName = "Table.Header";
TableBody.displayName = "Table.Body";
TableFooter.displayName = "Table.Footer";
TableRow.displayName = "Table.Row";
TableHead.displayName = "Table.Head";
TableCell.displayName = "Table.Cell";
TableCaption.displayName = "Table.Caption";
// #endregion
