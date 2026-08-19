import { tv } from "tailwind-variants";

export const tabsListVariants = tv({
  defaultVariants: {
    variant: "default",
  },
  slots: {
    indicator: [
      "absolute inset-s-0 bottom-0",
      "h-(--height) w-(--width)",
      "transition-[width,translate] duration-200 ease-in-out",
      "motion-reduce:transition-none!",
    ],
    list: [
      "relative z-0",
      "w-fit",
      "text-muted-foreground",
      "flex items-center justify-center gap-x-0.5",
      "data-[orientation=vertical]:flex-col",
    ],
  },
  variants: {
    variant: {
      default: {
        indicator: ["-z-1 rounded-lg bg-accent"],
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
          "*:data-[scope=tabs]:data-[part=trigger]:hover:bg-accent",
        ],
      },
    },
  },
});

export const tabsVariants = tv({
  base: ["flex flex-col gap-2", "data-[orientation=vertical]:flex-row"],
});

export const tabsTriggerVariants = tv({
  base: [
    "relative",
    "h-9 sm:h-8",
    "flex shrink-0 grow items-center justify-center gap-1.5",
    "px-[calc(--spacing(2.5)-1px)]",
    "whitespace-nowrap font-medium text-sm",
    "rounded-lg border border-transparent",
    "cursor-pointer",
    "transition-[color,background-color,box-shadow]",
    "data-[orientation=vertical]:w-full data-[orientation=vertical]:justify-start",
    "hover:text-foreground/72",
    "aria-selected:text-foreground",
    "outline-hidden focus-visible:border-primary focus-visible:ring-[3px] focus-visible:ring-ring/32",
    "data-disabled:pointer-events-none data-disabled:opacity-64",
    "[&_svg:not([class*='size-'])]:size-4.5 sm:[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:-mx-0.5 [&_svg]:shrink-0",
    "motion-reduce:transition-none!",
  ],
});

export const tabsContentVariants = tv({
  base: ["flex-1 outline-hidden"],
});
