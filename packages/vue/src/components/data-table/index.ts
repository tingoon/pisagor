import {
  DataTableBody,
  DataTableCell,
  DataTableEmpty,
  DataTableFooter,
  DataTableHead,
  DataTableHeader,
  DataTableHeaderRow,
  DataTableRoot,
  DataTableRow,
  DataTableToolbar,
  renderDataTableCell,
  useDataTable,
  useDataTableHeaderGroup,
  useDataTableRow,
} from "./data-table";

export type { DataTableProps } from "./data-table";

export const DataTable = Object.assign(DataTableRoot, {
  Body: DataTableBody,
  Cell: DataTableCell,
  Empty: DataTableEmpty,
  Footer: DataTableFooter,
  Head: DataTableHead,
  Header: DataTableHeader,
  HeaderRow: DataTableHeaderRow,
  Row: DataTableRow,
  Toolbar: DataTableToolbar,
});

export { renderDataTableCell, useDataTable, useDataTableHeaderGroup, useDataTableRow };
