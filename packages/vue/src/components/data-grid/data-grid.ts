import { type DataGridVariants, dataGridVariants } from "@pisagor/recipes/data-grid";
import { cn } from "@pisagor/utils";
import {
  type Cell,
  type Column,
  type ColumnResizeMode,
  type Header,
  type HeaderGroup,
  type Row,
  type RowData,
  type TableOptions,
  type Table as TableType,
  useTable,
} from "@tanstack/vue-table";
import { useVirtualizer } from "@tanstack/vue-virtual";
import {
  type CSSProperties,
  computed,
  defineComponent,
  h,
  onBeforeUnmount,
  onMounted,
  type PropType,
  ref,
  shallowRef,
  type VNodeChild,
  watch,
} from "vue";
import { createContext } from "../../utils/create-context";
import { Table } from "../table";
import { type DataGridFeatures, dataGridFeatures } from "./data-grid.features";

type ArkPart = Parameters<typeof h>[0];

// #region Types
interface DataGridContextValue<TData extends RowData> {
  slots: DataGridVariants;
  table: TableType<DataGridFeatures, TData>;
}

interface DataGridHeaderGroupContextValue<TData extends RowData> {
  headerGroup: HeaderGroup<DataGridFeatures, TData>;
}

interface DataGridHeaderCellContextValue<TData extends RowData> {
  header: Header<DataGridFeatures, TData, unknown>;
}

interface DataGridRowContextValue<TData extends RowData> {
  row: Row<DataGridFeatures, TData>;
}

/**
 * @typeParam TData - Row shape passed to `columns` and `data`.
 */
export type DataGridProps<TData extends RowData = RowData> = {
  class?: unknown;
  /**
   * TanStack Table features. Defaults to the DataGrid kitchen-sink preset.
   *
   * @defaultValue dataGridFeatures
   */
  features?: DataGridFeatures;
} & Omit<TableOptions<DataGridFeatures, TData>, "features">;

interface DataGridHeadProps {
  class?: unknown;
  /**
   * Renders a single column header.
   *
   * @remarks
   * When omitted, renders every visible header in the group.
   */
  columnId?: string;
  /**
   * Whether to allow stacked filter controls in the header cell.
   *
   * @defaultValue false
   */
  filter?: boolean;
}
// #endregion

// #region Context + Hooks
const [provideDataGridContext, useDataGridContextBase] = createContext<
  DataGridContextValue<RowData>
>({
  name: "DataGrid",
});

const [provideDataGridHeaderGroupContext, useDataGridHeaderGroupContextBase] = createContext<
  DataGridHeaderGroupContextValue<RowData>
>({
  name: "DataGridHeaderGroup",
});

const [provideDataGridHeaderCellContext, useDataGridHeaderCellContextBase] = createContext<
  DataGridHeaderCellContextValue<RowData>
>({
  name: "DataGridHeaderCell",
  strict: false,
});

const [provideDataGridRowContext, useDataGridRowContextBase] = createContext<
  DataGridRowContextValue<RowData>
>({
  name: "DataGridRow",
});

/**
 * Returns the TanStack Table instance from the nearest DataGrid context.
 *
 * @typeParam TData - Row shape for the table context.
 * @returns The table instance for the current row model.
 */
export function useDataGrid<TData extends RowData>() {
  return useDataGridContextBase() as unknown as DataGridContextValue<TData>["table"];
}

/**
 * Returns the header group from the nearest DataGrid.Header context.
 *
 * @typeParam TData - Row shape for the table context.
 * @returns The active header group.
 */
export function useDataGridHeaderGroup<TData extends RowData>() {
  return useDataGridHeaderGroupContextBase() as unknown as HeaderGroup<DataGridFeatures, TData>;
}

/**
 * Returns the row from the nearest DataGrid.Row context.
 *
 * @typeParam TData - Row shape for the table context.
 * @returns The active table row.
 */
export function useDataGridRow<TData extends RowData>() {
  return useDataGridRowContextBase() as unknown as Row<DataGridFeatures, TData>;
}

function useDataGridHeaderCellContext<TData extends RowData>() {
  return useDataGridHeaderCellContextBase() as DataGridHeaderCellContextValue<TData> | undefined;
}

