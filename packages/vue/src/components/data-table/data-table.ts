import {
  dataTableFooterVariants,
  dataTableInlineVariants,
  dataTableToolbarVariants,
  dataTableVariants,
} from "@pisagor/styles/ui/data-table";
import { cn } from "@pisagor/utils";
import {
  type Cell,
  getCoreRowModel,
  type HeaderGroup,
  type Row,
  type TableOptions,
  type Table as TableType,
  useVueTable,
} from "@tanstack/vue-table";
import { computed, defineComponent, h, type PropType, type VNodeChild } from "vue";
import { createContext } from "../../utils/create-context";
import { Table } from "../table";

type ArkPart = Parameters<typeof h>[0];

// #region Types
interface DataTableContextValue<TData> {
  table: TableType<TData>;
}

interface DataTableHeaderGroupContextValue<TData> {
  headerGroup: HeaderGroup<TData>;
}

interface DataTableRowContextValue<TData> {
  row: Row<TData>;
}

export type DataTableProps<TData = unknown> = Omit<TableOptions<TData>, "getCoreRowModel"> & {
  getCoreRowModel?: TableOptions<TData>["getCoreRowModel"];
  class?: unknown;
};
// #endregion

// #region Context + Hooks
const [provideDataTableContext, useDataTableContextBase] = createContext<
  DataTableContextValue<unknown>
>({
  name: "DataTable",
});

const [provideDataTableHeaderGroupContext, useDataTableHeaderGroupContextBase] = createContext<
  DataTableHeaderGroupContextValue<unknown>
>({
  name: "DataTableHeaderGroup",
});

const [provideDataTableRowContext, useDataTableRowContextBase] = createContext<
  DataTableRowContextValue<unknown>
>({
  name: "DataTableRow",
});

/**
 * Returns the TanStack Table instance from the nearest DataTable context.
 *
 * @typeParam TData - Row shape for the table context.
 * @returns The table instance for the current row model.
 */
export function useDataTable<TData>() {
  return useDataTableContextBase() as unknown as DataTableContextValue<TData>["table"];
}

/**
 * Returns the header group from the nearest DataTable.Header context.
 *
 * @typeParam TData - Row shape for the table context.
 * @returns The active header group.
 */
export function useDataTableHeaderGroup<TData>() {
  return useDataTableHeaderGroupContextBase() as unknown as DataTableHeaderGroupContextValue<TData>;
}

/**
 * Returns the row from the nearest DataTable.Row context.
 *
 * @typeParam TData - Row shape for the table context.
 * @returns The active table row.
 */
export function useDataTableRow<TData>() {
  return useDataTableRowContextBase() as unknown as Row<TData>;
}

function flexRender(template: unknown, context: unknown): VNodeChild {
  if (template === null || template === undefined) return null;
  if (typeof template === "function") return (template as (ctx: unknown) => VNodeChild)(context);
  return template as VNodeChild;
}

/**
 * Renders a table cell using the column definition's cell renderer.
 *
 * @typeParam TData - Row shape for the cell context.
 * @returns The rendered cell content, or null for placeholder cells.
 */
export function renderDataTableCell<TData>(cell: Cell<TData, unknown>): VNodeChild {
  if (cell.getIsPlaceholder()) {
    return null;
  }

  return flexRender(cell.column.columnDef.cell, cell.getContext());
}
// #endregion

// #region Parts
export const DataTableRoot = defineComponent({
  inheritAttrs: false,
  name: "DataTableRoot",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    const options = new Proxy(
      {},
      {
        get(_target, key: string) {
          switch (key) {
            case "data":
              return (attrs.data as unknown[] | undefined) ?? [];
            case "getCoreRowModel":
              return (
                (attrs.getCoreRowModel as TableOptions<unknown>["getCoreRowModel"]) ??
                getCoreRowModel()
              );
            default:
              return (attrs as Record<string, unknown>)[key];
          }
        },
        getOwnPropertyDescriptor() {
          return { configurable: true, enumerable: true };
        },
        has(_target, key: string) {
          return key in attrs || key === "data" || key === "getCoreRowModel";
        },
        ownKeys() {
          return Array.from(new Set([...Reflect.ownKeys(attrs), "data", "getCoreRowModel"]));
        },
      },
    ) as TableOptions<unknown>;

    const table = useVueTable(options);
    const contextValue = computed<DataTableContextValue<unknown>>(() => ({ table }));

    provideDataTableContext(contextValue);

    return () =>
      h(
        "div" as ArkPart,
        {
          class: cn(dataTableVariants(), props.class),
          "data-part": "root",
          "data-scope": "data-table",
        },
        () => slots.default?.(),
      );
  },
});

export const DataTableHeader = defineComponent({
  inheritAttrs: false,
  name: "DataTableHeader",
  setup(_, { slots }) {
    return () => {
      const { table } = useDataTableContextBase() as unknown as DataTableContextValue<unknown>;

      return table
        .getHeaderGroups()
        .map((headerGroup) =>
          h(DataTableHeaderGroupProvider, { headerGroup, key: headerGroup.id }, () =>
            slots.default?.(),
          ),
        );
    };
  },
});

