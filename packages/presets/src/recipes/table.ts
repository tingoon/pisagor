import { tv, type VariantProps } from "tailwind-variants";

export const tableRecipe = tv({
  defaultVariants: {
    /** Size scale. */
    size: "md",
  },
  slots: {
    base: [
      "group/table",
      "w-full",
      "caption-bottom",
      "text-foreground text-sm",
    ],
    body: "[&_tr:last-child]:border-0",
    caption: ["mt-4", "text-muted-foreground text-sm"],
    cell: [
      "p-2 align-middle whitespace-nowrap",
      "has-[[role=checkbox]]:ps-2 has-[[role=checkbox]]:pe-0",
    ],
    footer: [
      "border-t",
      "bg-muted/48",
      "font-medium",
      "last:[&>tr]:border-b-0",
    ],
    head: [
      "h-10 px-2",
      "text-start align-middle",
      "text-muted-foreground font-medium",
      "",
      "has-[[role=checkbox]]:ps-2 has-[[role=checkbox]]:pe-0",
    ],
    header: "[&_tr]:border-b",
    row: [
      "duration-fast border-b transition-colors ease-out",
      "group-data-[variant=striped]/table:even:bg-muted/30",
      "data-[state=selected]:bg-muted",
      "data-[active=true]:bg-primary/10 data-[active=true]:shadow-[inset_3px_0_0_0_var(--primary)]",
      "group-data-[hoverable=true]/table:[&:has(td):hover:not([data-state=selected]):not([data-active=true])]:bg-muted/48",
      "motion-reduce:transition-none!",
    ],
    wrapper: ["relative w-full overflow-auto"],
  },
  variants: {
    size: {
      lg: {
        base: "text-base",
        cell: "p-3",
        head: "h-12 px-3",
      },
      md: {},
      sm: {
        base: "text-xs",
        cell: "p-1.5",
        head: "h-8 px-1.5",
      },
    },
  },
});

export type TableRecipeFn = typeof tableRecipe;
export type TableRecipe = ReturnType<TableRecipeFn>;
export type TableRecipeSlot = keyof TableRecipe;
export type TableVariantProps = VariantProps<TableRecipeFn>;
