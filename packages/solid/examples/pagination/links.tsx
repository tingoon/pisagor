/** @jsxImportSource solid-js */

import { Pagination } from "@pisagor/solid";
import { CaretLeftIcon, CaretRightIcon } from "@pisagor/solid/icons";

export function Links() {
  return (
    <Pagination count={50} pageSize={10}>
      <Pagination.ItemLink page="previous">
        <CaretLeftIcon />
        Previous
      </Pagination.ItemLink>
      <Pagination.Items />
      <Pagination.ItemLink page="next">
        Next
        <CaretRightIcon />
      </Pagination.ItemLink>
    </Pagination>
  );
}
