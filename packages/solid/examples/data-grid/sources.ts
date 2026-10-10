import active_filter_chipsRaw from "./active-filter-chips.tsx?raw";
import column_filtersRaw from "./column-filters.tsx?raw";
import column_layoutRaw from "./column-layout.tsx?raw";
import column_pinningRaw from "./column-pinning.tsx?raw";
import column_resizeRaw from "./column-resize.tsx?raw";
import column_visibilityRaw from "./column-visibility.tsx?raw";
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

export const imports = `import { type ColumnDef } from "@pisagor/solid/data-grid";`;

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
