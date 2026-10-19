import { Pagination } from "@pisagor/solid";

export function LinkUrls() {
  return (
    <Pagination.Root count={50} pageSize={10}>
      <Pagination.ItemLink
        getHref={(page) => `/blog/page/${page}`}
        page="previous"
      >
        Previous
      </Pagination.ItemLink>
      <Pagination.ItemLink getHref={(page) => `/blog/page/${page}`} page="next">
        Next
      </Pagination.ItemLink>
    </Pagination.Root>
  );
}
