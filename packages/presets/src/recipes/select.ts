import { tv, type VariantProps } from "tailwind-variants";
import {
  formControlFillCompounds,
  formControlShellBase,
  formControlSurfaceVariantOptions,
} from "./form-control";

export const selectRecipe = tv({
  compoundVariants: formControlFillCompounds({ slot: "trigger" }),
  defaultVariants: {
    /** Control size. */
    size: "md",
    /** Surface variant. */
    surfaceVariant: undefined,
    /** Visual emphasis. */
    variant: "primary",
  },
  slots: {
    clearTrigger: [
      "absolute end-8 top-1/2 -translate-y-1/2",
      "[&_svg]:text-muted-foreground [&_svg]:pointer-events-none [&_svg]:size-3.5 [&_svg]:shrink-0",
      "transition-opacity",
      "opacity-64",
      "outline-hidden focus-visible:opacity-100",
      "hover:opacity-100",
      "motion-reduce:transition-none!",
    ],
    content: [
      "z-popover",
      "relative",
      "max-h-96 min-w-(--reference-width)",
      "p-1",
      "bg-popover",
      "text-popover-foreground",
      "border-border/50 rounded-2xl border shadow-md",
      "origin-(--transform-origin)",
      "outline-hidden",
      "overflow-y-auto",
      "duration-fast",
      "data-[state=open]:animate-in data-[state=closed]:animate-out",
      "data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0",
      "data-[state=open]:zoom-in-98 data-[state=closed]:zoom-out-98",
      "data-[placement=bottom]:slide-in-from-top-2 data-[state=closed]:data-[placement=bottom]:slide-out-to-top-2",
      "data-[placement=left]:slide-in-from-end-2 data-[state=closed]:data-[placement=left]:slide-out-to-end-2",
      "data-[placement=right]:slide-in-from-start-2 data-[state=closed]:data-[placement=right]:slide-out-to-start-2",
      "data-[placement=top]:slide-in-from-bottom-2 data-[state=closed]:data-[placement=top]:slide-out-to-bottom-2",
      "motion-reduce:animate-none!",
    ],
    control: ["relative inline-flex max-w-full"],
    empty: ["px-2 py-1.5", "text-muted-foreground text-center text-sm"],
    item: [
      "relative",
      "w-full",
      "py-1.5 ps-2 pe-8",
      "flex items-center gap-2",
      "text-base select-none md:text-sm",
      "rounded-xl",
      "cursor-default",
      "outline-hidden",
      "in-[[data-scope=select][data-part=content]:has([data-scope=select][data-part=item-group-label])]:ps-4",
      "data-highlighted:bg-accent data-highlighted:text-accent-foreground",
      "data-disabled:pointer-events-none data-disabled:opacity-64",
      "[&_svg]:pointer-events-none [&_svg]:shrink-0",
      "[&_svg]:text-muted-foreground [&_svg:not([class*='size-'])]:size-4",
    ],
    itemGroupLabel: [
      "px-2 py-1.5",
      "text-muted-foreground text-xs font-semibold",
    ],
    itemIndicator: [
      "absolute inset-e-2 flex size-4 items-center justify-center",
    ],
    itemText: ["flex w-full flex-1 items-center gap-2"],
    separator: ["bg-border pointer-events-none -mx-1 my-1 h-px"],
    trigger: [
      ...formControlShellBase,
      "w-fit",
      "flex items-center gap-2",
      "text-sm",
      "data-placeholder-shown:text-muted-foreground/64",
      "data-clearable:pe-12",
      "data-[state=open]:border-primary data-[state=open]:ring-0.75 data-[state=open]:ring-ring/32",
      "[&_svg]:text-muted-foreground [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
    ],
    triggerActions: ["ms-auto flex items-center gap-1"],
    valueText: ["min-w-0", "flex items-center gap-2", "truncate text-nowrap"],
  },
  variants: {
    size: {
      lg: { trigger: "h-9" },
      md: { trigger: "h-8" },
      sm: { trigger: "h-7" },
    },
    surfaceVariant: formControlSurfaceVariantOptions,
    variant: {
      primary: {},
      secondary: {},
    },
  },
});

export type SelectRecipeFn = typeof selectRecipe;
export type SelectRecipe = ReturnType<SelectRecipeFn>;
export type SelectRecipeSlot = keyof SelectRecipe;
export type SelectVariantProps = VariantProps<SelectRecipeFn>;
