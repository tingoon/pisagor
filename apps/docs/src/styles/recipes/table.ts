import { tv } from "tailwind-variants";

export const tableBulkActionsBlock = tv({
  slots: {
    actions: "ml-auto flex gap-2",
    check: "w-12",
    deleteItem: "py-1 text-sm",
    id: "font-medium",
    root: "rounded-lg border",
    srOnly: "sr-only",
    status: "capitalize",
  },
});

export const tablePaginationBlock = tv({
  slots: {
    pageSize: "flex shrink-0 items-center gap-2",
    pageSizeLabel: "text-muted-foreground text-sm",
    pagination: "flex-1 justify-end",
    root: "flex flex-col gap-2 rounded-xl border p-4",
    toolbar: "flex items-center justify-between gap-22",
  },
});

export const tableRowMenuBlock = tv({
  slots: {
    menu: "min-w-40",
    name: "font-medium",
    srOnly: "sr-only",
  },
});
