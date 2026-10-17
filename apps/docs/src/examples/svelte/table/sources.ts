import TableBulkActions from "./table-bulk-actions.svelte?raw";
import TablePagination from "./table-pagination.svelte?raw";
import TableRowMenu from "./table-row-menu.svelte?raw";

export const imports = `import { … } from "@pisagor/svelte";`;

export const sources = {
  TableBulkActions,
  TablePagination,
  TableRowMenu,
} as const;