function columnSizeStyle(
  column: Column<DataGridFeatures, RowData, unknown>,
  enabled: boolean,
): CSSProperties | undefined {
  if (!enabled) {
    return undefined;
  }

  return {
    minWidth: `${column.columnDef.minSize}px`,
    width: `${column.getSize()}px`,
  };
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
export function renderDataGridCell<TData extends RowData>(
  cell: Cell<DataGridFeatures, TData, unknown>,
): VNodeChild {
  if (cell.getIsPlaceholder()) {
    return null;
  }

  if (cell.getIsAggregated()) {
    return flexRender(
      cell.column.columnDef.aggregatedCell ?? cell.column.columnDef.cell,
      cell.getContext(),
    );
  }

  return flexRender(cell.column.columnDef.cell, cell.getContext());
}

export type { Cell, Column, Header, HeaderGroup, Row, TableType };
// #endregion

// #region Parts
export const DataGridRoot = defineComponent({
  inheritAttrs: false,
  name: "DataGridRoot",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    const options = new Proxy(
      {},
      {
        get(_target, key: string) {
          switch (key) {
            case "columnResizeMode":
              return (attrs.columnResizeMode as ColumnResizeMode | undefined) ?? "onChange";
            case "data":
              return (attrs.data as RowData[] | undefined) ?? [];
            case "features":
              return (attrs.features as DataGridFeatures | undefined) ?? dataGridFeatures;
            default:
              return (attrs as Record<string, unknown>)[key];
          }
        },
        getOwnPropertyDescriptor() {
          return { configurable: true, enumerable: true };
        },
        has(_target, key: string) {
          return key in attrs || key === "columnResizeMode" || key === "data" || key === "features";
        },
        ownKeys() {
          return Array.from(
            new Set([...Reflect.ownKeys(attrs), "columnResizeMode", "data", "features"]),
          );
        },
      },
    ) as TableOptions<DataGridFeatures, RowData>;

    const table = useTable(options);
    const variantSlots = dataGridVariants();
    const contextValue = computed<DataGridContextValue<RowData>>(() => ({
      slots: variantSlots,
      table,
    }));

    provideDataGridContext(contextValue);

    return () =>
      h(
        "div" as ArkPart,
        {
          class: cn(variantSlots.base(), props.class),
          "data-part": "root",
          "data-scope": "data-grid",
        },
        () => slots.default?.(),
      );
  },
});

export const DataGridHeader = defineComponent({
  inheritAttrs: false,
  name: "DataGridHeader",
  setup(_, { slots }) {
    return () => {
      const { table } = useDataGridContextBase() as unknown as DataGridContextValue<RowData>;

      return table
        .getHeaderGroups()
        .map((headerGroup) =>
          h(DataGridHeaderGroupProvider, { headerGroup, key: headerGroup.id }, () =>
            slots.default?.(),
          ),
        );
    };
  },
});

const DataGridHeaderGroupProvider = defineComponent({
  inheritAttrs: false,
  name: "DataGridHeaderGroupProvider",
  props: {
    headerGroup: {
      required: true,
      type: Object as PropType<HeaderGroup<DataGridFeatures, RowData>>,
    },
  },
  setup(props, { slots }) {
    provideDataGridHeaderGroupContext(computed(() => ({ headerGroup: props.headerGroup })));

    return () => slots.default?.();
  },
});

export const DataGridHeaderRow = defineComponent({
  inheritAttrs: false,
  name: "DataGridHeaderRow",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        Table.Row as ArkPart,
        { ...attrs, class: cn(props.class), "data-part": "header-row", "data-scope": "data-grid" },
        () => slots.default?.(),
      );
  },
});

const DataGridHeaderCellProvider = defineComponent({
  inheritAttrs: false,
  name: "DataGridHeaderCellProvider",
  props: {
    header: {
      required: true,
      type: Object as PropType<Header<DataGridFeatures, RowData, unknown>>,
    },
  },
  setup(props, { slots }) {
    provideDataGridHeaderCellContext(computed(() => ({ header: props.header })));

    return () => slots.default?.();
  },
});

export const DataGridColumnResizer = defineComponent({
  inheritAttrs: false,
  name: "DataGridColumnResizer",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs }) {
    return () => {
      const headerCell = useDataGridHeaderCellContext<RowData>();
      const { slots: variantSlots } =
        useDataGridContextBase() as unknown as DataGridContextValue<RowData>;

      if (!headerCell) {
        return null;
      }

      const { header } = headerCell;

      if (!header.column.getCanResize()) {
        return null;
      }

      return h("div", {
        ...attrs,
        "aria-hidden": "true",
        class: cn(
          variantSlots.columnResizer(),
          header.column.getIsResizing() && "bg-primary",
          props.class,
        ),
        "data-part": "column-resizer",
        "data-scope": "data-grid",
        onDblclick: () => header.column.resetSize(),
        onMousedown: header.getResizeHandler(),
        onTouchstart: header.getResizeHandler(),
      });
    };
  },
});

