import { Pagination } from "@pisagor/react";

export function CustomComposition() {
  return (
    <Pagination count={50} pageSize={10}>
      <Pagination.PrevTrigger />
      <Pagination.Items />
      <Pagination.NextTrigger />
    </Pagination>
  );
}
