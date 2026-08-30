import { tv, type VariantProps } from "tailwind-variants";

export const inputGroupAddonRecipe = tv({
  base: [
    "h-auto",
    "flex items-center justify-center gap-2",
    "py-1.5",
    "select-none font-medium text-muted-foreground text-sm",
    "cursor-text",
    "group-data-[disabled=true]/input-group:opacity-64",
    "[&>kbd]:rounded-[calc(var(--radius)-5px)]",
    "[&_svg:not([class*='size-'])]:size-4",
  ],
  defaultVariants: {
    align: "inline-start",
  },
  variants: {
    align: {
      "block-end": [
        "order-last w-full justify-start px-3 pb-3",
        "group-has-[>input]/input-group:pb-2.5",
        "[.border-t]:pt-3",
      ],
      "block-start": [
        "order-first w-full justify-start px-3 pt-3",
        "group-has-[>input]/input-group:pt-2.5",
        "[.border-b]:pb-3",
      ],
      "inline-end": ["order-last pe-3", "has-[>button]:me-[-0.45rem]", "has-[>kbd]:me-[-0.35rem]"],
      "inline-start": [
        "order-first ps-3",
        "has-[>button]:ms-[-0.45rem]",
        "has-[>kbd]:ms-[-0.35rem]",
      ],
    },
  },
});

export const inputGroupButtonRecipe = tv({
  base: [
    "relative",
    "flex items-center gap-2",
    "text-sm",
    "shadow-none",
    "pointer-coarse:after:absolute pointer-coarse:after:size-full pointer-coarse:after:min-h-11 pointer-coarse:after:min-w-11",
  ],
  defaultVariants: {
    size: "xs",
  },
  variants: {
    size: {
      "icon-sm": ["size-8", "p-0", "has-[>svg]:p-0"],
      "icon-xs": ["size-6", "rounded-[calc(var(--radius)-5px)]", "p-0", "has-[>svg]:p-0"],
      sm: ["h-8", "gap-1.5", "px-2.5", "rounded-md", "has-[>svg]:px-2.5"],
      xs: [
        "h-6",
        "gap-1",
        "px-2",
        "rounded-[calc(var(--radius)-5px)]",
        "has-[>svg]:px-2",
        "[&_svg:not([class*='size-'])]:size-3.5",
      ],
    },
  },
});

export const inputGroupTextRecipe = tv({
  base: [
    "flex items-center gap-2",
    "text-muted-foreground text-sm",
    "[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none",
  ],
});

export const inputGroupControlRecipe = tv({
  base: [
    "flex-1",
    "bg-transparent",
    "rounded-none border-0 shadow-none",
    "focus-visible:ring-0",
    "disabled:bg-transparent aria-invalid:ring-0 data-invalid:ring-0",
    "dark:bg-transparent dark:disabled:bg-transparent",
  ],
});

export const inputGroupTextareaControlRecipe = tv({
  base: [
    "flex-1",
    "py-3",
    "bg-transparent",
    "resize-none rounded-none border-0 shadow-none",
    "focus-visible:ring-0",
    "disabled:bg-transparent aria-invalid:ring-0 data-invalid:ring-0",
    "dark:bg-transparent dark:disabled:bg-transparent",
  ],
});

export type InputGroupAddonVariantProps = VariantProps<typeof inputGroupAddonRecipe>;
export type InputGroupAddonRecipe = ReturnType<typeof inputGroupAddonRecipe>;
export type InputGroupAddonRecipeSlot = keyof InputGroupAddonRecipe;

export type InputGroupButtonVariantProps = VariantProps<typeof inputGroupButtonRecipe>;
export type InputGroupButtonRecipe = ReturnType<typeof inputGroupButtonRecipe>;
export type InputGroupButtonRecipeSlot = keyof InputGroupButtonRecipe;

export type InputGroupTextVariantProps = VariantProps<typeof inputGroupTextRecipe>;
export type InputGroupTextRecipe = ReturnType<typeof inputGroupTextRecipe>;
export type InputGroupTextRecipeSlot = keyof InputGroupTextRecipe;

export type InputGroupControlVariantProps = VariantProps<typeof inputGroupControlRecipe>;
export type InputGroupControlRecipe = ReturnType<typeof inputGroupControlRecipe>;
export type InputGroupControlRecipeSlot = keyof InputGroupControlRecipe;

export type InputGroupTextareaControlVariantProps = VariantProps<
  typeof inputGroupTextareaControlRecipe
>;
export type InputGroupTextareaControlRecipe = ReturnType<typeof inputGroupTextareaControlRecipe>;
export type InputGroupTextareaControlRecipeSlot = keyof InputGroupTextareaControlRecipe;
