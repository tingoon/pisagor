import ActiveFilterChips from "./active-filter-chips.svelte?raw";
import ColumnFilters from "./column-filters.svelte?raw";
import ColumnLayout from "./column-layout.svelte?raw";
import ColumnPinning from "./column-pinning.svelte?raw";
import ColumnResize from "./column-resize.svelte?raw";
import ColumnVisibility from "./column-visibility.svelte?raw";
import ExpandingRows from "./expanding-rows.svelte?raw";
import GlobalSelection from "./global-selection.svelte?raw";
import GroupedRows from "./grouped-rows.svelte?raw";
import LoadingState from "./loading-state.svelte?raw";
import ManualPagination from "./manual-pagination.svelte?raw";
import MultiGrouping from "./multi-grouping.svelte?raw";
import OrdersWithFooter from "./orders-with-footer.svelte?raw";
import Paginated from "./paginated.svelte?raw";
import RichCells from "./rich-cells.svelte?raw";
import RowDetails from "./row-details.svelte?raw";
import RowSelection from "./row-selection.svelte?raw";
import Sorting from "./sorting.svelte?raw";
import StripedVariant from "./striped-variant.svelte?raw";
import Virtualized from "./virtualized.svelte?raw";
import WithSortableData from "./with-sortable-data.svelte?raw";

export const imports = `import { DataGrid } from "@pisagor/svelte/data-grid";`;

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
