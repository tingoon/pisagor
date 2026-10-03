import { stripVueExample } from "@pisagor/utils";
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
  ActiveFilterChips: stripVueExample(active_filter_chipsRaw),
  ColumnFilters: stripVueExample(column_filtersRaw),
  ColumnLayout: stripVueExample(column_layoutRaw),
  ColumnPinning: stripVueExample(column_pinningRaw),
  ColumnResize: stripVueExample(column_resizeRaw),
  ColumnVisibility: stripVueExample(column_visibilityRaw),
  ExpandingRows: stripVueExample(expanding_rowsRaw),
  FilterHead: stripVueExample(filter_headRaw),
  GlobalSelection: stripVueExample(global_selectionRaw),
  GroupedRows: stripVueExample(grouped_rowsRaw),
  LoadingState: stripVueExample(loading_stateRaw),
  ManualPagination: stripVueExample(manual_paginationRaw),
  MultiGrouping: stripVueExample(multi_groupingRaw),
  OrdersWithFooter: stripVueExample(orders_with_footerRaw),
  Paginated: stripVueExample(paginatedRaw),
  RichCells: stripVueExample(rich_cellsRaw),
  RowDetails: stripVueExample(row_detailsRaw),
  RowSelection: stripVueExample(row_selectionRaw),
  Sorting: stripVueExample(sortingRaw),
  StripedVariant: stripVueExample(striped_variantRaw),
  Virtualized: stripVueExample(virtualizedRaw),
  WithSortableData: stripVueExample(with_sortable_dataRaw),
} as const;

export { ActiveFilterChips } from "./active-filter-chips";
export { ColumnFilters } from "./column-filters";
export { ColumnLayout } from "./column-layout";
export { ColumnPinning } from "./column-pinning";
export { ColumnResize } from "./column-resize";
export { ColumnVisibility } from "./column-visibility";
export { ExpandingRows } from "./expanding-rows";
export { FilterHead } from "./filter-head";
export { GlobalSelection } from "./global-selection";
export { GroupedRows } from "./grouped-rows";
export { LoadingState } from "./loading-state";
export { ManualPagination } from "./manual-pagination";
export { MultiGrouping } from "./multi-grouping";
export { OrdersWithFooter } from "./orders-with-footer";
export { Paginated } from "./paginated";
export { RichCells } from "./rich-cells";
export { RowDetails } from "./row-details";
export { RowSelection } from "./row-selection";
export { Sorting } from "./sorting";
export { StripedVariant } from "./striped-variant";
export { Virtualized } from "./virtualized";
export { WithSortableData } from "./with-sortable-data";
