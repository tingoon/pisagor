import active_filter_chipsRaw from "./active-filter-chips.vue?raw";
import column_filtersRaw from "./column-filters.vue?raw";
import column_layoutRaw from "./column-layout.vue?raw";
import column_pinningRaw from "./column-pinning.vue?raw";
import column_resizeRaw from "./column-resize.vue?raw";
import column_visibilityRaw from "./column-visibility.vue?raw";
import expanding_rowsRaw from "./expanding-rows.vue?raw";
import global_selectionRaw from "./global-selection.vue?raw";
import grouped_rowsRaw from "./grouped-rows.vue?raw";
import loading_stateRaw from "./loading-state.vue?raw";
import manual_paginationRaw from "./manual-pagination.vue?raw";
import multi_groupingRaw from "./multi-grouping.vue?raw";
import orders_with_footerRaw from "./orders-with-footer.vue?raw";
import paginatedRaw from "./paginated.vue?raw";
import rich_cellsRaw from "./rich-cells.vue?raw";
import row_detailsRaw from "./row-details.vue?raw";
import row_selectionRaw from "./row-selection.vue?raw";
import sortingRaw from "./sorting.vue?raw";
import striped_variantRaw from "./striped-variant.vue?raw";
import virtualizedRaw from "./virtualized.vue?raw";
import with_sortable_dataRaw from "./with-sortable-data.vue?raw";

export const imports = `import { DataGrid } from "@pisagor/vue/data-grid";`;

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
