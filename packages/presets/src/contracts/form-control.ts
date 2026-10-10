import { tv, type VariantProps } from "tailwind-variants";

/**
 * Page chrome is a muted gray; control wells are `--card` (white) with a readable
 * edge so fields stay visible on page, Surface, and Frame.
 */
const softFill = "bg-card shadow-sm dark:bg-input/30";
/** Same elevated well on secondary / tertiary / glass chrome. */
const raisedFill = "bg-card shadow-sm dark:bg-input/30";
/** Quieter secondary shell — muted inset with the same edge treatment. */
const softFillQuiet = "bg-muted shadow-sm dark:bg-input/32";

const surfaceVariantOptions = {
  default: "",
  glass: "",
  secondary: "",
  tertiary: "",
  transparent: "",
} as const;

/** Surfaces where controls need a raised (page/card) fill to stay visible. */
const mutedSurfaces: Array<"secondary" | "tertiary" | "glass"> = [
  "secondary",
  "tertiary",
  "glass",
];

export const formControlShellRecipe = tv({
  base: [
    "peer",
    "w-full min-w-0",
    "px-3",
    "text-base md:text-sm",
    "rounded-lg border border-foreground/20 dark:border-input",
    "placeholder:text-muted-foreground/64",
    "file:inline-flex file:h-7 file:items-center file:border-0",
    "file:font-medium file:text-foreground file:text-sm",
    "transition-[color,box-shadow,background-color,border-color] duration-fast ease-out",
    "outline-hidden focus-visible:border-primary focus-visible:ring-0.75 focus-visible:ring-ring/24",
    "aria-invalid:border-destructive aria-invalid:text-destructive aria-invalid:ring-0.75 aria-invalid:ring-destructive/24",
    "data-invalid:border-destructive data-invalid:text-destructive data-invalid:ring-0.75 data-invalid:ring-destructive/24",
    "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-64",
    "motion-reduce:transition-none!",
  ],
  compoundVariants: [
    {
      class: softFill,
      surfaceVariant: undefined,
      variant: "primary",
    },
    {
      class: softFill,
      surfaceVariant: ["default", "transparent"],
      variant: "primary",
    },
    {
      class: raisedFill,
      surfaceVariant: mutedSurfaces,
      variant: "primary",
    },
    {
      class: softFillQuiet,
      surfaceVariant: undefined,
      variant: "secondary",
    },
    {
      class: softFillQuiet,
      surfaceVariant: ["default", "transparent"],
      variant: "secondary",
    },
    {
      class: raisedFill,
      surfaceVariant: mutedSurfaces,
      variant: "secondary",
    },
  ],
  defaultVariants: {
    /**
     * Control size.
     */
    size: "md",
    /**
     * Surface variant.
     */
    surfaceVariant: undefined,
    /**
     * Visual emphasis.
     */
    variant: "primary",
  },
  variants: {
    size: {
      lg: "h-9",
      md: "h-8",
      sm: "h-7",
    },
    surfaceVariant: surfaceVariantOptions,
    variant: {
      primary: "",
      secondary: "",
    },
  },
});

export const formControlGroupShellRecipe = tv({
  base: [
    "group/input-group",
    "relative",
    "w-full min-w-0",
    "flex items-center",
    "rounded-lg border border-foreground/20 dark:border-input",
    "transition-[color,box-shadow,background-color,border-color] duration-fast ease-out",
    "has-[>textarea]:h-auto",
    "has-[>[data-align=inline-start]]:[&>input]:ps-2",
    "has-[>[data-align=inline-end]]:[&>input]:pe-2",
    "has-[>[data-align=block-start]]:h-auto has-[>[data-align=block-start]]:flex-col has-[>[data-align=block-start]]:[&>input]:pb-3",
    "has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-end]]:[&>input]:pt-3",
    "outline-hidden focus-within:border-primary focus-within:ring-0.75 focus-within:ring-ring/24",
    "has-[[data-part][aria-invalid=true]]:border-destructive has-[[data-part][aria-invalid=true]]:ring-0.75 has-[[data-part][aria-invalid=true]]:ring-destructive/24",
    "motion-reduce:transition-none!",
  ],
  compoundVariants: [
    {
      class: softFill,
      surfaceVariant: undefined,
      variant: "primary",
    },
    {
      class: softFill,
      surfaceVariant: ["default", "transparent"],
      variant: "primary",
    },
    {
      class: raisedFill,
      surfaceVariant: mutedSurfaces,
      variant: "primary",
    },
    {
      class: softFillQuiet,
      surfaceVariant: undefined,
      variant: "secondary",
    },
    {
      class: softFillQuiet,
      surfaceVariant: ["default", "transparent"],
      variant: "secondary",
    },
    {
      class: raisedFill,
      surfaceVariant: mutedSurfaces,
      variant: "secondary",
    },
  ],
  defaultVariants: {
    /**
     * Control size.
     */
    size: "md",
    /**
     * Surface variant.
     */
    surfaceVariant: undefined,
    /**
     * Visual emphasis.
     */
    variant: "primary",
  },
  variants: {
    size: {
      lg: ["h-9"],
      md: ["h-8"],
      sm: ["h-7"],
    },
    surfaceVariant: surfaceVariantOptions,
    variant: {
      primary: "",
      secondary: "",
    },
  },
});

