import { tv } from "tailwind-variants";

export const appShellRecipe = tv({
  slots: {
    banner: [
      "border-border/40 bg-background/72 w-full border-b",
      "backdrop-blur-xl backdrop-saturate-150",
      "transparency-reduce:bg-background transparency-reduce:backdrop-blur-none transparency-reduce:backdrop-saturate-100",
      "contrast-more:border-border contrast-more:bg-background contrast-more:backdrop-blur-none",
    ],
    base: [
      "group/app-shell",
      "bg-muted/40 text-foreground relative grid min-h-svh w-full",
      "duration-normal transition-all ease-out motion-reduce:transition-none!",
      "data-resizing:transition-none!",
    ],
    content: [
      "bg-card md:border-border/50 flex flex-col p-4 md:m-2 md:rounded-2xl md:border md:p-6 md:shadow-sm",
    ],
    header: [
      "border-border/40 bg-background/72 flex h-14 w-full shrink-0 items-center gap-2 border-b px-4 md:px-6",
      "backdrop-blur-xl backdrop-saturate-150",
      "transparency-reduce:bg-background transparency-reduce:backdrop-blur-none transparency-reduce:backdrop-saturate-100",
      "contrast-more:border-border contrast-more:bg-background contrast-more:backdrop-blur-none",
    ],
    inline: ["size-8 shrink-0"],
    inspector: [
      "bg-card duration-normal relative flex flex-col transition-opacity ease-out",
      "motion-reduce:transition-none!",
    ],
    inspectorContent: ["flex flex-col gap-2 p-3"],
    inspectorFooter: ["border-border/40 mt-auto shrink-0 border-t p-3"],
    inspectorHeader: [
      "border-border/40 flex shrink-0 flex-col gap-2 border-b p-3",
    ],
    main: ["flex w-full min-w-0 flex-col"],
    navigation: [
      "border-border/40 bg-background/72 flex w-full items-center border-b px-4 md:px-6",
      "backdrop-blur-xl backdrop-saturate-150",
      "transparency-reduce:bg-background transparency-reduce:backdrop-blur-none transparency-reduce:backdrop-saturate-100",
      "contrast-more:border-border contrast-more:bg-background contrast-more:backdrop-blur-none",
    ],
    panel: [
      "bg-muted/80 text-muted-foreground duration-normal relative flex flex-col transition-opacity ease-out",
      "motion-reduce:transition-none!",
    ],
    panelContent: ["flex flex-col gap-1 p-2"],
    panelFooter: ["border-border/40 mt-auto shrink-0 border-t p-3"],
    panelHeader: ["border-border/40 flex shrink-0 flex-col gap-2 border-b p-3"],
    rail: [
      "border-border/40 bg-muted/80 flex flex-col items-center gap-2 overflow-hidden py-3",
    ],
    railItem: [
      "relative flex size-10 items-center justify-center rounded-xl",
      "text-muted-foreground duration-fast transition ease-out",
      "hover:bg-accent hover:text-accent-foreground",
      "active:scale-97",
      "focus-visible:ring-0.75 focus-visible:ring-ring/24 focus-visible:outline-hidden",
      "data-[active=true]:bg-card data-[active=true]:text-foreground data-[active=true]:shadow-xs",
      "[&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-5",
      "motion-reduce:transition-none! motion-reduce:active:scale-100",
    ],
    regionRelativeColumn: ["relative min-h-svh self-start"],
    regionRelativeRow: ["relative w-full shrink-0"],
    regionStickyBanner: ["sticky top-0 z-30 w-full shrink-0"],
    regionStickyColumn: [
      "sticky z-20 self-stretch",
      "top-[calc(var(--app-shell-banner-height,0px)+var(--app-shell-navigation-height,0px))]",
      "max-h-[calc(100svh-var(--app-shell-banner-height,0px)-var(--app-shell-navigation-height,0px))] min-h-[calc(100svh-var(--app-shell-banner-height,0px)-var(--app-shell-navigation-height,0px))]",
    ],
    regionStickyHeader: [
      "sticky z-10 w-full shrink-0",
      "top-[calc(var(--app-shell-banner-height,0px)+var(--app-shell-navigation-height,0px))]",
    ],
    regionStickyInspector: [
      "sticky z-25 self-stretch",
      "top-(--app-shell-banner-height,0px)",
      "max-h-[calc(100svh-var(--app-shell-banner-height,0px))] min-h-[calc(100svh-var(--app-shell-banner-height,0px))]",
    ],
    regionStickyNavigation: [
      "sticky top-(--app-shell-banner-height,0px) z-20 w-full shrink-0",
    ],
    scrollArea: ["min-h-0 flex-1 [--fade-size:2rem]"],
    /** Fills panel / inspector column; do not reuse `inline` (trigger sizing). */
    sideBody: ["flex min-h-0 min-w-0 flex-1 flex-col"],
  },
});

export type AppShellRecipeFn = typeof appShellRecipe;
export type AppShellRecipe = ReturnType<AppShellRecipeFn>;
export type AppShellRecipeSlot = keyof AppShellRecipe;
