import { ark } from "@ark-ui/solid/factory";
import { tableRecipe } from "@pisagor/recipes/table";
import { cn } from "@pisagor/utils";
import type { ComponentProps, JSX } from "solid-js";
import { splitProps } from "solid-js";
import { TableContext, useTable } from "./table.context";

export interface TableProps extends ComponentProps<typeof ark.table> {
  variant?: "plain" | "striped";
  isHoverable?: boolean;
  recipe?: typeof tableRecipe;
}

export type TableHeaderProps = ComponentProps<typeof ark.thead>;
export type TableBodyProps = ComponentProps<typeof ark.tbody>;
export type TableFooterProps = ComponentProps<typeof ark.tfoot>;
export type TableRowProps = ComponentProps<typeof ark.tr>;
export type TableHeadProps = ComponentProps<typeof ark.th>;
export type TableCellProps = ComponentProps<typeof ark.td>;
export type TableCaptionProps = ComponentProps<typeof ark.caption>;

export function TableRoot(props: TableProps): JSX.Element {
  const [local, rest] = splitProps(props, ["variant", "isHoverable", "recipe", "class"]);
  const slots = () => (local.recipe ?? tableRecipe)();

  return (
    <TableContext value={{ slots: slots() }}>
      <div class={slots().wrapper()} data-part="wrapper" data-scope="table">
        <ark.table
          {...rest}
          class={slots().base({ class: cn(local.class) })}
          data-hoverable={local.isHoverable ?? true}
          data-part="root"
          data-scope="table"
          data-variant={local.variant ?? "plain"}
        />
      </div>
    </TableContext>
  );
}

export function TableHeader(props: TableHeaderProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useTable();
  return (
    <ark.thead
      {...rest}
      class={slots.header({ class: cn(local.class) })}
      data-part="header"
      data-scope="table"
    />
  );
}

export function TableBody(props: TableBodyProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useTable();
  return (
    <ark.tbody
      {...rest}
      class={slots.body({ class: cn(local.class) })}
      data-part="body"
      data-scope="table"
    />
  );
}

export function TableFooter(props: TableFooterProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useTable();
  return (
    <ark.tfoot
      {...rest}
      class={slots.footer({ class: cn(local.class) })}
      data-part="footer"
      data-scope="table"
    />
  );
}

export function TableRow(props: TableRowProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useTable();
  return (
    <ark.tr
      {...rest}
      class={slots.row({ class: cn(local.class) })}
      data-part="row"
      data-scope="table"
    />
  );
}

export function TableHead(props: TableHeadProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useTable();
  return (
    <ark.th
      {...rest}
      class={slots.head({ class: cn(local.class) })}
      data-part="head"
      data-scope="table"
    />
  );
}

export function TableCell(props: TableCellProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useTable();
  return (
    <ark.td
      {...rest}
      class={slots.cell({ class: cn(local.class) })}
      data-part="cell"
      data-scope="table"
    />
  );
}

export function TableCaption(props: TableCaptionProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useTable();
  return (
    <ark.caption
      {...rest}
      class={slots.caption({ class: cn(local.class) })}
      data-part="caption"
      data-scope="table"
    />
  );
}
