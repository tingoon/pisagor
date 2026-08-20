import { tv, type VariantProps } from "tailwind-variants";

export const formControlShellVariants = tv({
  base: [
    "peer",
    "w-full min-w-0",
    "px-3",
    "text-base md:text-sm",
    "rounded-lg border border-input",
    "placeholder:text-muted-foreground/64",
    "file:inline-flex file:h-7 file:items-center file:border-0",
    "file:font-medium file:text-foreground file:text-sm",
    "transition-[color,box-shadow]",
    "outline-hidden focus-visible:border-primary focus-visible:ring-[3px] focus-visible:ring-ring/32",
    "aria-invalid:border-destructive aria-invalid:text-destructive aria-invalid:ring-[3px] aria-invalid:ring-destructive/24",
    "data-invalid:border-destructive data-invalid:text-destructive data-invalid:ring-[3px] data-invalid:ring-destructive/24",
    "dark:aria-invalid:border-destructive-foreground dark:aria-invalid:text-destructive-foreground dark:aria-invalid:ring-destructive-foreground/40",
    "dark:data-invalid:border-destructive-foreground dark:data-invalid:text-destructive-foreground dark:data-invalid:ring-destructive-foreground/40",
    "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-64",
    "motion-reduce:transition-none!",
  ],
  compoundVariants: [
    {
      class: "bg-transparent shadow-xs/5 dark:bg-input/30",
      surfaceVariant: undefined,
      variant: "primary",
    },
    {
      class: "bg-muted/40 shadow-none dark:bg-input/30",
      surfaceVariant: "default",
      variant: "secondary",
    },
    {
      class: "bg-background shadow-none dark:bg-background/90",
      surfaceVariant: ["secondary", "tertiary"],
      variant: "secondary",
    },
    {
      class: "bg-muted/40 shadow-none dark:bg-input/32",
      surfaceVariant: undefined,
      variant: "secondary",
    },
  ],
  defaultVariants: {
    size: "md",
    surfaceVariant: undefined,
    variant: "primary",
  },
  variants: {
    size: {
      lg: "h-9",
      md: "h-8",
      sm: "h-7",
    },
    surfaceVariant: {
      default: "",
      secondary: "",
      tertiary: "",
      transparent: "",
    },
    variant: {
      primary: "",
      secondary: "",
    },
  },
});

export const formControlGroupShellVariants = tv({
  base: [
    "group/input-group",
    "relative",
    "w-full min-w-0",
    "flex items-center",
    "rounded-lg border border-input",
    "transition-[color,box-shadow]",
    "has-[>textarea]:h-auto",
    "has-[>[data-align=inline-start]]:[&>input]:ps-2",
    "has-[>[data-align=inline-end]]:[&>input]:pe-2",
    "has-[>[data-align=block-start]]:h-auto has-[>[data-align=block-start]]:flex-col has-[>[data-align=block-start]]:[&>input]:pb-3",
    "has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-end]]:[&>input]:pt-3",
    "outline-hidden focus-within:border-primary focus-within:ring-[3px] focus-within:ring-ring/32",
    "has-[[data-part][aria-invalid=true]]:border-destructive has-[[data-part][aria-invalid=true]]:ring-[3px] has-[[data-part][aria-invalid=true]]:ring-destructive/24",
    "dark:has-[[data-part][aria-invalid=true]]:border-destructive-foreground dark:has-[[data-part][aria-invalid=true]]:ring-destructive-foreground/40",
    "motion-reduce:transition-none!",
  ],
  compoundVariants: [
    {
      class: "bg-transparent shadow-xs/5 dark:bg-input/30",
      surfaceVariant: undefined,
      variant: "primary",
    },
    {
      class: "bg-muted/40 shadow-none dark:bg-input/30",
      surfaceVariant: "default",
      variant: "secondary",
    },
    {
      class: "bg-background shadow-none dark:bg-background/90",
      surfaceVariant: ["secondary", "tertiary"],
      variant: "secondary",
    },
    {
      class: "bg-muted/40 shadow-none dark:bg-input/32",
      surfaceVariant: undefined,
      variant: "secondary",
    },
  ],
  defaultVariants: {
    size: "md",
    surfaceVariant: undefined,
    variant: "primary",
  },
  variants: {
    size: {
      lg: ["h-9"],
      md: ["h-8"],
      sm: ["h-7"],
    },
    surfaceVariant: {
      default: "",
      secondary: "",
      tertiary: "",
      transparent: "",
    },
    variant: {
      primary: "",
      secondary: "",
    },
  },
});

export const formControlToggleVariants = tv({
  base: [
    "relative",
    "inline-flex shrink-0 items-center justify-center",
    "border border-input",
    "transition-shadow",
    "data-focus-visible:border-primary data-focus-visible:ring-[3px] data-focus-visible:ring-ring/32 data-focus-visible:ring-offset-1 data-focus-visible:ring-offset-background",
    "data-disabled:opacity-64",
    "motion-reduce:transition-none!",
  ],
  compoundVariants: [
    {
      class: "bg-transparent shadow-xs/5 dark:bg-input/32",
      surfaceVariant: undefined,
      variant: "primary",
    },
    {
      class: "bg-muted/40 shadow-none dark:bg-input/32",
      surfaceVariant: "default",
      variant: "secondary",
    },
    {
      class: "bg-background shadow-none dark:bg-background/90",
      surfaceVariant: ["secondary", "tertiary"],
      variant: "secondary",
    },
    {
      class: "bg-muted/40 shadow-none dark:bg-input/32",
      surfaceVariant: undefined,
      variant: "secondary",
    },
  ],
  defaultVariants: {
    surfaceVariant: undefined,
    variant: "primary",
  },
  variants: {
    size: {
      md: "size-4 rounded-xs",
      sm: "size-3.5 rounded-xs",
    },
    surfaceVariant: {
      default: "",
      secondary: "",
      tertiary: "",
      transparent: "",
    },
    variant: {
      primary: "",
      secondary: "",
    },
  },
});

