import { tv, type VariantProps } from "tailwind-variants";

export const itemVariants = tv({
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
  defaultVariants: {
    variant: "default",
  },
  variants: {
    variant: {
      default: "border-transparent",
      muted: "border-transparent bg-muted/48 shadow-muted/5 shadow-xs",
      outline: "border-border shadow-xs/5",
    },
  },
});

export const itemMediaVariants = tv({
  base: [
    "flex shrink-0 items-center justify-center gap-2",
    "group-has-[[data-scope=item][data-part=description]]/item:translate-y-0.5 group-has-[[data-scope=item][data-part=description]]/item:self-start",
    "[&_svg]:pointer-events-none",
  ],
  defaultVariants: {
    variant: "default",
  },
  variants: {
    variant: {
      default: "bg-transparent",
      icon: ["[&_svg:not([class*='size-'])]:size-4"],
      image: ["size-10", "rounded-xl", "overflow-hidden", "[&_img]:size-full [&_img]:object-cover"],
    },
  },
});

export const itemGroupVariants = tv({
  base: ["group/item-group", "flex w-full flex-col gap-4"],
});

export const itemSeparatorVariants = tv({
  base: "my-2",
});

export const itemContentVariants = tv({
  base: ["flex flex-1 flex-col gap-0.5", "[&+[data-scope=item][data-part=content]]:flex-none"],
});

export const itemTitleVariants = tv({
  base: [
    "w-fit",
    "flex items-center gap-2",
    "line-clamp-1 font-medium text-sm leading-snug",
    "underline-offset-4",
  ],
});

export const itemDescriptionVariants = tv({
  base: [
    "line-clamp-2 text-left font-normal text-muted-foreground text-sm leading-normal",
    "[&>a:hover]:text-primary",
    "[&>a]:underline [&>a]:underline-offset-4",
  ],
});

export const itemActionsVariants = tv({
  base: ["flex items-center gap-2"],
});

export const itemHeaderVariants = tv({
  base: [
    "flex basis-full items-center justify-between gap-2",
    "[&_img]:size-full [&_img]:rounded-xl [&_img]:object-cover",
  ],
});

export const itemFooterVariants = tv({
  base: ["flex basis-full items-center justify-between gap-2"],
});

export const itemInlineVariants = tv({
  base: ["flex flex-col gap-0.5"],
});

export type ItemVariantProps = VariantProps<typeof itemVariants>;
export type ItemVariants = ReturnType<typeof itemVariants>;

export type ItemMediaVariantProps = VariantProps<typeof itemMediaVariants>;
export type ItemMediaVariants = ReturnType<typeof itemMediaVariants>;

export type ItemGroupVariantProps = VariantProps<typeof itemGroupVariants>;
export type ItemGroupVariants = ReturnType<typeof itemGroupVariants>;

export type ItemSeparatorVariantProps = VariantProps<typeof itemSeparatorVariants>;
export type ItemSeparatorVariants = ReturnType<typeof itemSeparatorVariants>;

export type ItemContentVariantProps = VariantProps<typeof itemContentVariants>;
export type ItemContentVariants = ReturnType<typeof itemContentVariants>;

export type ItemTitleVariantProps = VariantProps<typeof itemTitleVariants>;
export type ItemTitleVariants = ReturnType<typeof itemTitleVariants>;

export type ItemDescriptionVariantProps = VariantProps<typeof itemDescriptionVariants>;
export type ItemDescriptionVariants = ReturnType<typeof itemDescriptionVariants>;

export type ItemActionsVariantProps = VariantProps<typeof itemActionsVariants>;
export type ItemActionsVariants = ReturnType<typeof itemActionsVariants>;

export type ItemHeaderVariantProps = VariantProps<typeof itemHeaderVariants>;
export type ItemHeaderVariants = ReturnType<typeof itemHeaderVariants>;

export type ItemFooterVariantProps = VariantProps<typeof itemFooterVariants>;
export type ItemFooterVariants = ReturnType<typeof itemFooterVariants>;

export type ItemInlineVariantProps = VariantProps<typeof itemInlineVariants>;
export type ItemInlineVariants = ReturnType<typeof itemInlineVariants>;
