import { tv, type VariantProps } from "tailwind-variants";

export const emptyStateVariants = tv({
  slots: {
    actions: ["mt-2", "flex flex-wrap items-center justify-center gap-2"],
    description: ["max-w-prose", "text-balance text-muted-foreground text-sm"],
    media: [
      "mb-2",
      "flex size-12 items-center justify-center",
      "rounded-full bg-muted text-muted-foreground",
      "[&_svg:not([class*='size-'])]:size-5 [&_svg]:pointer-events-none [&_svg]:shrink-0",
    ],
    root: [
      "group/empty-state",
      "flex w-full flex-col items-center justify-center gap-2",
      "rounded-xl border border-dashed bg-muted/24",
      "p-8 text-center",
    ],
    title: ["font-medium text-foreground text-lg/6"],
  },
});
export type EmptyStateVariantProps = VariantProps<typeof emptyStateVariants>;