function renderHeadCell(
  header: Header<DataGridFeatures, RowData, unknown>,
  props: DataGridHeadProps,
  attrs: Record<string, unknown>,
  slots: { default?: () => VNodeChild },
  table: TableType<DataGridFeatures, RowData>,
  variantSlots: DataGridVariants,
) {
  const sizingEnabled = Boolean(table.options.enableColumnResizing);
  const headClass = cn(
    props.filter && variantSlots.filterHead(),
    props.class as string | undefined,
  );

  return h(DataGridHeaderCellProvider, { header, key: header.id }, () =>
    h(
      Table.Head as ArkPart,
      {
        ...attrs,
        class: cn(sizingEnabled && "relative", headClass),
        "data-part": "head",
        "data-scope": "data-grid",
        style: {
          ...columnSizeStyle(header.column, sizingEnabled),
          ...(attrs.style as CSSProperties | undefined),
        },
      },
      () =>
        slots.default?.() ?? [
          flexRender(header.column.columnDef.header, header.getContext()),
          sizingEnabled ? h(DataGridColumnResizer) : null,
        ],
    ),
  );
}

export const DataGridHead = defineComponent({
  inheritAttrs: false,
  name: "DataGridHead",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    columnId: { default: undefined, type: String as PropType<string | undefined> },
    filter: { default: false, type: Boolean },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const { headerGroup } =
        useDataGridHeaderGroupContextBase() as unknown as DataGridHeaderGroupContextValue<RowData>;
      const { slots: variantSlots, table } =
        useDataGridContextBase() as unknown as DataGridContextValue<RowData>;

      if (props.columnId) {
        const header = headerGroup.headers.find((item) => item.column.id === props.columnId);

        if (!header) {
          return null;
        }

        return renderHeadCell(header, props, attrs, slots, table, variantSlots);
      }

      return headerGroup.headers.map((header) =>
        renderHeadCell(header, props, attrs, slots, table, variantSlots),
      );
    };
  },
});

export const DataGridBody = defineComponent({
  inheritAttrs: false,
  name: "DataGridBody",
  props: {
    empty: {
      default: undefined,
      type: [String, Number, Boolean, Object, Array] as PropType<VNodeChild | undefined>,
    },
  },
  setup(props, { slots }) {
    return () => {
      const { table } = useDataGridContextBase() as unknown as DataGridContextValue<RowData>;
      const rows = table.getRowModel().rows;

      if (rows.length === 0) {
        return props.empty ?? null;
      }

      return rows.map((row) =>
        h(DataGridRowProvider, { key: row.id, row }, () => slots.default?.()),
      );
    };
  },
});

export const DataGridRowProvider = defineComponent({
  inheritAttrs: false,
  name: "DataGridRowProvider",
  props: {
    row: { required: true, type: Object as PropType<Row<DataGridFeatures, RowData>> },
  },
  setup(props, { slots }) {
    provideDataGridRowContext(computed(() => ({ row: props.row })));

    return () => slots.default?.();
  },
});

export const DataGridVirtualBody = defineComponent({
  inheritAttrs: false,
  name: "DataGridVirtualBody",
  props: {
    empty: {
      default: undefined,
      type: [String, Number, Boolean, Object, Array] as PropType<VNodeChild | undefined>,
    },
    estimateSize: { default: 40, type: Number },
    overscan: { default: 8, type: Number },
    viewportHeight: { default: "24rem", type: String },
  },
  setup(props, { slots }) {
    const anchorRef = ref<HTMLTableRowElement | null>(null);
    const scrollElement = shallowRef<HTMLElement | null>(null);

    const findWrapper = () =>
      anchorRef.value?.closest('[data-scope="table"][data-part="wrapper"]') as HTMLElement | null;

    const applyViewportHeight = () => {
      const wrapper = findWrapper();
      scrollElement.value = wrapper;

      if (wrapper) {
        wrapper.style.height = props.viewportHeight;
      }
    };

    onMounted(applyViewportHeight);
    watch(() => props.viewportHeight, applyViewportHeight);
    onBeforeUnmount(() => {
      const wrapper = findWrapper();

      if (wrapper) {
        wrapper.style.height = "";
      }
    });

    const { slots: variantSlots, table } =
      useDataGridContextBase() as unknown as DataGridContextValue<RowData>;

    const virtualizer = useVirtualizer(
      computed(() => ({
        count: table.getRowModel().rows.length,
        estimateSize: () => props.estimateSize,
        getScrollElement: () => scrollElement.value,
        overscan: props.overscan,
      })),
    );

    return () => {
      const rows = table.getRowModel().rows;

      if (rows.length === 0) {
        return [h("tr", { class: variantSlots.anchor(), ref: anchorRef }), props.empty ?? null];
      }

      const virtualRows = virtualizer.value.getVirtualItems();
      const paddingTop = virtualRows[0]?.start ?? 0;
      const paddingBottom =
        virtualizer.value.getTotalSize() - (virtualRows[virtualRows.length - 1]?.end ?? 0);

      return [
        paddingTop > 0
          ? h("tr", { "data-part": "virtual-spacer", "data-scope": "data-grid", ref: anchorRef }, [
              h("td", {
                colSpan: table.getAllColumns().length,
                style: { height: `${paddingTop}px` },
              }),
            ])
          : h("tr", { class: variantSlots.anchor(), ref: anchorRef }),
        ...virtualRows.map((virtualRow) => {
          const row = rows[virtualRow.index];

          if (!row) {
            return null;
          }

          return h(DataGridRowProvider, { key: row.id, row }, () => slots.default?.());
        }),
        paddingBottom > 0
          ? h("tr", { "data-part": "virtual-spacer", "data-scope": "data-grid" }, [
              h("td", {
                colSpan: table.getAllColumns().length,
                style: { height: `${paddingBottom}px` },
              }),
            ])
          : null,
      ];
    };
  },
});