const DataTableHeaderGroupProvider = defineComponent({
  inheritAttrs: false,
  name: "DataTableHeaderGroupProvider",
  props: {
    headerGroup: { required: true, type: Object as PropType<HeaderGroup<unknown>> },
  },
  setup(props, { slots }) {
    provideDataTableHeaderGroupContext(computed(() => ({ headerGroup: props.headerGroup })));

    return () => slots.default?.();
  },
});

export const DataTableHeaderRow = defineComponent({
  inheritAttrs: false,
  name: "DataTableHeaderRow",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        Table.Row as ArkPart,
        { ...attrs, class: cn(props.class), "data-part": "header-row", "data-scope": "data-table" },
        () => slots.default?.(),
      );
  },
});

export const DataTableHead = defineComponent({
  inheritAttrs: false,
  name: "DataTableHead",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    columnId: { default: undefined, type: String as PropType<string | undefined> },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const { headerGroup } = useDataTableHeaderGroup<unknown>();

      const renderHeader = (header: HeaderGroup<unknown>["headers"][number]) =>
        h(
          Table.Head as ArkPart,
          {
            ...attrs,
            class: cn(props.class),
            "data-part": "head",
            "data-scope": "data-table",
            key: header.id,
          },
          () =>
            slots.default
              ? slots.default()
              : flexRender(header.column.columnDef.header, header.getContext()),
        );

      if (props.columnId) {
        const header = headerGroup.headers.find((item) => item.column.id === props.columnId);
        return header ? renderHeader(header) : null;
      }

      return headerGroup.headers.map((header) => renderHeader(header));
    };
  },
});

export const DataTableBody = defineComponent({
  inheritAttrs: false,
  name: "DataTableBody",
  props: {
    empty: {
      default: undefined,
      type: [String, Number, Boolean, Object, Array] as PropType<VNodeChild | undefined>,
    },
  },
  setup(props, { slots }) {
    return () => {
      const { table } = useDataTableContextBase() as unknown as DataTableContextValue<unknown>;
      const rows = table.getRowModel().rows;

      if (rows.length === 0) {
        return props.empty ?? null;
      }

      return rows.map((row) =>
        h(DataTableRowProvider, { key: row.id, row }, () => slots.default?.()),
      );
    };
  },
});

const DataTableRowProvider = defineComponent({
  inheritAttrs: false,
  name: "DataTableRowProvider",
  props: {
    row: { required: true, type: Object as PropType<Row<unknown>> },
  },
  setup(props, { slots }) {
    provideDataTableRowContext(computed(() => ({ row: props.row })));

    return () => slots.default?.();
  },
});

export const DataTableRow = defineComponent({
  inheritAttrs: false,
  name: "DataTableRow",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const { row } = useDataTableRowContextBase() as unknown as DataTableRowContextValue<unknown>;

      return h(
        Table.Row as ArkPart,
        {
          ...attrs,
          "aria-selected": row.getIsSelected(),
          class: cn(props.class),
          "data-part": "row",
          "data-scope": "data-table",
          "data-state": row.getIsSelected() ? "selected" : undefined,
        },
        () => slots.default?.(),
      );
    };
  },
});

export const DataTableCell = defineComponent({
  inheritAttrs: false,
  name: "DataTableCell",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    columnId: { default: undefined, type: String as PropType<string | undefined> },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const { row } = useDataTableRowContextBase() as unknown as DataTableRowContextValue<unknown>;

      if (props.columnId) {
        const cell = row.getVisibleCells().find((item) => item.column.id === props.columnId);

        if (!cell) {
          return null;
        }

        return h(
          Table.Cell as ArkPart,
          { ...attrs, class: cn(props.class), "data-part": "cell", "data-scope": "data-table" },
          () => slots.default?.() ?? renderDataTableCell(cell),
        );
      }

      return row.getVisibleCells().map((cell) =>
        h(
          Table.Cell as ArkPart,
          {
            ...attrs,
            class: cn(props.class),
            "data-part": "cell",
            "data-scope": "data-table",
            key: cell.id,
          },
          () => renderDataTableCell(cell),
        ),
      );
    };
  },
});

export const DataTableEmpty = defineComponent({
  inheritAttrs: false,
  name: "DataTableEmpty",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    colSpan: { default: undefined, type: Number as PropType<number | undefined> },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const { table } = useDataTableContextBase() as unknown as DataTableContextValue<unknown>;
      const span = props.colSpan ?? table.getAllColumns().length;

      return h(
        Table.Row as ArkPart,
        { ...attrs, class: cn(props.class), "data-part": "empty", "data-scope": "data-table" },
        () =>
          h(
            Table.Cell as ArkPart,
            { class: dataTableInlineVariants(), colSpan: span },
            () => slots.default?.() ?? "No results. Try a different search or clear filters.",
          ),
      );
    };
  },
});

export const DataTableToolbar = defineComponent({
  inheritAttrs: false,
  name: "DataTableToolbar",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        "div" as ArkPart,
        {
          ...attrs,
          class: cn(dataTableToolbarVariants(), props.class),
          "data-part": "toolbar",
          "data-scope": "data-table",
        },
        () => slots.default?.(),
      );
  },
});

export const DataTableFooter = defineComponent({
  inheritAttrs: false,
  name: "DataTableFooter",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        "div" as ArkPart,
        {
          ...attrs,
          class: cn(dataTableFooterVariants(), props.class),
          "data-part": "footer",
          "data-scope": "data-table",
        },
        () => slots.default?.(),
      );
  },
});
// #endregion
