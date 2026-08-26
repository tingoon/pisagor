import { tv, type VariantProps } from "tailwind-variants";

export const navigationMenuVariants = tv({
  slots: {
    base: ["group/navigation-menu", "w-full"],
    item: ["shrink-0"],
    link: [
      "inline-flex items-center gap-2",
      "rounded-md px-3 py-2",
      "font-medium text-sm",
      "text-muted-foreground",
      "outline-hidden",
      "transition-colors duration-100 motion-reduce:transition-none!",
      "hover:text-foreground",
      "focus-visible:ring-[3px] focus-visible:ring-ring/32",
      "data-[active=true]:bg-accent data-[active=true]:text-accent-foreground",
    ],
    list: ["flex flex-wrap items-center gap-1"],
  },
});

export type NavigationMenuVariantProps = VariantProps<typeof navigationMenuVariants>;
export type NavigationMenuVariants = ReturnType<typeof navigationMenuVariants>;
export type NavigationMenuSlots = keyof NavigationMenuVariants;