export const formControlToggleRecipe = tv({
  base: [
    "relative",
    "inline-flex shrink-0 items-center justify-center",
    "border border-foreground/20 dark:border-input",
    "transition-shadow duration-fast ease-out",
    "data-focus-visible:border-primary data-focus-visible:ring-0.75 data-focus-visible:ring-ring/24 data-focus-visible:ring-offset-1 data-focus-visible:ring-offset-background",
    "data-disabled:opacity-64",
    "motion-reduce:transition-none!",
  ],
  compoundVariants: [
    {
      class: softFill,
      surfaceVariant: undefined,
      variant: "primary",
    },
    {
      class: softFill,
      surfaceVariant: ["default", "transparent"],
      variant: "primary",
    },
    {
      class: raisedFill,
      surfaceVariant: mutedSurfaces,
      variant: "primary",
    },
    {
      class: softFillQuiet,
      surfaceVariant: undefined,
      variant: "secondary",
    },
    {
      class: softFillQuiet,
      surfaceVariant: ["default", "transparent"],
      variant: "secondary",
    },
    {
      class: raisedFill,
      surfaceVariant: mutedSurfaces,
      variant: "secondary",
    },
  ],
  defaultVariants: {
    /**
     * Surface variant.
     */
    surfaceVariant: undefined,
    /**
     * Visual emphasis.
     */
    variant: "primary",
  },
  variants: {
    size: {
      md: "size-4 rounded-xs",
      sm: "size-3.5 rounded-xs",
    },
    surfaceVariant: surfaceVariantOptions,
    variant: {
      primary: "",
      secondary: "",
    },
  },
});

export const formControlRadioToggleRecipe = tv({
  base: [
    "relative",
    "inline-flex shrink-0 items-center justify-center",
    "size-4",
    "rounded-full border border-input",
    "before:size-1.5 before:rounded-full",
    "data-focus-visible:border-primary data-focus-visible:ring-0.75 data-focus-visible:ring-ring/32 data-focus-visible:ring-offset-1 data-focus-visible:ring-offset-background",
    "data-invalid:border-destructive data-invalid:text-destructive data-invalid:ring-0.75 data-invalid:ring-destructive/24",
    "data-[state=checked]:bg-primary data-[state=checked]:before:bg-primary-foreground",
    "data-invalid:data-[state=checked]:bg-transparent data-invalid:data-[state=checked]:before:bg-destructive",
    "motion-reduce:transition-none!",
  ],
  compoundVariants: [
    {
      class: "bg-input/30 shadow-xs/5",
      surfaceVariant: undefined,
      variant: "primary",
    },
    {
      class: "bg-input/30 shadow-xs/5",
      surfaceVariant: ["default", "transparent"],
      variant: "primary",
    },
    {
      class: raisedFill,
      surfaceVariant: mutedSurfaces,
      variant: "primary",
    },
    {
      class: softFillQuiet,
      surfaceVariant: undefined,
      variant: "secondary",
    },
    {
      class: softFillQuiet,
      surfaceVariant: ["default", "transparent"],
      variant: "secondary",
    },
    {
      class: raisedFill,
      surfaceVariant: mutedSurfaces,
      variant: "secondary",
    },
  ],
  defaultVariants: {
    /**
     * Surface variant.
     */
    surfaceVariant: undefined,
    /**
     * Visual emphasis.
     */
    variant: "primary",
  },
  variants: {
    surfaceVariant: surfaceVariantOptions,
    variant: {
      primary: "",
      secondary: "",
    },
  },
});

