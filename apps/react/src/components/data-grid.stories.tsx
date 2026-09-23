import { DataGrid } from "@pisagor/react/data-grid";
import * as Examples from "@pisagor/react/data-grid/examples";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: DataGrid,
  parameters: {
    docs: {
      description: {
        component:
          "Displays large or interactive tabular datasets with grid behaviors such as column resize and virtualization. Prefer Data Table for basic lists.",
      },
    },
  },
  title: "Components/Data Display/Data Grid",
});

export const Playground = meta.story({
  render: Examples.ActiveFilterChips,
  tags: ["autodocs"],
});

export const ActiveFilterChips = meta.story({
  render: Examples.ActiveFilterChips,
});

export const ColumnFilters = meta.story({
  render: Examples.ColumnFilters,
});

export const ColumnLayout = meta.story({
  render: Examples.ColumnLayout,
});

export const ColumnPinning = meta.story({
  render: Examples.ColumnPinning,
});

export const ColumnResize = meta.story({
  render: Examples.ColumnResize,
});

export const ColumnVisibility = meta.story({
  render: Examples.ColumnVisibility,
});

export const ExpandingRows = meta.story({
  render: Examples.ExpandingRows,
});

export const GlobalSelection = meta.story({
  render: Examples.GlobalSelection,
});

export const GroupedRows = meta.story({
  render: Examples.GroupedRows,
});

export const LoadingState = meta.story({
  render: Examples.LoadingState,
});

export const ManualPagination = meta.story({
  render: Examples.ManualPagination,
});

export const MultiGrouping = meta.story({
  render: Examples.MultiGrouping,
});

export const OrdersWithFooter = meta.story({
  render: Examples.OrdersWithFooter,
});

export const Paginated = meta.story({
  render: Examples.Paginated,
});

export const RichCells = meta.story({
  render: Examples.RichCells,
});

export const RowDetails = meta.story({
  render: Examples.RowDetails,
});

export const RowSelection = meta.story({
  render: Examples.RowSelection,
});

export const Sorting = meta.story({
  render: Examples.Sorting,
});

export const StripedVariant = meta.story({
  render: Examples.StripedVariant,
});

export const Virtualized = meta.story({
  render: Examples.Virtualized,
});

export const WithSortableData = meta.story({
  render: Examples.WithSortableData,
});
