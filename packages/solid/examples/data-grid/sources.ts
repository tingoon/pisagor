import { ActiveFilterChipsSource as ActiveFilterChips } from "./active-filter-chips";
import { ColumnFiltersSource as ColumnFilters } from "./column-filters";
import { ColumnLayoutSource as ColumnLayout } from "./column-layout";
import { ColumnPinningSource as ColumnPinning } from "./column-pinning";
import { ColumnResizeSource as ColumnResize } from "./column-resize";
import { ColumnVisibilitySource as ColumnVisibility } from "./column-visibility";
import { ExpandingRowsSource as ExpandingRows } from "./expanding-rows";
import { GlobalSelectionSource as GlobalSelection } from "./global-selection";
import { GroupedRowsSource as GroupedRows } from "./grouped-rows";
import { LoadingStateSource as LoadingState } from "./loading-state";
import { ManualPaginationSource as ManualPagination } from "./manual-pagination";
import { MultiGroupingSource as MultiGrouping } from "./multi-grouping";
import { OrdersWithFooterSource as OrdersWithFooter } from "./orders-with-footer";
import { PaginatedSource as Paginated } from "./paginated";
import { RichCellsSource as RichCells } from "./rich-cells";
import { RowDetailsSource as RowDetails } from "./row-details";
import { RowSelectionSource as RowSelection } from "./row-selection";
import { SortingSource as Sorting } from "./sorting";
import { StripedVariantSource as StripedVariant } from "./striped-variant";
import { VirtualizedSource as Virtualized } from "./virtualized";
import { WithSortableDataSource as WithSortableData } from "./with-sortable-data";

export const imports = `import { type ColumnDef } from "@pisagor/solid/data-grid";`;

export const sources = {
  ActiveFilterChips,
  ColumnFilters,
  ColumnLayout,
  ColumnPinning,
  ColumnResize,
  ColumnVisibility,
  ExpandingRows,
  GlobalSelection,
  GroupedRows,
  LoadingState,
  ManualPagination,
  MultiGrouping,
  OrdersWithFooter,
  Paginated,
  RichCells,
  RowDetails,
  RowSelection,
  Sorting,
  StripedVariant,
  Virtualized,
  WithSortableData,
} as const;
