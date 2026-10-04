import active_filter_chipsRaw from "./active-filter-chips.svelte?raw";
import column_filtersRaw from "./column-filters.svelte?raw";
import column_layoutRaw from "./column-layout.svelte?raw";
import column_pinningRaw from "./column-pinning.svelte?raw";
import column_resizeRaw from "./column-resize.svelte?raw";
import column_visibilityRaw from "./column-visibility.svelte?raw";
import defaultRaw from "./default.svelte?raw";
import expanding_rowsRaw from "./expanding-rows.svelte?raw";
import global_selectionRaw from "./global-selection.svelte?raw";
import grouped_rowsRaw from "./grouped-rows.svelte?raw";
import loading_stateRaw from "./loading-state.svelte?raw";
import manual_paginationRaw from "./manual-pagination.svelte?raw";
import multi_groupingRaw from "./multi-grouping.svelte?raw";
import orders_with_footerRaw from "./orders-with-footer.svelte?raw";
import paginatedRaw from "./paginated.svelte?raw";
import rich_cellsRaw from "./rich-cells.svelte?raw";
import row_detailsRaw from "./row-details.svelte?raw";
import row_selectionRaw from "./row-selection.svelte?raw";
import sortingRaw from "./sorting.svelte?raw";
import striped_variantRaw from "./striped-variant.svelte?raw";
import virtualizedRaw from "./virtualized.svelte?raw";
import with_sortable_dataRaw from "./with-sortable-data.svelte?raw";

export const imports = `import { DataGrid } from "@pisagor/svelte/data-grid";`;

export const sources = {
  ActiveFilterChips: active_filter_chipsRaw,
  ColumnFilters: column_filtersRaw,
  ColumnLayout: column_layoutRaw,
  ColumnPinning: column_pinningRaw,
  ColumnResize: column_resizeRaw,
  ColumnVisibility: column_visibilityRaw,
  Default: defaultRaw,
  ExpandingRows: expanding_rowsRaw,
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

export { default as ActiveFilterChips } from "./active-filter-chips.svelte";
export { default as ColumnFilters } from "./column-filters.svelte";
export { default as ColumnLayout } from "./column-layout.svelte";
export { default as ColumnPinning } from "./column-pinning.svelte";
export { default as ColumnResize } from "./column-resize.svelte";
export { default as ColumnVisibility } from "./column-visibility.svelte";
export { default as Default } from "./default.svelte";
export { default as ExpandingRows } from "./expanding-rows.svelte";
export { default as GlobalSelection } from "./global-selection.svelte";
export { default as GroupedRows } from "./grouped-rows.svelte";
export { default as LoadingState } from "./loading-state.svelte";
export { default as ManualPagination } from "./manual-pagination.svelte";
export { default as MultiGrouping } from "./multi-grouping.svelte";
export { default as OrdersWithFooter } from "./orders-with-footer.svelte";
export { default as Paginated } from "./paginated.svelte";
export { default as RichCells } from "./rich-cells.svelte";
export { default as RowDetails } from "./row-details.svelte";
export { default as RowSelection } from "./row-selection.svelte";
export { default as Sorting } from "./sorting.svelte";
export { default as StripedVariant } from "./striped-variant.svelte";
export { default as Virtualized } from "./virtualized.svelte";
export { default as WithSortableData } from "./with-sortable-data.svelte";
