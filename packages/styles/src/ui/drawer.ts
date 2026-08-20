import { tv, type VariantProps } from "tailwind-variants";

export const drawerOverlayVariants = tv({
  base: [
    "[--overlay-alpha:calc(32%*(1-var(--drawer-swipe-progress)))] [--blur:calc(4px*(1-var(--drawer-swipe-progress)))]",
    "fixed inset-0 z-50",
    "bg-black/(--overlay-alpha) backdrop-blur-(--blur)",
    "data-[state=open]:fade-in-0 data-[state=open]:animate-in",
    "data-[state=closed]:fade-out-0 data-[state=closed]:animate-out",
    "motion-reduce:animate-none!",
  ],
});

export const drawerPositionerVariants = tv({
  base: [
    "fixed inset-0 z-50",
    "flex items-end justify-center",
    "w-screen",
    "has-data-[swipe-direction=up]:items-start",
    "has-data-[swipe-direction=left]:items-stretch has-data-[swipe-direction=left]:justify-start",
    "has-data-[swipe-direction=right]:items-stretch has-data-[swipe-direction=right]:justify-end",
  ],
  defaultVariants: {
    variant: "default",
  },
  variants: {
    variant: {
      default: "",
      inset: "sm:p-4",
    },
  },
});

export const drawerContentVariants = tv({
  base: [
    "[--bleed:3rem] [--space:--spacing(6)]",
    "group/drawer",
    "relative",
    "z-[calc(50+var(--layer-index,0))]",
    "max-h-[calc(80vh+var(--bleed))] w-full",
    "-mb-(--bleed) pb-[calc(1.5rem+env(safe-area-inset-bottom,0)+var(--bleed))]",
    "bg-popover",
    "text-popover-foreground",
    "flex flex-col",
    "duration-300 ease-in-out will-change-transform",
    "data-swiping:select-none",
    "translate-y-[calc(-1.25rem*var(--nested-layer-count))]",
    "scale-[calc(1-0.1*var(--nested-layer-count))] opacity-[calc(1-0.1*var(--nested-layer-count))]",
    "data-[nested=drawer]:data-[state=closed]:slide-in-from-bottom-10 data-[nested=drawer]:data-[state=open]:slide-in-from-bottom-10 data-[has-nested=drawer]:origin-top",
    "motion-reduce:animate-none!",
  ],
  defaultVariants: {
    placement: "down",
    variant: "default",
  },
  variants: {
    placement: {
      down: [
        "data-[state=closed]:slide-out-to-bottom data-[state=closed]:animate-out",
        "data-[state=open]:slide-in-from-bottom data-[state=open]:animate-in",
        "rounded-t-2xl",
      ],
      left: [
        "data-[state=open]:slide-in-from-left data-[state=open]:animate-in",
        "data-[state=closed]:slide-out-to-left data-[state=closed]:animate-out",
        "max-h-none max-w-md",
        "size-full",
        "rounded-e-2xl",
      ],
      right: [
        "data-[state=open]:slide-in-from-right data-[state=open]:animate-in",
        "data-[state=closed]:slide-out-to-right data-[state=closed]:animate-out",
        "max-h-none max-w-md",
        "size-full",
        "rounded-s-2xl",
      ],
      up: [
        "data-[state=open]:slide-in-from-top data-[state=open]:animate-in",
        "data-[state=closed]:slide-out-to-top data-[state=closed]:animate-out",
        "rounded-b-2xl",
      ],
    },
    variant: {
      default: "",
      inset: [
        "sm:rounded-2xl sm:border",
        "sm:**:data-[scope=drawer]:data-[part=footer]:rounded-b-[calc(var(--radius-2xl)-1px)]",
      ],
    },
  },
});

export const drawerContentInnerVariants = tv({
  base: [
    "flex flex-1 flex-col",
    "mx-auto w-full max-w-sm",
    "text-center",
    "transition-opacity duration-300",
    "group-data-[nested=drawer]/drawer:opacity-0 group-data-[nested=drawer]/drawer:data-[state=open]:opacity-100",
    "motion-reduce:transition-none!",
  ],
});

export const drawerGrabberVariants = tv({
  slots: {
    base: [
      "h-1 w-12",
      "mx-auto",
      "hidden shrink-0",
      "bg-muted-foreground/32",
      "rounded-full",
      "touch-none",
      "group-data-[swipe-direction=down]/drawer:flex",
    ],
    indicator: ["size-full rounded-full"],
    wrapper: "p-(--space)",
  },
});

export const drawerHeaderVariants = tv({
  base: [
    "flex flex-col gap-2",
    "p-(--space) pt-0",
    "in-[[data-scope=drawer][data-part=content]:has([data-scope=drawer][data-part=body])]:pb-3",
  ],
});

export const drawerTitleVariants = tv({
  base: ["font-semibold text-lg leading-none"],
});

export const drawerDescriptionVariants = tv({
  base: ["text-muted-foreground text-sm"],
});

export const drawerBodyVariants = tv({
  base: [
    "flex-1",
    "p-(--space)",
    "overflow-auto",
    "in-[[data-scope=drawer][data-part=content]:has([data-scope=drawer][data-part=header])]:pt-0",
    "in-[[data-scope=drawer][data-part=content]:has([data-scope=drawer][data-part=footer]:not(.border-t))]:pb-1",
  ],
});

export const drawerFooterVariants = tv({
  base: [
    "**:data-[scope=drawer]:data-[part=content-inner]:flex-col-reverse **:data-[scope=drawer]:data-[part=content-inner]:gap-2",
    "flex flex-col-reverse gap-2",
    "sm:rounded-none",
    "px-(--space) py-4",
    "bg-muted/48",
    "border-t",
  ],
});

export type DrawerOverlayVariantProps = VariantProps<typeof drawerOverlayVariants>;
export type DrawerOverlayVariants = ReturnType<typeof drawerOverlayVariants>;

export type DrawerPositionerVariantProps = VariantProps<typeof drawerPositionerVariants>;
export type DrawerPositionerVariants = ReturnType<typeof drawerPositionerVariants>;

export type DrawerContentVariantProps = VariantProps<typeof drawerContentVariants>;
export type DrawerContentVariants = ReturnType<typeof drawerContentVariants>;

export type DrawerContentInnerVariantProps = VariantProps<typeof drawerContentInnerVariants>;
export type DrawerContentInnerVariants = ReturnType<typeof drawerContentInnerVariants>;

export type DrawerGrabberVariantProps = VariantProps<typeof drawerGrabberVariants>;
export type DrawerGrabberVariants = ReturnType<typeof drawerGrabberVariants>;
export type DrawerGrabberSlots = keyof DrawerGrabberVariants;

export type DrawerHeaderVariantProps = VariantProps<typeof drawerHeaderVariants>;
export type DrawerHeaderVariants = ReturnType<typeof drawerHeaderVariants>;

export type DrawerTitleVariantProps = VariantProps<typeof drawerTitleVariants>;
export type DrawerTitleVariants = ReturnType<typeof drawerTitleVariants>;

export type DrawerDescriptionVariantProps = VariantProps<typeof drawerDescriptionVariants>;
export type DrawerDescriptionVariants = ReturnType<typeof drawerDescriptionVariants>;

export type DrawerBodyVariantProps = VariantProps<typeof drawerBodyVariants>;
export type DrawerBodyVariants = ReturnType<typeof drawerBodyVariants>;

export type DrawerFooterVariantProps = VariantProps<typeof drawerFooterVariants>;
export type DrawerFooterVariants = ReturnType<typeof drawerFooterVariants>;
