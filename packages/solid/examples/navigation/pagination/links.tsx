import {
  CaretLeftIcon,
  CaretRightIcon,
  DotsThreeIcon,
} from "@squidlab/phosphor-solid/icons";
import { Pagination } from "@pisagor/solid";
import { For, Show } from "solid-js";

export function Links() {
  return (
    <Pagination.Root count={50} pageSize={10}>
      <Pagination.ItemLink page="previous">
        <CaretLeftIcon />
        Previous
      </Pagination.ItemLink>
      <Pagination.Context>
        {(api) => (
          <For each={api().pages}>
            {(page, index) => (
              <Show
                fallback={
                  <Pagination.Ellipsis index={index()}>
                    <DotsThreeIcon />
                  </Pagination.Ellipsis>
                }
                when={page.type === "page" ? page : undefined}
              >
                {(pageItem) => (
                  <Pagination.ItemLink page={pageItem().value} size="icon-md">
                    {pageItem().value}
                  </Pagination.ItemLink>
                )}
              </Show>
            )}
          </For>
        )}
      </Pagination.Context>
      <Pagination.ItemLink page="next">
        Next
        <CaretRightIcon />
      </Pagination.ItemLink>
    </Pagination.Root>
  );
}
