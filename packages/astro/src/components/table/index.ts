import TableRoot from "./table.astro";
import TableBody from "./table-body.astro";
import TableCaption from "./table-caption.astro";
import TableCell from "./table-cell.astro";
import TableFooter from "./table-footer.astro";
import TableHead from "./table-head.astro";
import TableHeader from "./table-header.astro";
import TableRow from "./table-row.astro";

export const Table = Object.assign(TableRoot, {
  Body: TableBody,
  Caption: TableCaption,
  Cell: TableCell,
  Footer: TableFooter,
  Head: TableHead,
  Header: TableHeader,
  Row: TableRow,
});
