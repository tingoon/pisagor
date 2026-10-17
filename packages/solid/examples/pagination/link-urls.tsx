import source from "./link-urls.tsx?raw";
import { Pagination } from "@pisagor/solid";

export function LinkUrls() {
  return (
    <Pagination count={50} pageSize={10}>
      <Pagination.ItemLink
        getHref={(page) => `/blog/page/${page}`}
        page="previous"
      >
        Previous
      </Pagination.ItemLink>
      <Pagination.ItemLink getHref={(page) => `/blog/page/${page}`} page="next">
        Next
      </Pagination.ItemLink>
    </Pagination>
  );
}

export { source as LinkUrlsSource };
