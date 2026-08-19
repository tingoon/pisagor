import {
  DataGridBody,
  DataGridCell,
  DataGridEmpty,
  DataGridFooter,
  DataGridHead,
  DataGridHeader,
  DataGridHeaderRow,
  DataGridColumnResizer as DataGridResizer,
  DataGridRoot,
  DataGridRow,
  DataGridRowProvider,
  DataGridToolbar,
  DataGridVirtualBody,
  renderDataGridCell,
  useDataGrid,
  useDataGridHeaderGroup,
  useDataGridRow,
} from "./data-grid";

export type { DataGridProps } from "./data-grid";

export const DataGrid = Object.assign(DataGridRoot, {
  Body: DataGridBody,
  Cell: DataGridCell,
  ColumnResizer: DataGridResizer,
  Empty: DataGridEmpty,
  Footer: DataGridFooter,
  Head: DataGridHead,
  Header: DataGridHeader,
  HeaderRow: DataGridHeaderRow,
  Row: DataGridRow,
  RowProvider: DataGridRowProvider,
  Toolbar: DataGridToolbar,
  VirtualBody: DataGridVirtualBody,
});

export { renderDataGridCell, useDataGrid, useDataGridHeaderGroup, useDataGridRow };
