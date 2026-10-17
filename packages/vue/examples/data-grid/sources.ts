import ActiveFilterChips from "./active-filter-chips.vue?raw";
import ColumnFilters from "./column-filters.vue?raw";
import ColumnLayout from "./column-layout.vue?raw";
import ColumnPinning from "./column-pinning.vue?raw";
import ColumnResize from "./column-resize.vue?raw";
import ColumnVisibility from "./column-visibility.vue?raw";
import ExpandingRows from "./expanding-rows.vue?raw";
import GlobalSelection from "./global-selection.vue?raw";
import GroupedRows from "./grouped-rows.vue?raw";
import LoadingState from "./loading-state.vue?raw";
import ManualPagination from "./manual-pagination.vue?raw";
import MultiGrouping from "./multi-grouping.vue?raw";
import OrdersWithFooter from "./orders-with-footer.vue?raw";
import Paginated from "./paginated.vue?raw";
import RichCells from "./rich-cells.vue?raw";
import RowDetails from "./row-details.vue?raw";
import RowSelection from "./row-selection.vue?raw";
import Sorting from "./sorting.vue?raw";
import StripedVariant from "./striped-variant.vue?raw";
import Virtualized from "./virtualized.vue?raw";
import WithSortableData from "./with-sortable-data.vue?raw";

export const imports = `import { DataGrid } from "@pisagor/vue/data-grid";`;

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
