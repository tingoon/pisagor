import { tv, type VariantProps } from "tailwind-variants";

export const comboboxRecipe = tv({
  defaultVariants: {
    /** Show indicator. */
    showIndicator: true,
  },
  slots: {
    base: [],
    clearTrigger: [],
    content: [
      "z-popover relative",
      "max-h-96 min-w-48",
      "origin-(--transform-origin)",
      "p-1",
      "bg-popover",
      "text-popover-foreground",
      "border-border/50 rounded-2xl border shadow-md",
      "overflow-y-auto",
      "outline-hidden",
      "duration-fast",
      "data-[state=closed]:animate-out data-[state=open]:animate-in",
      "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      "data-[state=open]:zoom-in-98 data-[state=closed]:zoom-out-98",
      "data-[placement=top]:slide-in-from-bottom-2 data-[state=closed]:data-[placement=top]:slide-out-to-bottom-2",
      "data-[placement=bottom]:slide-in-from-top-2 data-[state=closed]:data-[placement=bottom]:slide-out-to-top-2",
      "data-[placement=right]:slide-in-from-start-2 data-[state=closed]:data-[placement=right]:slide-out-to-start-2",
      "data-[placement=left]:slide-in-from-end-2 data-[state=closed]:data-[placement=left]:slide-out-to-end-2",
      "motion-reduce:animate-none!",
    ],
    control: [
      "group/combobox-control",
      "relative flex flex-wrap items-center gap-1",
    ],
    empty: ["px-2 py-1.5", "text-muted-foreground text-center text-sm"],
    input: [],
    itemGroup: [],
    item: [
      "relative",
      "py-1.5 ps-2",
      "text-sm",
      "flex w-full items-center gap-2",
      "rounded-xl",
      "select-none",
      "cursor-default",
      "outline-hidden",
      "data-[state=checked]:bg-accent data-[state=checked]:text-accent-foreground",
      "data-highlighted:bg-accent data-highlighted:text-accent-foreground",
      "data-disabled:pointer-events-none data-disabled:opacity-64",
      "[&_svg:not([class*='text-'])]:text-muted-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
    ],
    itemGroupLabel: ["text-muted-foreground px-2 py-1.5 text-xs font-semibold"],
    itemIndicator: [
      "absolute inset-e-2 flex size-3.5 items-center justify-center",
    ],
    list: ["flex flex-col"],
    positioner: [],
    trigger: ["absolute inset-y-0 inset-e-1"],
    triggerButton: "size-4",
    triggerHidden:
      "group-has-[[data-scope=combobox][data-part=clear-trigger]]/input-group:hidden",
  },
  variants: {
    showIndicator: {
      false: { item: "pe-2" },
      true: { item: "pe-8" },
    },
  },
});

export type ComboboxRecipeFn = typeof comboboxRecipe;
export type ComboboxVariantProps = VariantProps<ComboboxRecipeFn>;
export type ComboboxRecipe = ReturnType<ComboboxRecipeFn>;
export type ComboboxRecipeSlot = keyof ComboboxRecipe;
