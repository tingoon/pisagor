import { tv, type VariantProps } from "tailwind-variants";

/**
 * Page chrome is a muted gray; control wells are `--card` (white) with a
 * readable edge so fields stay visible on page, Surface, and Frame.
 */
const softFill = "bg-card shadow-sm dark:bg-input/30";
/** Same elevated well on secondary / tertiary / glass chrome. */
const raisedFill = "bg-card shadow-sm dark:bg-input/30";
/** Quieter secondary shell — muted inset with the same edge treatment. */
const softFillQuiet = "bg-muted shadow-sm dark:bg-input/32";

export const formControlSurfaceVariantOptions = {
  default: "",
  glass: "",
  secondary: "",
  tertiary: "",
  transparent: "",
} as const;

/** Surfaces where controls need a raised (page/card) fill to stay visible. */
export const formControlMutedSurfaces: Array<
  "secondary" | "tertiary" | "glass"
> = ["secondary", "tertiary", "glass"];

const surfaceVariantOptions = formControlSurfaceVariantOptions;
const mutedSurfaces = formControlMutedSurfaces;

/**
 * Shared surface×variant fill compounds for form-control shells. Pass `slot`
 * when embedding into a slot recipe (`class: { [slot]: fill }`).
 */
export function formControlFillCompounds(
  options: {
    slot?: string;
    primary?: string;
    secondary?: string;
    raised?: string;
  } = {},
) {
  const {
    slot,
    primary = softFill,
    secondary = softFillQuiet,
    raised = raisedFill,
  } = options;
  const wrap = (cls: string) => (slot ? { [slot]: cls } : cls);

  const defaultSurfaces: Array<"default" | "transparent"> = [
    "default",
    "transparent",
  ];

  return [
    {
      class: wrap(primary),
      surfaceVariant: undefined,
      variant: "primary" as const,
    },
    {
      class: wrap(primary),
      surfaceVariant: defaultSurfaces,
      variant: "primary" as const,
    },
    {
      class: wrap(raised),
      surfaceVariant: mutedSurfaces,
      variant: "primary" as const,
    },
    {
      class: wrap(secondary),
      surfaceVariant: undefined,
      variant: "secondary" as const,
    },
    {
      class: wrap(secondary),
      surfaceVariant: defaultSurfaces,
      variant: "secondary" as const,
    },
    {
      class: wrap(raised),
      surfaceVariant: mutedSurfaces,
      variant: "secondary" as const,
    },
  ];
}

/** Base classes shared by single-field shells (input, textarea, select trigger). */
export const formControlShellBase = [
  "peer",
  "w-full min-w-0",
  "px-3",
  "text-base md:text-sm",
  "border-foreground/20 dark:border-input rounded-lg border",
  "placeholder:text-muted-foreground/64",
  "file:inline-flex file:h-7 file:items-center file:border-0",
  "file:text-foreground file:text-sm file:font-medium",
  "duration-fast transition ease-out",
  "focus-visible:border-primary focus-visible:ring-0.75 focus-visible:ring-ring/24 outline-hidden",
  "aria-invalid:border-destructive aria-invalid:text-destructive aria-invalid:ring-0.75 aria-invalid:ring-destructive/24",
  "data-invalid:border-destructive data-invalid:text-destructive data-invalid:ring-0.75 data-invalid:ring-destructive/24",
  "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-64",
  "motion-reduce:transition-none!",
] as const;

/** Base classes for grouped shells (number-input, file-input, input-group). */
export const formControlGroupShellBase = [
  "group/input-group",
  "relative",
  "w-full min-w-0",
  "flex items-center",
  "border-foreground/20 dark:border-input rounded-lg border",
  "duration-fast transition ease-out",
  "has-[>textarea]:h-auto",
  "has-[>[data-align=inline-start]]:[&>input]:ps-2",
  "has-[>[data-align=inline-end]]:[&>input]:pe-2",
  "has-[>[data-align=block-start]]:h-auto has-[>[data-align=block-start]]:flex-col has-[>[data-align=block-start]]:[&>input]:pb-3",
  "has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-end]]:[&>input]:pt-3",
  "focus-within:border-primary focus-within:ring-0.75 focus-within:ring-ring/24 outline-hidden",
  "has-[[data-part][aria-invalid=true]]:border-destructive has-[[data-part][aria-invalid=true]]:ring-0.75 has-[[data-part][aria-invalid=true]]:ring-destructive/24",
  "motion-reduce:transition-none!",
] as const;

/** Base classes for dashed zone shells (file-upload dropzone). */
export const formControlZoneBase = [
  "border-input rounded-2xl border-2 border-dashed",
] as const;

/** Base classes for checkbox-style toggles. */
export const formControlToggleBase = [
  "relative",
  "inline-flex shrink-0 items-center justify-center",
  "border-foreground/20 dark:border-input border",
  "duration-fast transition-shadow ease-out",
  "data-focus-visible:border-primary data-focus-visible:ring-0.75 data-focus-visible:ring-ring/24 data-focus-visible:ring-offset-background data-focus-visible:ring-offset-1",
  "data-disabled:opacity-64",
  "motion-reduce:transition-none!",
] as const;

/** Base classes for radio toggles. */
export const formControlRadioToggleBase = [
  "relative",
  "inline-flex shrink-0 items-center justify-center",
  "size-4",
  "border-input rounded-full border",
  "before:size-1.5 before:rounded-full",
  "data-focus-visible:border-primary data-focus-visible:ring-0.75 data-focus-visible:ring-ring/32 data-focus-visible:ring-offset-background data-focus-visible:ring-offset-1",
  "data-invalid:border-destructive data-invalid:text-destructive data-invalid:ring-0.75 data-invalid:ring-destructive/24",
  "data-[state=checked]:bg-primary data-[state=checked]:before:bg-primary-foreground",
  "data-invalid:data-[state=checked]:before:bg-destructive data-invalid:data-[state=checked]:bg-transparent",
  "motion-reduce:transition-none!",
] as const;

export const formControlShellRecipe = tv({
  base: [...formControlShellBase],
  compoundVariants: formControlFillCompounds(),
  defaultVariants: {
    /** Control size. */
    size: "md",
    /** Surface variant. */
    surfaceVariant: undefined,
    /** Visual emphasis. */
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
  base: [...formControlGroupShellBase],
  compoundVariants: formControlFillCompounds(),
  defaultVariants: {
    /** Control size. */
    size: "md",
    /** Surface variant. */
    surfaceVariant: undefined,
    /** Visual emphasis. */
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
  base: [...formControlToggleBase],
  compoundVariants: formControlFillCompounds(),
  defaultVariants: {
    /** Surface variant. */
    surfaceVariant: undefined,
    /** Visual emphasis. */
    variant: "primary",
  },
  variants: {
    size: {
      lg: "size-5 rounded-sm",
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
  base: [...formControlRadioToggleBase],
  compoundVariants: formControlFillCompounds({
    primary: "bg-input/30 shadow-xs/5",
  }),
  defaultVariants: {
    /** Surface variant. */
    surfaceVariant: undefined,
    /** Visual emphasis. */
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
  base: "text-muted-foreground relative mx-auto block w-fit px-2 text-sm",
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
    /** Surface variant. */
    surfaceVariant: undefined,
    /** Visual emphasis. */
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
  base: [...formControlZoneBase],
  compoundVariants: formControlFillCompounds({
    primary: "bg-transparent",
    raised: "bg-card/80",
    secondary: "bg-muted/40",
  }),
  defaultVariants: {
    /** Surface variant. */
    surfaceVariant: undefined,
    /** Visual emphasis. */
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
