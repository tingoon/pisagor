import {
  CaretLeftIcon,
  CaretRightIcon,
  DotsThreeIcon,
} from "@phosphor-icons/react";
import { Pagination } from "@pisagor/react";

export function Links() {
  return (
    <Pagination.Root count={50} pageSize={10}>
      <Pagination.ItemLink page="previous">
        <CaretLeftIcon />
        Previous
      </Pagination.ItemLink>
      <Pagination.Context>
        {({ pages }) =>
          pages.map((page, index) =>
            page.type === "page" ? (
              <Pagination.ItemLink
                key={page.value}
                page={page.value}
                size="icon-md"
              >
                {page.value}
              </Pagination.ItemLink>
            ) : (
              // biome-ignore lint/suspicious/noArrayIndexKey: ellipses are positional.
              <Pagination.Ellipsis index={index} key={`ellipsis-${index}`}>
                <DotsThreeIcon />
              </Pagination.Ellipsis>
            ),
          )
        }
      </Pagination.Context>
      <Pagination.ItemLink page="next">
        Next
        <CaretRightIcon />
      </Pagination.ItemLink>
    </Pagination.Root>
  );
}
