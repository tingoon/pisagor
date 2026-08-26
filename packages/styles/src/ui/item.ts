import { tv, type VariantProps } from "tailwind-variants";

export const itemVariants = tv({
  defaultVariants: {
    variant: "default",
  },
  slots: {
    actions: ["flex items-center gap-2"],
    base: [
      "[--space:--spacing(3)]",
      "group/item",
      "flex w-full flex-wrap items-center",
      "gap-(--space) p-(--space)",
      "in-[[data-scope=menu][data-part=list]]:p-0",
      "text-sm",
      "rounded-xl border",
      "transition-colors duration-100",
      "[a]:transition-colors [a]:hover:bg-muted",
      "outline-hidden focus-visible:border-primary focus-visible:ring-[3px] focus-visible:ring-ring/32",
      "[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
    ],
    content: ["flex flex-1 flex-col gap-0.5", "[&+[data-scope=item][data-part=content]]:flex-none"],
    description: [
      "line-clamp-2 text-left font-normal text-muted-foreground text-sm leading-normal",
      "[&>a:hover]:text-primary",
      "[&>a]:underline [&>a]:underline-offset-4",
    ],
    footer: ["flex basis-full items-center justify-between gap-2"],
    group: ["group/item-group", "flex w-full flex-col gap-4"],
    header: [
      "flex basis-full items-center justify-between gap-2",
      "[&_img]:size-full [&_img]:rounded-xl [&_img]:object-cover",
    ],
    media: [
      "flex shrink-0 items-center justify-center gap-2",
      "group-has-[[data-scope=item][data-part=description]]/item:translate-y-0.5 group-has-[[data-scope=item][data-part=description]]/item:self-start",
      "[&_svg]:pointer-events-none",
    ],
    separator: "my-2",
    title: [
      "w-fit",
      "flex items-center gap-2",
      "line-clamp-1 font-medium text-sm leading-snug",
      "underline-offset-4",
    ],
  },
  variants: {
    variant: {
      default: {
        base: "border-transparent",
        media: "bg-transparent",
      },
      icon: {
        media: ["[&_svg:not([class*='size-'])]:size-4"],
      },
      image: {
        media: [
          "size-10",
          "rounded-xl",
          "overflow-hidden",
          "[&_img]:size-full [&_img]:object-cover",
        ],
      },
      muted: {
        base: "border-transparent bg-muted/48 shadow-muted/5 shadow-xs",
      },
      outline: {
        base: "border-border shadow-xs/5",
      },
    },
  },
});

export type ItemVariantProps = VariantProps<typeof itemVariants>;
export type ItemVariants = ReturnType<typeof itemVariants>;
export type ItemSlots = keyof ItemVariants;
