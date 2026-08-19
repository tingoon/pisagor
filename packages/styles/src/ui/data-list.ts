import { tv } from "tailwind-variants";

export const dataListVariants = tv({
  slots: {
    item: [
      "flex gap-4 py-2",
      "group-data-[orientation=horizontal]/data-list:flex-row group-data-[orientation=horizontal]/data-list:items-center",
      "group-data-[orientation=vertical]/data-list:flex-col group-data-[orientation=vertical]/data-list:gap-1",
    ],
    label: [
      "min-w-24 shrink-0",
      "font-medium text-muted-foreground",
      "group-data-[orientation=vertical]/data-list:min-w-0",
    ],
    root: ["group/data-list", "flex flex-col gap-1", "text-sm"],
    value: ["flex-1", "text-foreground"],
  },
});
