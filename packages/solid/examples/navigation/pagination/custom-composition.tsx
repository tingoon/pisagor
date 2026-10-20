import {
  CaretLeftIcon,
  CaretRightIcon,
  DotsThreeIcon,
} from "@squidlab/phosphor-solid/icons";
import { Button, Pagination } from "@pisagor/solid";
import { For, Show } from "solid-js";

export function CustomComposition() {
  return (
    <Pagination.Root count={50} pageSize={10}>
      <Pagination.PrevTrigger
        asChild={(props) => (
          <Button {...props()} variant="ghost">
            <CaretLeftIcon />
            Previous
          </Button>
        )}
      />
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
                  <Pagination.Item
                    type="page"
                    value={pageItem().value}
                    asChild={(props) => (
                      <Button {...props()} size="icon-md" variant="ghost">
                        {pageItem().value}
                      </Button>
                    )}
                  />
                )}
              </Show>
            )}
          </For>
        )}
      </Pagination.Context>
      <Pagination.NextTrigger
        asChild={(props) => (
          <Button {...props()} variant="ghost">
            Next
            <CaretRightIcon />
          </Button>
        )}
      />
    </Pagination.Root>
  );
}
