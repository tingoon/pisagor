import { type DataTableSlots, dataTableRecipe } from "@pisagor/recipes/data-table";
import { cn } from "@pisagor/utils";
import type {
  Cell,
  HeaderGroup,
  Row,
  RowData,
  TableOptions,
  Table as TableType,
} from "@tanstack/vue-table";
import { useTable } from "@tanstack/vue-table";
import { computed, defineComponent, h, type PropType, type VNodeChild } from "vue";
import { Table } from "../components/table";
import { createContext } from "../internal/utils/create-context";
import { type DataTableFeatures, dataTableFeatures } from "./data-table.features";

type ArkPart = Parameters<typeof h>[0];

// #region Types
interface DataTableContextValue<TData extends RowData> {
  slots: DataTableSlots;
  table: TableType<DataTableFeatures, TData>;
}

interface DataTableHeaderGroupContextValue<TData extends RowData> {
  headerGroup: HeaderGroup<DataTableFeatures, TData>;
}

interface DataTableRowContextValue<TData extends RowData> {
  row: Row<DataTableFeatures, TData>;
}

/**
 * @typeParam TData - Row shape passed to `columns` and `data`.
 */
export type DataTableProps<TData extends RowData = RowData> = {
  class?: unknown;
  /**
   * TanStack Table features. Defaults to the DataTable feature preset.
   *
   * @defaultValue dataTableFeatures
   */
  features?: DataTableFeatures;
} & Omit<TableOptions<DataTableFeatures, TData>, "features">;
// #endregion

// #region Context + Hooks
const [provideDataTableContext, useDataTableContextBase] = createContext<
  DataTableContextValue<RowData>
>({
  name: "DataTable",
});

const [provideDataTableHeaderGroupContext, useDataTableHeaderGroupContextBase] = createContext<
  DataTableHeaderGroupContextValue<RowData>
>({
  name: "DataTableHeaderGroup",
});

const [provideDataTableRowContext, useDataTableRowContextBase] = createContext<
  DataTableRowContextValue<RowData>
>({
  name: "DataTableRow",
});

/**
 * Returns the TanStack Table instance from the nearest DataTable context.
 *
 * @typeParam TData - Row shape for the table context.
 * @returns The table instance for the current row model.
 */
export function useDataTable<TData extends RowData>() {
  return useDataTableContextBase() as unknown as DataTableContextValue<TData>["table"];
}

/**
 * Returns the header group from the nearest DataTable.Header context.
 *
 * @typeParam TData - Row shape for the table context.
 * @returns The active header group.
 */
export function useDataTableHeaderGroup<TData extends RowData>() {
  return useDataTableHeaderGroupContextBase() as unknown as DataTableHeaderGroupContextValue<TData>;
}

/**
 * Returns the row from the nearest DataTable.Row context.
 *
 * @typeParam TData - Row shape for the table context.
 * @returns The active table row.
 */
export function useDataTableRow<TData extends RowData>() {
  return useDataTableRowContextBase() as unknown as Row<DataTableFeatures, TData>;
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
export function renderDataTableCell<TData extends RowData>(
  cell: Cell<DataTableFeatures, TData, unknown>,
): VNodeChild {
  if (cell.getIsPlaceholder()) {
    return null;
  }

  return flexRender(cell.column.columnDef.cell, cell.getContext());
}

export type { Cell, HeaderGroup, Row, TableType };
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
              return (attrs.data as RowData[] | undefined) ?? [];
            case "features":
              return (attrs.features as DataTableFeatures | undefined) ?? dataTableFeatures;
            default:
              return (attrs as Record<string, unknown>)[key];
          }
        },
        getOwnPropertyDescriptor() {
          return { configurable: true, enumerable: true };
        },
        has(_target, key: string) {
          return key in attrs || key === "data" || key === "features";
        },
        ownKeys() {
          return Array.from(new Set([...Reflect.ownKeys(attrs), "data", "features"]));
        },
      },
    ) as TableOptions<DataTableFeatures, RowData>;

    const table = useTable(options);
    const variantSlots = dataTableRecipe();
    const contextValue = computed<DataTableContextValue<RowData>>(() => ({
      slots: variantSlots,
      table,
    }));

    provideDataTableContext(contextValue);

    return () =>
      h(
        "div" as ArkPart,
        {
          class: cn(variantSlots.base(), props.class),
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
      const { table } = useDataTableContextBase() as unknown as DataTableContextValue<RowData>;

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
    headerGroup: {
      required: true,
      type: Object as PropType<HeaderGroup<DataTableFeatures, RowData>>,
    },
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
      const { headerGroup } = useDataTableHeaderGroup<RowData>();

      const renderHeader = (header: HeaderGroup<DataTableFeatures, RowData>["headers"][number]) =>
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
      const { table } = useDataTableContextBase() as unknown as DataTableContextValue<RowData>;
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
    row: { required: true, type: Object as PropType<Row<DataTableFeatures, RowData>> },
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
      const { row } = useDataTableRowContextBase() as unknown as DataTableRowContextValue<RowData>;

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
      const { row } = useDataTableRowContextBase() as unknown as DataTableRowContextValue<RowData>;

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
      const { slots: variantSlots, table } =
        useDataTableContextBase() as unknown as DataTableContextValue<RowData>;
      const span = props.colSpan ?? table.getAllColumns().length;

      return h(
        Table.Row as ArkPart,
        { ...attrs, class: cn(props.class), "data-part": "empty", "data-scope": "data-table" },
        () =>
          h(
            Table.Cell as ArkPart,
            { class: variantSlots.empty(), colSpan: span },
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
    return () => {
      const { slots: variantSlots } =
        useDataTableContextBase() as unknown as DataTableContextValue<RowData>;

      return h(
        "div" as ArkPart,
        {
          ...attrs,
          class: cn(variantSlots.toolbar(), props.class),
          "data-part": "toolbar",
          "data-scope": "data-table",
        },
        () => slots.default?.(),
      );
    };
  },
});

export const DataTableFooter = defineComponent({
  inheritAttrs: false,
  name: "DataTableFooter",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const { slots: variantSlots } =
        useDataTableContextBase() as unknown as DataTableContextValue<RowData>;

      return h(
        "div" as ArkPart,
        {
          ...attrs,
          class: cn(variantSlots.footer(), props.class),
          "data-part": "footer",
          "data-scope": "data-table",
        },
        () => slots.default?.(),
      );
    };
  },
});
// #endregion
