import { tv } from "tailwind-variants";

export const sidebarWrapperVariants = tv({
  base: ["group/sidebar-wrapper", "flex", "min-h-svh w-full", "has-data-[variant=inset]:bg-muted"],
});

export const sidebarVariants = tv({
  base: ["h-full w-(--sidebar-width)", "flex flex-col", "bg-muted", "text-muted-foreground"],
});

export const sidebar2Variants = tv({
  base: ["w-(--sidebar-width)", "p-0", "bg-muted", "text-muted-foreground", "[&>button]:hidden"],
});

export const sidebar3Variants = tv({
  base: ["group peer", "hidden md:block", "text-muted-foreground"],
});

export const sidebarGapVariants = tv({
  base: [
    "relative",
    "w-(--sidebar-width)",
    "bg-transparent",
    "transition-[width] duration-200 ease-linear",
    "group-data-[collapsible=offcanvas]:w-0",
    "group-data-[placement=right]:rotate-180",
    "motion-reduce:transition-none!",
  ],
  variants: {
    padded: {
      false: "group-data-[collapsible=icon]:w-(--sidebar-width-icon)",
      true: "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]",
    },
  },
});

export const sidebarContainerVariants = tv({
  base: [
    "fixed inset-y-0 z-10",
    "w-(--sidebar-width)",
    "hidden md:flex",
    "h-svh",
    "transition-[inset-inline-start,inset-inline-end,width] duration-200 ease-linear",
    "motion-reduce:transition-none!",
  ],
  variants: {
    padded: {
      false:
        "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[placement=right]:border-s group-data-[placement=left]:border-e",
      true: "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]",
    },
    placement: {
      left: "inset-s-0 group-data-[collapsible=offcanvas]:-inset-s-(--sidebar-width)",
      right: "inset-e-0 group-data-[collapsible=offcanvas]:-inset-e-(--sidebar-width)",
    },
  },
});

export const sidebarInnerVariants = tv({
  base: [
    "size-full",
    "flex flex-col",
    "bg-muted",
    "group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:border-border group-data-[variant=floating]:shadow-xs",
  ],
});

export const sidebarTriggerVariants = tv({
  base: "size-7",
});

export const sidebarRailVariants = tv({
  base: [
    "absolute inset-y-0 z-20 -translate-x-1/2",
    "w-4",
    "hidden sm:flex",
    "transition-all ease-linear",
    "after:absolute after:inset-s-1/2 after:inset-y-0 after:w-[2px]",
    "hover:after:bg-border",
    "group-data-[placement=left]:-inset-e-4 group-data-[placement=right]:inset-s-0",
    "in-data-[placement=left]:cursor-w-resize in-data-[placement=right]:cursor-e-resize",
    "[[data-placement=left][data-state=collapsed]_&]:cursor-e-resize [[data-placement=right][data-state=collapsed]_&]:cursor-w-resize",
    "group-data-[collapsible=offcanvas]:translate-x-0 hover:group-data-[collapsible=offcanvas]:bg-muted group-data-[collapsible=offcanvas]:after:inset-s-full",
    "[[data-placement=left][data-collapsible=offcanvas]_&]:-inset-e-2",
    "[[data-placement=right][data-collapsible=offcanvas]_&]:-inset-s-2",
    "motion-reduce:transition-none!",
  ],
});

export const sidebarInsetVariants = tv({
  base: [
    "relative flex w-full flex-1 flex-col bg-background",
    "md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ms-2",
    "md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ms-0",
    "md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-xs",
  ],
});

export const sidebarInputVariants = tv({
  base: ["h-8 w-full bg-background shadow-none"],
});

export const sidebarHeaderVariants = tv({
  base: ["flex flex-col gap-2 p-2"],
});

export const sidebarFooterVariants = tv({
  base: ["flex flex-col gap-2 p-2"],
});

export const sidebarSeparatorVariants = tv({
  base: ["mx-2 w-auto bg-border"],
});

export const sidebarContentVariants = tv({
  base: [
    "min-h-0",
    "flex flex-1 flex-col gap-2",
    "overflow-auto",
    "group-data-[collapsible=icon]:overflow-hidden",
  ],
});

export const sidebarGroupVariants = tv({
  base: ["relative flex w-full min-w-0 flex-col p-2"],
});

export const sidebarGroupLabelVariants = tv({
  base: [
    "h-8",
    "px-2",
    "flex shrink-0 items-center",
    "font-medium text-muted-foreground/70 text-xs",
    "rounded-md",
    "transition-[margin,opacity] duration-200 ease-linear",
    "outline-hidden ring-ring focus-visible:ring-2",
    "[&_svg]:size-4 [&_svg]:shrink-0",
    "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
    "motion-reduce:transition-none!",
  ],
});

