import { tv } from "tailwind-variants";

export const tourRecipe = tv({
  slots: {
    actionTrigger: [],
    actions: ["flex flex-wrap gap-2"],
    arrow: [],
    arrowTip: ["border-s border-t"],
    backdrop: [
      "z-modal fixed inset-0",
      "bg-overlay/32 backdrop-blur-sm",
      "ease-out duration-initial",
      "data-[state=open]:fade-in-0 data-[state=open]:animate-in",
      "data-[state=closed]:fade-out-0 data-[state=closed]:animate-out",
      "transparency-reduce:backdrop-blur-none",
      "motion-reduce:animate-none!",
    ],
    base: [],
    body: [
      "flex-1",
      "p-(--space)",
      "overflow-auto",
      "in-[[data-scope=tour][data-part=content]:has([data-scope=tour][data-part=header])]:pt-0",
    ],
    close: ["absolute inset-e-4 top-4"],
    closeButton: ["size-8 border-none opacity-70 hover:opacity-100"],
    closeLabel: "sr-only",
    closeTrigger: [],
    control: [
      "flex flex-col-reverse flex-wrap gap-2 sm:flex-row sm:justify-end",
      "px-(--space) py-4",
      "border-border/40 border-t",
    ],
    content: [
      "[--space:--spacing(4)]",
      "z-[calc(var(--z-index-modal)+var(--layer-index,0))]",
      "relative",
      "w-full max-w-md",
      "flex flex-col gap-4",
      "bg-background",
      "rounded-lg border shadow-lg",
      "focus:ring-0 focus:outline-hidden",
      "data-[state=closed]:animate-out data-[state=open]:animate-in",
      "data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0",
      "data-[state=open]:zoom-in-98 data-[state=closed]:zoom-out-98",
      "motion-reduce:animate-none!",
    ],
    description: ["text-muted-foreground text-sm"],
    header: [
      "p-(--space)",
      "flex flex-col gap-2",
      "in-[[data-scope=tour][data-part=content]:has([data-scope=tour][data-part=body])]:pb-3",
    ],
    positioner: [
      "z-modal",
      "flex items-center justify-center",
      "data-[type=dialog]:fixed data-[type=dialog]:inset-0",
      "data-[type=tooltip]:absolute",
    ],
    progressText: ["text-muted-foreground text-sm"],
    spotlight: ["z-modal border-primary border-2"],
    title: ["text-base leading-none font-semibold tracking-tight"],
  },
});

export type TourRecipeFn = typeof tourRecipe;
export type TourRecipe = ReturnType<TourRecipeFn>;
export type TourRecipeSlot = keyof TourRecipe;
