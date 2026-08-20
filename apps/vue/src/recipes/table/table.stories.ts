import preview from "#/storybook/preview";
import { TableBulkActions } from "./table-bulk-actions";
import { TablePagination } from "./table-pagination";
import { TableRowMenu } from "./table-row-menu";

const meta = preview.meta({
  component: TableBulkActions,
  parameters: {
    docs: {
      description: {
        component: "Table compositions with bulk actions, row menus, and pagination controls.",
      },
    },
  },
  title: "Recipes/Data/Table",
});

export const BulkActions = meta.story({
  render: () => ({
    components: { TableBulkActions },
    template: `<TableBulkActions />`,
  }),
});

export const RowMenu = meta.story({
  render: () => ({
    components: { TableRowMenu },
    template: `<TableRowMenu />`,
  }),
});

export const Pagination = meta.story({
  render: () => ({
    components: { TablePagination },
    template: `<TablePagination />`,
  }),
});
