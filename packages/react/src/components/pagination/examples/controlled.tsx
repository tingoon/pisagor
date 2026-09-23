import { useState } from "react";
import { Pagination } from "..";

export function Controlled() {
  const [page, setPage] = useState(1);

  return (
    <div className="flex flex-col gap-2">
      <Pagination
        count={50}
        onPageChange={(details) => setPage(details.page)}
        page={page}
        pageSize={10}
      />
      <p className="text-center text-muted-foreground text-sm">Page {page} of 5</p>
    </div>
  );
}
