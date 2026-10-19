import { CaretLeftIcon, CaretRightIcon } from "@phosphor-icons/react";
import { Button, Pagination } from "@pisagor/react";

export function CustomComposition() {
  return (
    <Pagination.Root count={50} pageSize={10}>
      <Pagination.PrevTrigger asChild>
        <Button variant="ghost">
          <CaretLeftIcon />
          Previous
        </Button>
      </Pagination.PrevTrigger>
      <Pagination.Context>
        {({ pages }) =>
          pages.map((page, index) =>
            page.type === "page" ? (
              <Pagination.Item
                asChild
                key={page.value}
                type="page"
                value={page.value}
              >
                <Button size="icon-md" variant="ghost">
                  {page.value}
                </Button>
              </Pagination.Item>
            ) : (
              // biome-ignore lint/suspicious/noArrayIndexKey: ellipses are positional.
              <Pagination.Ellipsis index={index} key={`ellipsis-${index}`} />
            ),
          )
        }
      </Pagination.Context>
      <Pagination.NextTrigger asChild>
        <Button variant="ghost">
          Next
          <CaretRightIcon />
        </Button>
      </Pagination.NextTrigger>
    </Pagination.Root>
  );
}
