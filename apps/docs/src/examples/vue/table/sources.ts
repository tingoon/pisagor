import table_bulk_actionsRaw from "./table-bulk-actions.ts?raw";
import table_paginationRaw from "./table-pagination.ts?raw";
import table_row_menuRaw from "./table-row-menu.ts?raw";

export const sources = {
  TableBulkActions: table_bulk_actionsRaw,
  TablePagination: table_paginationRaw,
  TableRowMenu: table_row_menuRaw,
} as const;
