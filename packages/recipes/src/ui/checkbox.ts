import { tv, type VariantProps } from "tailwind-variants";

export const checkboxGroupVariants = tv({
  base: ["flex flex-col gap-2"],
});

export const checkboxVariants = tv({
  slots: {
    base: [
      "data-focus-visible:border-primary data-focus-visible:ring-[3px] data-focus-visible:ring-ring/32 data-focus-visible:ring-offset-1 data-focus-visible:ring-offset-background",
      "dark:data-focus-visible:data-invalid:border-destructive-foreground/64 dark:data-focus-visible:data-invalid:ring-destructive-foreground/48",
      "data-disabled:opacity-64",
      "[[data-disabled],[data-checked],[data-invalid]]:shadow-none",
      "data-invalid:border-destructive data-invalid:ring-[3px] data-invalid:ring-destructive/24",
      "dark:data-invalid:border-destructive-foreground dark:data-invalid:text-destructive-foreground dark:data-invalid:ring-destructive-foreground/20",
      "dark:not-data-checked:bg-input/32 dark:data-invalid:ring-destructive-foreground/24",
    ],
    indicator: [
      "absolute -inset-px",
      "flex items-center justify-center",
      "rounded-xs",
      "text-primary-foreground",
      "data-[state=checked]:bg-primary",
      "data-[state=unchecked]:hidden",
      "data-[state=indeterminate]:text-foreground",
    ],
  },
});

export type CheckboxGroupVariantProps = VariantProps<typeof checkboxGroupVariants>;
export type CheckboxGroupVariants = ReturnType<typeof checkboxGroupVariants>;

export type CheckboxVariantProps = VariantProps<typeof checkboxVariants>;
export type CheckboxVariants = ReturnType<typeof checkboxVariants>;
export type CheckboxSlots = keyof CheckboxVariants;