export const sidebarGroupActionVariants = tv({
  base: [
    "absolute inset-e-3 top-3.5",
    "text-muted-foreground",
    "transition-transform",
    "hover:bg-accent hover:text-accent-foreground",
    "[&_svg]:size-4 [&_svg]:shrink-0",
    "after:absolute after:-inset-2 md:after:hidden",
    "group-data-[collapsible=icon]:hidden",
    "motion-reduce:transition-none!",
  ],
});

export const sidebarGroupContentVariants = tv({
  base: ["w-full text-sm"],
});

export const sidebarMenuVariants = tv({
  base: ["w-full min-w-0", "flex flex-col gap-0"],
});

export const sidebarMenuItemVariants = tv({
  base: ["group/menu-item relative"],
});

export const sidebarMenuButtonVariants = tv({
  base: [
    "peer/menu-button group/menu-button",
    "w-full",
    "justify-start gap-2",
    "p-2",
    "overflow-hidden",
    "transition-[width,height,padding]",
    "data-[size=sm]:text-xs",
    "data-[size=lg]:h-12",
    "group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2!",
    "data-[size=lg]:group-data-[collapsible=icon]:p-0!",
    "hover:bg-accent hover:text-accent-foreground",
    "focus-visible:ring-[3px] outline-hidden focus-visible:ring-ring/32",
    "active:bg-accent active:text-accent-foreground",
    "data-[active=true]:bg-accent data-[active=true]:font-medium data-[active=true]:text-accent-foreground",
    "group-has-data-[sidebar=menu-action]/menu-item:pe-8",
    "[&>span:last-child]:truncate",
    "motion-reduce:transition-none!",
  ],
});

export const sidebarMenuActionVariants = tv({
  base: [
    "absolute inset-e-1 top-1.5",
    "text-muted-foreground",
    "transition-transform",
    "hover:bg-accent hover:text-accent-foreground",
    "peer-hover/menu-button:text-accent-foreground",
    "after:absolute after:-inset-2 md:after:hidden",
    "peer-data-[size=lg]/menu-button:top-2.5 peer-data-[size=md]/menu-button:top-1.5 peer-data-[size=sm]/menu-button:top-1",
    "group-data-[collapsible=icon]:hidden",
    "[&_svg]:size-4 [&_svg]:shrink-0",
    "motion-reduce:transition-none!",
  ],
});

export const sidebarMenuBadgeVariants = tv({
  base: [
    "absolute inset-e-1",
    "flex items-center justify-center",
    "px-1",
    "h-5 min-w-5",
    "rounded-md",
    "select-none font-medium text-muted-foreground text-xs tabular-nums",
    "pointer-events-none",
    "peer-hover/menu-button:text-accent-foreground",
    "peer-data-[active=true]/menu-button:text-accent-foreground",
    "peer-data-[size=lg]/menu-button:top-2.5",
    "peer-data-[size=md]/menu-button:top-1.5",
    "peer-data-[size=sm]/menu-button:top-1",
    "group-data-[collapsible=icon]:hidden",
  ],
});

export const sidebarMenuSkeletonVariants = tv({
  base: ["flex h-8 items-center gap-2 rounded-md px-2"],
});

export const sidebarMenuSubVariants = tv({
  base: [
    "mx-3.5 flex min-w-0 flex-col gap-1 px-2.5 py-0.5 ltr:translate-x-px rtl:-translate-x-px",
    "border-border border-s",
    "group-data-[collapsible=icon]:hidden",
  ],
});

export const sidebarMenuSubItemVariants = tv({
  base: ["group/menu-sub-item relative"],
});

export const sidebarMenuSubButtonVariants = tv({
  base: [
    "w-full min-w-0",
    "justify-start",
    "px-2",
    "text-muted-foreground",
    "overflow-hidden",
    "ltr:-translate-x-px rtl:translate-x-px",
    "hover:bg-accent hover:text-accent-foreground",
    "active:bg-accent active:text-accent-foreground",
    "data-[active=true]:bg-accent data-[active=true]:text-accent-foreground",
    "focus-visible:ring-[3px] outline-hidden focus-visible:ring-ring/32",
    "[&>span:last-child]:truncate",
    "[&_svg]:text-accent-foreground",
  ],
});

export const sidebarInlineVariants = tv({
  base: "sr-only",
});

export const sidebarInline2Variants = tv({
  base: ["flex size-full flex-col"],
});

export const sidebarInline3Variants = tv({
  base: "rtl:rotate-180",
});

export const sidebarInline4Variants = tv({
  base: "sr-only",
});

export const sidebarInline5Variants = tv({
  base: ["[--fade-size:3rem] **:data-[scope=scroll-area]:data-[part=scrollbar]:hidden"],
});

export const sidebarInline6Variants = tv({
  base: ["size-4 rounded-md"],
});

export const sidebarInline7Variants = tv({
  base: ["h-4 max-w-(--skeleton-width) flex-1"],
});
