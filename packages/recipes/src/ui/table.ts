import { tv, type VariantProps } from "tailwind-variants";

export const tableRecipe = tv({
  slots: {
    base: ["group/table", "w-full", "caption-bottom", "text-foreground text-sm"],
    body: "[&_tr:last-child]:border-0",
    caption: ["mt-4", "text-muted-foreground text-sm"],
    cell: [
      "whitespace-nowrap p-2 align-middle",
      "has-[[role=checkbox]]:ps-2 has-[[role=checkbox]]:pe-0",
    ],
    footer: ["border-t", "bg-muted/48", "font-medium", "last:[&>tr]:border-b-0"],
    head: [
      "h-10 px-2",
      "text-left align-middle",
      "font-medium text-muted-foreground",
      "rtl:text-right",
      "has-[[role=checkbox]]:ps-2 has-[[role=checkbox]]:pe-0",
    ],
    header: "[&_tr]:border-b",
    row: [
      "border-b transition-colors",
      "group-data-[variant=striped]/table:even:bg-muted/30",
      "data-[state=selected]:bg-muted",
      "data-[active=true]:bg-primary/10 data-[active=true]:shadow-[inset_3px_0_0_0_var(--primary)]",
      "group-data-[hoverable=true]/table:[&:has(td):hover:not([data-state=selected]):not([data-active=true])]:bg-muted/48",
    ],
    wrapper: ["relative w-full overflow-auto"],
  },
});

export type TableVariantProps = VariantProps<typeof tableRecipe>;
export type TableSlots = ReturnType<typeof tableRecipe>;
