import active_filter_chipsRaw from "./active-filter-chips.ts?raw";
import column_filtersRaw from "./column-filters.ts?raw";
import column_layoutRaw from "./column-layout.ts?raw";
import column_pinningRaw from "./column-pinning.ts?raw";
import column_resizeRaw from "./column-resize.ts?raw";
import column_visibilityRaw from "./column-visibility.ts?raw";
import expanding_rowsRaw from "./expanding-rows.ts?raw";
import filter_headRaw from "./filter-head.ts?raw";
import global_selectionRaw from "./global-selection.ts?raw";
import grouped_rowsRaw from "./grouped-rows.ts?raw";
import loading_stateRaw from "./loading-state.ts?raw";
import manual_paginationRaw from "./manual-pagination.ts?raw";
import multi_groupingRaw from "./multi-grouping.ts?raw";
import orders_with_footerRaw from "./orders-with-footer.ts?raw";
import paginatedRaw from "./paginated.ts?raw";
import rich_cellsRaw from "./rich-cells.ts?raw";
import row_detailsRaw from "./row-details.ts?raw";
import row_selectionRaw from "./row-selection.ts?raw";
import sortingRaw from "./sorting.ts?raw";
import striped_variantRaw from "./striped-variant.ts?raw";
import virtualizedRaw from "./virtualized.ts?raw";
import with_sortable_dataRaw from "./with-sortable-data.ts?raw";

export const imports = `import { DataGrid } from "@pisagor/vue/data-grid";`;

export const sources = {
  ActiveFilterChips: active_filter_chipsRaw,
  ColumnFilters: column_filtersRaw,
  ColumnLayout: column_layoutRaw,
  ColumnPinning: column_pinningRaw,
  ColumnResize: column_resizeRaw,
  ColumnVisibility: column_visibilityRaw,
  ExpandingRows: expanding_rowsRaw,
  FilterHead: filter_headRaw,
  GlobalSelection: global_selectionRaw,
  GroupedRows: grouped_rowsRaw,
  LoadingState: loading_stateRaw,
  ManualPagination: manual_paginationRaw,
  MultiGrouping: multi_groupingRaw,
  OrdersWithFooter: orders_with_footerRaw,
  Paginated: paginatedRaw,
  RichCells: rich_cellsRaw,
  RowDetails: row_detailsRaw,
  RowSelection: row_selectionRaw,
  Sorting: sortingRaw,
  StripedVariant: striped_variantRaw,
  Virtualized: virtualizedRaw,
  WithSortableData: with_sortable_dataRaw,
} as const;

export * from "./active-filter-chips";
export * from "./column-filters";
export * from "./column-layout";
export * from "./column-pinning";
export * from "./column-resize";
export * from "./column-visibility";
export * from "./expanding-rows";
export * from "./filter-head";
export * from "./global-selection";
export * from "./grouped-rows";
export * from "./loading-state";
export * from "./manual-pagination";
export * from "./multi-grouping";
export * from "./orders-with-footer";
export * from "./paginated";
export * from "./rich-cells";
export * from "./row-details";
export * from "./row-selection";
export * from "./sorting";
export * from "./striped-variant";
export * from "./virtualized";
export * from "./with-sortable-data";
