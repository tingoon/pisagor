import { stripTsxExample } from "@pisagor/utils";
import active_filter_chipsRaw from "./active-filter-chips.tsx?raw";
import column_filtersRaw from "./column-filters.tsx?raw";
import column_layoutRaw from "./column-layout.tsx?raw";
import column_pinningRaw from "./column-pinning.tsx?raw";
import column_resizeRaw from "./column-resize.tsx?raw";
import column_visibilityRaw from "./column-visibility.tsx?raw";
import defaultRaw from "./default.tsx?raw";
import expanding_rowsRaw from "./expanding-rows.tsx?raw";
import global_selectionRaw from "./global-selection.tsx?raw";
import grouped_rowsRaw from "./grouped-rows.tsx?raw";
import loading_stateRaw from "./loading-state.tsx?raw";
import manual_paginationRaw from "./manual-pagination.tsx?raw";
import multi_groupingRaw from "./multi-grouping.tsx?raw";
import orders_with_footerRaw from "./orders-with-footer.tsx?raw";
import paginatedRaw from "./paginated.tsx?raw";
import rich_cellsRaw from "./rich-cells.tsx?raw";
import row_detailsRaw from "./row-details.tsx?raw";
import row_selectionRaw from "./row-selection.tsx?raw";
import sortingRaw from "./sorting.tsx?raw";
import striped_variantRaw from "./striped-variant.tsx?raw";
import virtualizedRaw from "./virtualized.tsx?raw";
import with_sortable_dataRaw from "./with-sortable-data.tsx?raw";

export const imports = `import { DataGrid } from "@pisagor/solid/data-grid";`;

export const sources = {
  ActiveFilterChips: stripTsxExample(active_filter_chipsRaw),
  ColumnFilters: stripTsxExample(column_filtersRaw),
  ColumnLayout: stripTsxExample(column_layoutRaw),
  ColumnPinning: stripTsxExample(column_pinningRaw),
  ColumnResize: stripTsxExample(column_resizeRaw),
  ColumnVisibility: stripTsxExample(column_visibilityRaw),
  Default: stripTsxExample(defaultRaw),
  ExpandingRows: stripTsxExample(expanding_rowsRaw),
  GlobalSelection: stripTsxExample(global_selectionRaw),
  GroupedRows: stripTsxExample(grouped_rowsRaw),
  LoadingState: stripTsxExample(loading_stateRaw),
  ManualPagination: stripTsxExample(manual_paginationRaw),
  MultiGrouping: stripTsxExample(multi_groupingRaw),
  OrdersWithFooter: stripTsxExample(orders_with_footerRaw),
  Paginated: stripTsxExample(paginatedRaw),
  RichCells: stripTsxExample(rich_cellsRaw),
  RowDetails: stripTsxExample(row_detailsRaw),
  RowSelection: stripTsxExample(row_selectionRaw),
  Sorting: stripTsxExample(sortingRaw),
  StripedVariant: stripTsxExample(striped_variantRaw),
  Virtualized: stripTsxExample(virtualizedRaw),
  WithSortableData: stripTsxExample(with_sortable_dataRaw),
} as const;

export * from "./active-filter-chips";
export * from "./column-filters";
export * from "./column-layout";
export * from "./column-pinning";
export * from "./column-resize";
export * from "./column-visibility";
export * from "./default";
export * from "./expanding-rows";
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