export const formControlSeparatorRecipe = tv({
  base: "relative block w-fit mx-auto px-2 text-muted-foreground text-sm",
  compoundVariants: [
    {
      class: "bg-card",
      surfaceVariant: undefined,
      variant: "primary",
    },
    {
      class: "bg-card",
      surfaceVariant: ["default", "transparent"],
      variant: "primary",
    },
    {
      class: "bg-muted",
      surfaceVariant: mutedSurfaces,
      variant: "primary",
    },
    {
      class: softFillQuiet,
      surfaceVariant: undefined,
      variant: "secondary",
    },
    {
      class: softFillQuiet,
      surfaceVariant: ["default", "transparent"],
      variant: "secondary",
    },
    {
      class: "bg-muted",
      surfaceVariant: mutedSurfaces,
      variant: "secondary",
    },
  ],
  defaultVariants: {
    /**
     * Surface variant.
     */
    surfaceVariant: undefined,
    /**
     * Visual emphasis.
     */
    variant: "primary",
  },
  variants: {
    surfaceVariant: surfaceVariantOptions,
    variant: {
      primary: "",
      secondary: "",
    },
  },
});

export const formControlZoneRecipe = tv({
  base: ["rounded-2xl border-2 border-input border-dashed"],
  compoundVariants: [
    {
      class: "bg-transparent",
      surfaceVariant: undefined,
      variant: "primary",
    },
    {
      class: "bg-transparent",
      surfaceVariant: ["default", "transparent"],
      variant: "primary",
    },
    {
      class: "bg-card/80",
      surfaceVariant: mutedSurfaces,
      variant: "primary",
    },
    {
      class: "bg-muted/40",
      surfaceVariant: undefined,
      variant: "secondary",
    },
    {
      class: "bg-muted/40",
      surfaceVariant: ["default", "transparent"],
      variant: "secondary",
    },
    {
      class: "bg-card/80",
      surfaceVariant: mutedSurfaces,
      variant: "secondary",
    },
  ],
  defaultVariants: {
    /**
     * Surface variant.
     */
    surfaceVariant: undefined,
    /**
     * Visual emphasis.
     */
    variant: "primary",
  },
  variants: {
    surfaceVariant: surfaceVariantOptions,
    variant: {
      primary: "",
      secondary: "",
    },
  },
});

export type FormControlShellRecipeFn = typeof formControlShellRecipe;
export type FormControlShellVariantProps =
  VariantProps<FormControlShellRecipeFn>;
export type FormControlShellRecipe = ReturnType<FormControlShellRecipeFn>;
export type FormControlShellRecipeSlot = keyof FormControlShellRecipe;

export type FormControlGroupShellRecipeFn = typeof formControlGroupShellRecipe;
export type FormControlGroupShellVariantProps =
  VariantProps<FormControlGroupShellRecipeFn>;
export type FormControlGroupShellRecipe =
  ReturnType<FormControlGroupShellRecipeFn>;
export type FormControlGroupShellRecipeSlot = keyof FormControlGroupShellRecipe;

export type FormControlToggleRecipeFn = typeof formControlToggleRecipe;
export type FormControlToggleVariantProps =
  VariantProps<FormControlToggleRecipeFn>;
export type FormControlToggleRecipe = ReturnType<FormControlToggleRecipeFn>;
export type FormControlToggleRecipeSlot = keyof FormControlToggleRecipe;

export type FormControlRadioToggleRecipeFn =
  typeof formControlRadioToggleRecipe;
export type FormControlRadioToggleVariantProps =
  VariantProps<FormControlRadioToggleRecipeFn>;
export type FormControlRadioToggleRecipe =
  ReturnType<FormControlRadioToggleRecipeFn>;
export type FormControlRadioToggleRecipeSlot =
  keyof FormControlRadioToggleRecipe;

export type FormControlSeparatorRecipeFn = typeof formControlSeparatorRecipe;
export type FormControlSeparatorVariantProps =
  VariantProps<FormControlSeparatorRecipeFn>;
export type FormControlSeparatorRecipe =
  ReturnType<FormControlSeparatorRecipeFn>;
export type FormControlSeparatorRecipeSlot = keyof FormControlSeparatorRecipe;

export type FormControlZoneRecipeFn = typeof formControlZoneRecipe;
export type FormControlZoneVariantProps = VariantProps<FormControlZoneRecipeFn>;
export type FormControlZoneRecipe = ReturnType<FormControlZoneRecipeFn>;
export type FormControlZoneRecipeSlot = keyof FormControlZoneRecipe;
