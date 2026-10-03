/** @jsxImportSource solid-js */
import { Pagination } from "@pisagor/solid/pagination";

export function CustomComposition() {
  return (
    <Pagination count={50} pageSize={10}>
      <Pagination.PrevTrigger />
      <Pagination.Items />
      <Pagination.NextTrigger />
    </Pagination>
  );
}
