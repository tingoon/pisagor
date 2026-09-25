import { Fragment } from "react";
import preview from "#/storybook/preview";
import { TableBulkActions } from "./table-bulk-actions";
import { TablePagination } from "./table-pagination";
import { TableRowMenu } from "./table-row-menu";

const meta = preview.meta({
  component: Fragment,
  parameters: {
    docs: {
      description: {
        component:
          "Table compositions with bulk actions, row menus, and pagination controls.",
      },
    },
  },
  title: "Recipes/Data/Table",
});

export const Playground = meta.story({
  render: () => <TableBulkActions />,
  tags: ["autodocs"],
});

export const RowMenu = meta.story({
  render: () => <TableRowMenu />,
});

export const Pagination = meta.story({
  render: () => <TablePagination />,
});
