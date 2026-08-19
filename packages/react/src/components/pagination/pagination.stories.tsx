import { CaretLeftIcon, CaretRightIcon } from "@phosphor-icons/react";
import { Pagination } from "@pisagor/react/pagination";
import { useState } from "react";
import preview from "#/react/preview";

const meta = preview.meta({
  component: Pagination,
  parameters: {
    docs: {
      aliases: ["pager"],
      api: "compound",
      checklist: {
        accessibleColor: true,
        definedBehaviors: true,
        definedOptions: true,
        interactiveStates: true,
        keyboardInteractions: true,
        platformScales: true,
      },
      description: {
        component:
          "Moves through long lists or result sets page by page with previous, next, and numbered links.",
      },
      taxonomy: "standard",
    },
  },
  subcomponents: {
    Ellipsis: Pagination.Ellipsis,
    Item: Pagination.Item,
    ItemLink: Pagination.ItemLink,
    Items: Pagination.Items,
    Next: Pagination.Next,
    Previous: Pagination.Previous,
  },
  title: "Components/Navigation/Pagination",
});

export const Default = meta.story({
  args: {
    count: 50,
    pageSize: 10,
  },
});

export const Links = meta.story({
  render: () => (
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
  ),
});

export const PageRange = meta.story({
  args: {
    count: 100,
    page: 6,
    pageSize: 10,
  },
});

export const CustomComposition = meta.story({
  render: () => (
    <Pagination count={50} pageSize={10}>
      <Pagination.Previous />
      <Pagination.Items />
      <Pagination.Next />
    </Pagination>
  ),
});

export const Controlled = meta.story({
  render: () => {
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
  },
});
