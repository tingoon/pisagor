import TableBody from "./table-body.svelte";
import TableCaption from "./table-caption.svelte";
import TableCell from "./table-cell.svelte";
import TableFooter from "./table-footer.svelte";
import TableHead from "./table-head.svelte";
import TableHeader from "./table-header.svelte";
import TableRoot from "./table-root.svelte";
import TableRow from "./table-row.svelte";

export const Table = Object.assign(TableRoot, {
  Body: TableBody,
  Caption: TableCaption,
  Cell: TableCell,
  Footer: TableFooter,
  Head: TableHead,
  Header: TableHeader,
  Row: TableRow,
});
