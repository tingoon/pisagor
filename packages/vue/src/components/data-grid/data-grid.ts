import {
  dataGridColumnResizerVariants,
  dataGridFilterHeadVariants,
  dataGridFooterVariants,
  dataGridInline2Variants,
  dataGridInline3Variants,
  dataGridInlineVariants,
  dataGridToolbarVariants,
  dataGridVariants,
} from "@pisagor/styles/ui/data-grid";
import { cn } from "@pisagor/utils";
import {
  type Cell,
  type Column,
  type ColumnResizeMode,
  getCoreRowModel,
  type Header,
  type HeaderGroup,
  type Row,
  type TableOptions,
  type Table as TableType,
  useVueTable,
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

type ArkPart = Parameters<typeof h>[0];

// #region Types
interface DataGridContextValue<TData> {
  table: TableType<TData>;
}

interface DataGridHeaderGroupContextValue<TData> {
  headerGroup: HeaderGroup<TData>;
}

interface DataGridHeaderCellContextValue<TData> {
  header: Header<TData, unknown>;
}

interface DataGridRowContextValue<TData> {
  row: Row<TData>;
}

export type DataGridProps<TData = unknown> = Omit<TableOptions<TData>, "getCoreRowModel"> & {
  getCoreRowModel?: TableOptions<TData>["getCoreRowModel"];
  class?: unknown;
};

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
  DataGridContextValue<unknown>
>({
  name: "DataGrid",
});

const [provideDataGridHeaderGroupContext, useDataGridHeaderGroupContextBase] = createContext<
  DataGridHeaderGroupContextValue<unknown>
>({
  name: "DataGridHeaderGroup",
});

const [provideDataGridHeaderCellContext, useDataGridHeaderCellContextBase] = createContext<
  DataGridHeaderCellContextValue<unknown>
>({
  name: "DataGridHeaderCell",
  strict: false,
});

const [provideDataGridRowContext, useDataGridRowContextBase] = createContext<
  DataGridRowContextValue<unknown>
>({
  name: "DataGridRow",
});

/**
 * Returns the TanStack Table instance from the nearest DataGrid context.
 *
 * @typeParam TData - Row shape for the table context.
 * @returns The table instance for the current row model.
 */
export function useDataGrid<TData>() {
  return useDataGridContextBase() as unknown as DataGridContextValue<TData>["table"];
}

/**
 * Returns the header group from the nearest DataGrid.Header context.
 *
 * @typeParam TData - Row shape for the table context.
 * @returns The active header group.
 */
export function useDataGridHeaderGroup<TData>() {
  return useDataGridHeaderGroupContextBase() as unknown as HeaderGroup<TData>;
}

/**
 * Returns the row from the nearest DataGrid.Row context.
 *
 * @typeParam TData - Row shape for the table context.
 * @returns The active table row.
 */
export function useDataGridRow<TData>() {
  return useDataGridRowContextBase() as unknown as Row<TData>;
}

function useDataGridHeaderCellContext<TData>() {
  return useDataGridHeaderCellContextBase() as DataGridHeaderCellContextValue<TData> | undefined;
}

function columnSizeStyle(
  column: Column<unknown, unknown>,
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
export function renderDataGridCell<TData>(cell: Cell<TData, unknown>): VNodeChild {
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
          return (
            key in attrs ||
            key === "columnResizeMode" ||
            key === "data" ||
            key === "getCoreRowModel"
          );
        },
        ownKeys() {
          return Array.from(
            new Set([...Reflect.ownKeys(attrs), "columnResizeMode", "data", "getCoreRowModel"]),
          );
        },
      },
    ) as TableOptions<unknown>;

    const table = useVueTable(options);
    const contextValue = computed<DataGridContextValue<unknown>>(() => ({ table }));

    provideDataGridContext(contextValue);

    return () =>
      h(
        "div" as ArkPart,
        {
          class: cn(dataGridVariants(), props.class),
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
      const { table } = useDataGridContextBase() as unknown as DataGridContextValue<unknown>;

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
    headerGroup: { required: true, type: Object as PropType<HeaderGroup<unknown>> },
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
    header: { required: true, type: Object as PropType<Header<unknown, unknown>> },
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
      const headerCell = useDataGridHeaderCellContext<unknown>();

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
          dataGridColumnResizerVariants(),
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
  header: Header<unknown, unknown>,
  props: DataGridHeadProps,
  attrs: Record<string, unknown>,
  slots: { default?: () => VNodeChild },
  table: TableType<unknown>,
) {
  const sizingEnabled = Boolean(table.options.enableColumnResizing);
  const headClass = cn(
    props.filter && dataGridFilterHeadVariants(),
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
          ...columnSizeStyle(header.column as Column<unknown, unknown>, sizingEnabled),
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
        useDataGridHeaderGroupContextBase() as unknown as DataGridHeaderGroupContextValue<unknown>;
      const { table } = useDataGridContextBase() as unknown as DataGridContextValue<unknown>;

      if (props.columnId) {
        const header = headerGroup.headers.find((item) => item.column.id === props.columnId);

        if (!header) {
          return null;
        }

        return renderHeadCell(header, props, attrs, slots, table);
      }

      return headerGroup.headers.map((header) =>
        renderHeadCell(header, props, attrs, slots, table),
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
      const { table } = useDataGridContextBase() as unknown as DataGridContextValue<unknown>;
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
    row: { required: true, type: Object as PropType<Row<unknown>> },
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

    const { table } = useDataGridContextBase() as unknown as DataGridContextValue<unknown>;

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
        return [h("tr", { class: dataGridInlineVariants(), ref: anchorRef }), props.empty ?? null];
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
          : h("tr", { class: dataGridInline2Variants(), ref: anchorRef }),
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
      const { row } = useDataGridRowContextBase() as unknown as DataGridRowContextValue<unknown>;

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
      const { table } = useDataGridContextBase() as unknown as DataGridContextValue<unknown>;
      const { row } = useDataGridRowContextBase() as unknown as DataGridRowContextValue<unknown>;
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
              ...columnSizeStyle(cell.column as Column<unknown, unknown>, sizingEnabled),
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
              ...columnSizeStyle(cell.column as Column<unknown, unknown>, sizingEnabled),
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
      const { table } = useDataGridContextBase() as unknown as DataGridContextValue<unknown>;
      const span = props.colSpan ?? table.getAllColumns().length;

      return h(
        Table.Row as ArkPart,
        { ...attrs, class: props.class, "data-part": "empty", "data-scope": "data-grid" },
        () =>
          h(
            Table.Cell as ArkPart,
            { class: dataGridInline3Variants(), colSpan: span },
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
    return () =>
      h(
        "div" as ArkPart,
        {
          ...attrs,
          class: cn(dataGridToolbarVariants(), props.class),
          "data-part": "toolbar",
          "data-scope": "data-grid",
        },
        () => slots.default?.(),
      );
  },
});

export const DataGridFooter = defineComponent({
  inheritAttrs: false,
  name: "DataGridFooter",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        "div" as ArkPart,
        {
          ...attrs,
          class: cn(dataGridFooterVariants(), props.class),
          "data-part": "footer",
          "data-scope": "data-grid",
        },
        () => slots.default?.(),
      );
  },
});
// #endregion
