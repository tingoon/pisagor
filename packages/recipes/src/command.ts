import { tv } from "tailwind-variants";

export const commandRecipe = tv({
  slots: {
    base: [
      "isolate",
      "flex min-h-0 flex-1 flex-col",
      "p-2",
      "bg-popover",
      "text-popover-foreground",
      "rounded-2xl border",
    ],
    content: [
      "flex flex-1 flex-col",
      "max-h-(--available-height) min-h-0",
      "-me-2",
      "outline-hidden",
      "scrollbar-thin scrollbar-track-transparent scrollbar-thumb-foreground/20 overflow-auto overscroll-contain",
      "[:not(.has-[+[data-scope=command][data-part=footer]])]:rounded-b-2xl [:not(.has-[+[data-scope=command][data-part=footer]])]:border-b",
    ],
    control: ["group/combobox-control", "relative mb-2 flex flex-wrap items-center gap-1"],
    dialogContent: ["max-sm:row-start-1", "border-0 p-0"],
    dialogHeader: "sr-only",
    empty: ["py-6 text-center text-sm"],
    footer: [
      "z-10",
      "flex items-center justify-between gap-2",
      "-m-2 mt-2 px-4 py-3",
      "bg-muted/48",
      "text-muted-foreground text-xs",
      "rounded-b-[calc(var(--radius-2xl,1rem)-1px)] border-t",
    ],
    input: ["rounded-[calc(var(--radius-2xl)-(--spacing(2)))] bg-input/32"],
    inputIcon: "opacity-64",
    list: ["flex-1 pe-2.5"],
    listWrapper: ["max-h-72 min-h-0 flex-1"],
    separator: "my-2",
    shortcut: ["ms-auto rtl:me-auto", "text-muted-foreground text-xs tracking-widest"],
  },
});

export type CommandRecipeFn = typeof commandRecipe;
export type CommandRecipe = ReturnType<CommandRecipeFn>;
export type CommandRecipeSlot = keyof CommandRecipe;
