import { tv, type VariantProps } from "tailwind-variants";

export const tabsRecipe = tv({
  defaultVariants: {
    /** Size scale. */
    size: "md",
    /** Visual emphasis. */
    variant: "default",
  },
  slots: {
    base: ["flex flex-col gap-2", "data-[orientation=vertical]:flex-row"],
    content: ["flex-1 outline-hidden"],
    indicator: [
      "absolute inset-s-0 bottom-0",
      "h-(--height) w-(--width)",
      "duration-normal ease-emphasized transition-all",
      "motion-reduce:transition-none!",
    ],
    list: [
      "relative z-0",
      "w-fit",
      "text-muted-foreground",
      "flex items-center justify-center gap-x-0.5",
      "data-[orientation=vertical]:flex-col",
    ],
    trigger: [
      "relative",
      "flex shrink-0 grow items-center justify-center gap-1.5",
      "px-2.5",
      "text-sm font-medium whitespace-nowrap",
      "rounded-lg border border-transparent",
      "cursor-pointer",
      "duration-fast transition ease-out",
      "data-[orientation=vertical]:w-full data-[orientation=vertical]:justify-start",
      "hover:text-foreground/72",
      "aria-selected:text-foreground",
      "focus-visible:border-primary focus-visible:ring-0.75 focus-visible:ring-ring/24 outline-hidden",
      "data-disabled:pointer-events-none data-disabled:opacity-64",
      "[&_svg]:pointer-events-none [&_svg]:-mx-0.5 [&_svg]:shrink-0",
      "motion-reduce:transition-none!",
    ],
  },
  variants: {
    size: {
      lg: {
        trigger: "h-10 px-3 text-base [&_svg:not([class*='size-'])]:size-5",
      },
      md: {
        trigger: "h-8 [&_svg:not([class*='size-'])]:size-4",
      },
      sm: {
        trigger: "h-7 px-2 text-xs [&_svg:not([class*='size-'])]:size-3.5",
      },
    },
    variant: {
      default: {
        indicator: ["bg-card -z-1 rounded-lg shadow-sm"],
        list: ["rounded-lg"],
      },
      underline: {
        indicator: [
          "z-10",
          "absolute bottom-0",
          "bg-primary",
          "data-[orientation=horizontal]:h-0.5",
          "data-[orientation=vertical]:w-0.5",
        ],
        list: [
          "data-[orientation=vertical]:px-1",
          "data-[orientation=horizontal]:py-1",
          "*:data-[scope=tabs]:data-[part=trigger]:hover:bg-muted",
        ],
      },
    },
  },
});

export type TabsRecipeFn = typeof tabsRecipe;
export type TabsVariantProps = VariantProps<TabsRecipeFn>;
export type TabsRecipe = ReturnType<TabsRecipeFn>;
export type TabsRecipeSlot = keyof TabsRecipe;