export const formControlRadioToggleVariants = tv({
  base: [
    "relative",
    "inline-flex shrink-0 items-center justify-center",
    "size-4",
    "rounded-full border border-input",
    "before:size-1.5 before:rounded-full",
    "data-focus-visible:border-primary data-focus-visible:ring-[3px] data-focus-visible:ring-ring/32 data-focus-visible:ring-offset-1 data-focus-visible:ring-offset-background",
    "data-invalid:border-destructive data-invalid:text-destructive data-invalid:ring-[3px] data-invalid:ring-destructive/24",
    "dark:data-invalid:border-destructive-foreground dark:data-invalid:text-destructive dark:data-invalid:ring-[3px] dark:data-invalid:ring-destructive-foreground/20",
    "data-[state=checked]:bg-primary data-[state=checked]:before:bg-primary-foreground",
    "data-invalid:data-[state=checked]:bg-transparent data-invalid:data-[state=checked]:before:bg-destructive-foreground",
    "motion-reduce:transition-none!",
  ],
  compoundVariants: [
    {
      class: "bg-input/30 shadow-xs/5",
      surfaceVariant: undefined,
      variant: "primary",
    },
    {
      class: "bg-muted/40 shadow-none",
      surfaceVariant: "default",
      variant: "secondary",
    },
    {
      class: "bg-background shadow-none",
      surfaceVariant: ["secondary", "tertiary"],
      variant: "secondary",
    },
    {
      class: "bg-muted/40 shadow-none",
      surfaceVariant: undefined,
      variant: "secondary",
    },
  ],
  defaultVariants: {
    surfaceVariant: undefined,
    variant: "primary",
  },
  variants: {
    surfaceVariant: {
      default: "",
      secondary: "",
      tertiary: "",
      transparent: "",
    },
    variant: {
      primary: "",
      secondary: "",
    },
  },
});

export const formControlSeparatorVariants = tv({
  base: "relative block w-fit mx-auto px-2 text-muted-foreground text-sm",
  compoundVariants: [
    {
      class: "bg-background",
      surfaceVariant: undefined,
      variant: "primary",
    },
    {
      class: "bg-muted/40",
      surfaceVariant: "default",
      variant: "secondary",
    },
    {
      class: "bg-background",
      surfaceVariant: ["secondary", "tertiary"],
      variant: "secondary",
    },
    {
      class: "bg-muted/40",
      surfaceVariant: undefined,
      variant: "secondary",
    },
  ],
  defaultVariants: {
    surfaceVariant: undefined,
    variant: "primary",
  },
  variants: {
    surfaceVariant: {
      default: "",
      secondary: "",
      tertiary: "",
      transparent: "",
    },
    variant: {
      primary: "",
      secondary: "",
    },
  },
});

export const formControlZoneVariants = tv({
  base: ["rounded-2xl border-2 border-input border-dashed"],
  compoundVariants: [
    {
      class: "bg-transparent",
      surfaceVariant: undefined,
      variant: "primary",
    },
    {
      class: "bg-muted/24",
      surfaceVariant: "default",
      variant: "secondary",
    },
    {
      class: "bg-background/50",
      surfaceVariant: ["secondary", "tertiary"],
      variant: "secondary",
    },
    {
      class: "bg-muted/24",
      surfaceVariant: undefined,
      variant: "secondary",
    },
  ],
  defaultVariants: {
    surfaceVariant: undefined,
    variant: "primary",
  },
  variants: {
    surfaceVariant: {
      default: "",
      secondary: "",
      tertiary: "",
      transparent: "",
    },
    variant: {
      primary: "",
      secondary: "",
    },
  },
});

export type FormControlShellVariantProps = VariantProps<typeof formControlShellVariants>;
export type FormControlShellVariants = ReturnType<typeof formControlShellVariants>;

export type FormControlGroupShellVariantProps = VariantProps<typeof formControlGroupShellVariants>;
export type FormControlGroupShellVariants = ReturnType<typeof formControlGroupShellVariants>;

export type FormControlToggleVariantProps = VariantProps<typeof formControlToggleVariants>;
export type FormControlToggleVariants = ReturnType<typeof formControlToggleVariants>;

export type FormControlRadioToggleVariantProps = VariantProps<
  typeof formControlRadioToggleVariants
>;
export type FormControlRadioToggleVariants = ReturnType<typeof formControlRadioToggleVariants>;

export type FormControlSeparatorVariantProps = VariantProps<typeof formControlSeparatorVariants>;
export type FormControlSeparatorVariants = ReturnType<typeof formControlSeparatorVariants>;

export type FormControlZoneVariantProps = VariantProps<typeof formControlZoneVariants>;
export type FormControlZoneVariants = ReturnType<typeof formControlZoneVariants>;
