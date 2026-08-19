import { tv } from "tailwind-variants";

export const appShellRailItemVariants = tv({
  base: [
    "relative flex size-10 items-center justify-center rounded-lg",
    "text-muted-foreground transition-colors",
    "hover:bg-accent hover:text-accent-foreground",
    "focus-visible:outline-hidden focus-visible:ring-[3px] focus-visible:ring-ring/32",
    "data-[active=true]:bg-background data-[active=true]:text-foreground data-[active=true]:shadow-xs/5",
    "[&_svg:not([class*='size-'])]:size-5 [&_svg]:shrink-0",
    "motion-reduce:transition-none!",
  ],
});

export const appShellBannerVariants = tv({
  base: ["w-full border-b bg-background"],
});

export const appShellMainVariants = tv({
  base: ["flex w-full min-w-0 flex-col"],
});

export const appShellHeaderVariants = tv({
  base: ["flex h-14 w-full shrink-0 items-center gap-2 border-b bg-background px-4 md:px-6"],
});

export const appShellContentVariants = tv({
  base: ["flex flex-col bg-background p-4 md:m-2 md:rounded-xl md:border md:p-6 md:shadow-xs/5"],
});

export const appShellInlineVariants = tv({
  base: ["size-8 shrink-0"],
});

export const appShellInspectorVariants = tv({
  base: [
    "relative flex flex-col bg-background transition-opacity duration-150 ease-linear",
    "motion-reduce:transition-none!",
  ],
});

export const appShellInspectorHeaderVariants = tv({
  base: ["flex shrink-0 flex-col gap-2 border-b p-3"],
});

export const appShellInspectorContentVariants = tv({
  base: ["flex flex-col gap-2 p-3"],
});

export const appShellInspectorFooterVariants = tv({
  base: ["mt-auto shrink-0 border-t p-3"],
});

export const appShellInline2Variants = tv({
  base: ["min-h-0 flex-1 [--fade-size:2rem]"],
});

export const appShellPanelVariants = tv({
  base: [
    "relative flex flex-col bg-muted text-muted-foreground transition-opacity duration-150 ease-linear",
    "motion-reduce:transition-none!",
  ],
});

export const appShellPanelHeaderVariants = tv({
  base: ["flex shrink-0 flex-col gap-2 border-b p-3"],
});

export const appShellPanelContentVariants = tv({
  base: ["flex flex-col gap-1 p-2"],
});

export const appShellPanelFooterVariants = tv({
  base: ["mt-auto shrink-0 border-t p-3"],
});

export const appShellRailVariants = tv({
  base: ["flex flex-col items-center gap-2 overflow-hidden border-border bg-muted py-3"],
});

export const appShellNavigationVariants = tv({
  base: ["flex w-full items-center border-b bg-background px-4 md:px-6"],
});

export const appShellRegionRelativeColumnVariants = tv({
  base: ["relative self-start min-h-svh"],
});

export const appShellRegionRelativeRowVariants = tv({
  base: ["relative w-full shrink-0"],
});

export const appShellRegionStickyInspectorVariants = tv({
  base: [
    "sticky z-25 self-stretch",
    "top-(--app-shell-banner-height,0px)",
    "max-h-[calc(100svh-var(--app-shell-banner-height,0px))] min-h-[calc(100svh-var(--app-shell-banner-height,0px))]",
  ],
});

export const appShellRegionStickyColumnVariants = tv({
  base: [
    "sticky z-20 self-stretch",
    "top-[calc(var(--app-shell-banner-height,0px)+var(--app-shell-navigation-height,0px))]",
    "max-h-[calc(100svh-var(--app-shell-banner-height,0px)-var(--app-shell-navigation-height,0px))] min-h-[calc(100svh-var(--app-shell-banner-height,0px)-var(--app-shell-navigation-height,0px))]",
  ],
});

export const appShellRegionStickyBannerVariants = tv({
  base: ["sticky top-0 z-30 w-full shrink-0"],
});

export const appShellRegionStickyNavigationVariants = tv({
  base: ["sticky top-(--app-shell-banner-height,0px) z-20 w-full shrink-0"],
});

export const appShellRegionStickyHeaderVariants = tv({
  base: [
    "sticky z-10 w-full shrink-0",
    "top-[calc(var(--app-shell-banner-height,0px)+var(--app-shell-navigation-height,0px))]",
  ],
});

export const appShellVariants = tv({
  base: [
    "group/app-shell",
    "relative grid w-full min-h-svh bg-muted/50 text-foreground",
    "transition-[grid-template-columns] duration-150 ease-linear motion-reduce:transition-none!",
    "data-resizing:transition-none!",
  ],
});
