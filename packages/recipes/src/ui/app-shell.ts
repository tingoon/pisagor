import { tv, type VariantProps } from "tailwind-variants";

export const appShellRecipe = tv({
  slots: {
    banner: ["w-full border-b bg-background"],
    base: [
      "group/app-shell",
      "relative grid w-full min-h-svh bg-muted/50 text-foreground",
      "transition-[grid-template-columns] duration-150 ease-linear motion-reduce:transition-none!",
      "data-resizing:transition-none!",
    ],
    content: [
      "flex flex-col bg-background p-4 md:m-2 md:rounded-xl md:border md:p-6 md:shadow-xs/5",
    ],
    header: ["flex h-14 w-full shrink-0 items-center gap-2 border-b bg-background px-4 md:px-6"],
    inline: ["size-8 shrink-0"],
    inspector: [
      "relative flex flex-col bg-background transition-opacity duration-150 ease-linear",
      "motion-reduce:transition-none!",
    ],
    inspectorContent: ["flex flex-col gap-2 p-3"],
    inspectorFooter: ["mt-auto shrink-0 border-t p-3"],
    inspectorHeader: ["flex shrink-0 flex-col gap-2 border-b p-3"],
    main: ["flex w-full min-w-0 flex-col"],
    navigation: ["flex w-full items-center border-b bg-background px-4 md:px-6"],
    panel: [
      "relative flex flex-col bg-muted text-muted-foreground transition-opacity duration-150 ease-linear",
      "motion-reduce:transition-none!",
    ],
    panelContent: ["flex flex-col gap-1 p-2"],
    panelFooter: ["mt-auto shrink-0 border-t p-3"],
    panelHeader: ["flex shrink-0 flex-col gap-2 border-b p-3"],
    rail: ["flex flex-col items-center gap-2 overflow-hidden border-border bg-muted py-3"],
    railItem: [
      "relative flex size-10 items-center justify-center rounded-lg",
      "text-muted-foreground transition-colors",
      "hover:bg-accent hover:text-accent-foreground",
      "focus-visible:outline-hidden focus-visible:ring-[3px] focus-visible:ring-ring/32",
      "data-[active=true]:bg-background data-[active=true]:text-foreground data-[active=true]:shadow-xs/5",
      "[&_svg:not([class*='size-'])]:size-5 [&_svg]:shrink-0",
      "motion-reduce:transition-none!",
    ],
    regionRelativeColumn: ["relative self-start min-h-svh"],
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
    regionStickyNavigation: ["sticky top-(--app-shell-banner-height,0px) z-20 w-full shrink-0"],
    scrollArea: ["min-h-0 flex-1 [--fade-size:2rem]"],
  },
});

export type AppShellVariantProps = VariantProps<typeof appShellRecipe>;
export type AppShellRecipe = ReturnType<typeof appShellRecipe>;
export type AppShellRecipeSlot = keyof AppShellRecipe;