export const DataGridRow = defineComponent({
  inheritAttrs: false,
  name: "DataGridRow",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    style: { default: undefined, type: Object as PropType<CSSProperties | undefined> },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const { row } = useDataGridRowContextBase() as unknown as DataGridRowContextValue<RowData>;

      return h(
        Table.Row as ArkPart,
        {
          ...attrs,
          "aria-expanded": row.getCanExpand() ? row.getIsExpanded() : undefined,
          "aria-selected": row.getIsSelected(),
          class: cn(row.getIsGrouped() && "bg-muted/40 font-medium", props.class),
          "data-depth": row.depth,
          "data-expanded": row.getIsExpanded() ? "true" : undefined,
          "data-grouped": row.getIsGrouped() ? "true" : undefined,
          "data-part": "row",
          "data-scope": "data-grid",
          "data-state": row.getIsSelected() ? "selected" : undefined,
          style: props.style,
        },
        () => slots.default?.(),
      );
    };
  },
});

export const DataGridCell = defineComponent({
  inheritAttrs: false,
  name: "DataGridCell",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    columnId: { default: undefined, type: String as PropType<string | undefined> },
    style: { default: undefined, type: Object as PropType<CSSProperties | undefined> },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const { table } = useDataGridContextBase() as unknown as DataGridContextValue<RowData>;
      const { row } = useDataGridRowContextBase() as unknown as DataGridRowContextValue<RowData>;
      const sizingEnabled = Boolean(table.options.enableColumnResizing);

      if (props.columnId) {
        const cell = row.getVisibleCells().find((item) => item.column.id === props.columnId);

        if (!cell) {
          return null;
        }

        return h(
          Table.Cell as ArkPart,
          {
            ...attrs,
            class: props.class,
            "data-part": "cell",
            "data-scope": "data-grid",
            style: {
              ...columnSizeStyle(cell.column, sizingEnabled),
              ...props.style,
            },
          },
          () => slots.default?.() ?? renderDataGridCell(cell),
        );
      }

      return row.getVisibleCells().map((cell) =>
        h(
          Table.Cell as ArkPart,
          {
            ...attrs,
            class: props.class,
            "data-part": "cell",
            "data-scope": "data-grid",
            key: cell.id,
            style: {
              ...columnSizeStyle(cell.column, sizingEnabled),
              ...props.style,
            },
          },
          () => renderDataGridCell(cell),
        ),
      );
    };
  },
});

export const DataGridEmpty = defineComponent({
  inheritAttrs: false,
  name: "DataGridEmpty",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    colSpan: { default: undefined, type: Number as PropType<number | undefined> },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const { slots: variantSlots, table } =
        useDataGridContextBase() as unknown as DataGridContextValue<RowData>;
      const span = props.colSpan ?? table.getAllColumns().length;

      return h(
        Table.Row as ArkPart,
        { ...attrs, class: props.class, "data-part": "empty", "data-scope": "data-grid" },
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

export const DataGridToolbar = defineComponent({
  inheritAttrs: false,
  name: "DataGridToolbar",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const { slots: variantSlots } =
        useDataGridContextBase() as unknown as DataGridContextValue<RowData>;

      return h(
        "div" as ArkPart,
        {
          ...attrs,
          class: cn(variantSlots.toolbar(), props.class),
          "data-part": "toolbar",
          "data-scope": "data-grid",
        },
        () => slots.default?.(),
      );
    };
  },
});

export const DataGridFooter = defineComponent({
  inheritAttrs: false,
  name: "DataGridFooter",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const { slots: variantSlots } =
        useDataGridContextBase() as unknown as DataGridContextValue<RowData>;

      return h(
        "div" as ArkPart,
        {
          ...attrs,
          class: cn(variantSlots.footer(), props.class),
          "data-part": "footer",
          "data-scope": "data-grid",
        },
        () => slots.default?.(),
      );
    };
  },
});
// #endregion
