import { tv } from "tailwind-variants";

export const navbarRecipe = tv({
  slots: {
    actions: ["flex shrink-0 items-center gap-2"],
    base: [
      "group/navbar",
      "flex w-full items-center gap-4",
      "min-h-14 shrink-0",
      "border-b border-border/40 bg-background/72 px-4 md:px-6",
      "backdrop-blur-xl backdrop-saturate-150",
      "shadow-[0_1px_0_0_rgb(255_255_255/0.5)] dark:shadow-[0_1px_0_0_rgb(255_255_255/0.06)]",
      "transparency-reduce:bg-background transparency-reduce:backdrop-blur-none transparency-reduce:backdrop-saturate-100 transparency-reduce:shadow-none",
      "contrast-more:border-border contrast-more:bg-background contrast-more:backdrop-blur-none contrast-more:shadow-none",
    ],
    brand: ["flex shrink-0 items-center gap-2 font-semibold tracking-tight"],
    content: ["flex min-w-0 flex-1 items-center"],
    nav: ["flex min-w-0 flex-1 items-center"],
  },
});

export type NavbarRecipeFn = typeof navbarRecipe;
export type NavbarRecipe = ReturnType<NavbarRecipeFn>;
export type NavbarRecipeSlot = keyof NavbarRecipe;
