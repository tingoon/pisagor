import { TableBulkActionsSource as TableBulkActions } from "./table-bulk-actions";
import { TablePaginationSource as TablePagination } from "./table-pagination";
import { TableRowMenuSource as TableRowMenu } from "./table-row-menu";

export const imports = `import { … } from "@pisagor/solid";`;

export const sources = {
  TableBulkActions,
  TablePagination,
  TableRowMenu,
} as const;
