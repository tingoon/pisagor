/** @jsxImportSource solid-js */
import { Pagination } from "@pisagor/solid/pagination";

export function PageRange() {
  return <Pagination count={100} page={6} pageSize={10} />;
}
