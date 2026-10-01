/** @jsxImportSource solid-js */

import { Pagination } from "@pisagor/solid/pagination";
import { createSignal } from "solid-js";
export function Controlled() {
  const [page, setPage] = createSignal(1);

  return (
    <div class="flex flex-col gap-2">
      <Pagination
        count={50}
        onPageChange={(details) => setPage(details.page)}
        page={page()}
        pageSize={10}
      />
      <p class="text-center text-muted-foreground text-sm">
        Page {page()} of 5
      </p>
    </div>
  );
}
