import active_filter_chipsRaw from "./active-filter-chips.svelte?raw";
import column_filtersRaw from "./column-filters.svelte?raw";
import column_layoutRaw from "./column-layout.svelte?raw";
import column_pinningRaw from "./column-pinning.svelte?raw";
import column_resizeRaw from "./column-resize.svelte?raw";
import column_visibilityRaw from "./column-visibility.svelte?raw";
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
