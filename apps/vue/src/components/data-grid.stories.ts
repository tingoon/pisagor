import { DataGrid } from "@pisagor/vue/data-grid";
import * as Examples from "@pisagor/vue/data-grid/examples";
import { exampleRender } from "#/storybook/example-render";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: DataGrid,
  parameters: {
    docs: {
      description: {
        component:
          "Displays large or interactive tabular datasets with grid behaviors.",
      },
    },
  },
  title: "Components/Data Display/Data Grid",
});

export const Playground = meta.story({
  tags: ["autodocs"],
});

export const ActiveFilterChips = meta.story({
  render: exampleRender(Examples.ActiveFilterChips),
});

export const ColumnFilters = meta.story({
  render: exampleRender(Examples.ColumnFilters),
});

export const ColumnLayout = meta.story({
  render: exampleRender(Examples.ColumnLayout),
});

export const ColumnPinning = meta.story({
  render: exampleRender(Examples.ColumnPinning),
});

export const ColumnResize = meta.story({
  render: exampleRender(Examples.ColumnResize),
});

export const ColumnVisibility = meta.story({
  render: exampleRender(Examples.ColumnVisibility),
});

export const ExpandingRows = meta.story({
  render: exampleRender(Examples.ExpandingRows),
});

export const FilterHead = meta.story({
  render: exampleRender(Examples.FilterHead),
});

export const GlobalSelection = meta.story({
  render: exampleRender(Examples.GlobalSelection),
});

export const GroupedRows = meta.story({
  render: exampleRender(Examples.GroupedRows),
});

export const LoadingState = meta.story({
  render: exampleRender(Examples.LoadingState),
});

export const ManualPagination = meta.story({
  render: exampleRender(Examples.ManualPagination),
});

export const MultiGrouping = meta.story({
  render: exampleRender(Examples.MultiGrouping),
});

export const OrdersWithFooter = meta.story({
  render: exampleRender(Examples.OrdersWithFooter),
});

export const Paginated = meta.story({
  render: exampleRender(Examples.Paginated),
});

export const RichCells = meta.story({
  render: exampleRender(Examples.RichCells),
});

export const RowDetails = meta.story({
  render: exampleRender(Examples.RowDetails),
});

export const RowSelection = meta.story({
  render: exampleRender(Examples.RowSelection),
});

export const Sorting = meta.story({
  render: exampleRender(Examples.Sorting),
});

export const StripedVariant = meta.story({
  render: exampleRender(Examples.StripedVariant),
});

export const Virtualized = meta.story({
  render: exampleRender(Examples.Virtualized),
});

export const WithSortableData = meta.story({
  render: exampleRender(Examples.WithSortableData),
});
