import { tv, type VariantProps } from "tailwind-variants";

export const commandDialogContentVariants = tv({
  base: ["max-sm:row-start-1", "border-0 p-0"],
});

export const commandInlineVariants = tv({
  base: [
    "isolate",
    "flex min-h-0 flex-1 flex-col",
    "p-2",
    "bg-popover",
    "text-popover-foreground",
    "rounded-2xl border",
  ],
});

export const commandContentVariants = tv({
  base: [
    "flex flex-1 flex-col",
    "max-h-(--available-height) min-h-0",
    "-me-2",
    "outline-hidden",
    "scrollbar-thin scrollbar-track-transparent scrollbar-thumb-foreground/20 overflow-auto overscroll-contain",
    "[:not(.has-[+[data-scope=command][data-part=footer]])]:rounded-b-2xl [:not(.has-[+[data-scope=command][data-part=footer]])]:border-b",
  ],
});

export const comboboxControlVariants = tv({
  base: ["group/combobox-control", "relative mb-2 flex flex-wrap items-center gap-1"],
});

export const commandInline2Variants = tv({
  base: ["rounded-xl bg-input/32"],
});

export const commandListVariants = tv({
  base: ["flex-1 pe-2.5"],
});

export const commandEmptyVariants = tv({
  base: ["py-6 text-center text-sm"],
});

export const commandSeparatorVariants = tv({
  base: "my-2",
});

export const commandFooterVariants = tv({
  base: [
    "z-10",
    "flex items-center justify-between gap-2",
    "-m-2 mt-2 px-4 py-3",
    "bg-muted/48",
    "text-muted-foreground text-xs",
    "rounded-b-[calc(var(--radius-2xl,1rem)-1px)] border-t",
  ],
});

export const commandInline3Variants = tv({
  base: "sr-only",
});

export const commandInline4Variants = tv({
  base: "opacity-64",
});

export const commandInline5Variants = tv({
  base: ["max-h-72 min-h-0 flex-1"],
});
export type CommandDialogContentVariantProps = VariantProps<typeof commandDialogContentVariants>;
export type CommandInlineVariantProps = VariantProps<typeof commandInlineVariants>;
export type CommandContentVariantProps = VariantProps<typeof commandContentVariants>;
export type ComboboxControlVariantProps = VariantProps<typeof comboboxControlVariants>;
export type CommandInline2VariantProps = VariantProps<typeof commandInline2Variants>;
export type CommandListVariantProps = VariantProps<typeof commandListVariants>;
export type CommandEmptyVariantProps = VariantProps<typeof commandEmptyVariants>;
export type CommandSeparatorVariantProps = VariantProps<typeof commandSeparatorVariants>;
export type CommandFooterVariantProps = VariantProps<typeof commandFooterVariants>;
export type CommandInline3VariantProps = VariantProps<typeof commandInline3Variants>;
export type CommandInline4VariantProps = VariantProps<typeof commandInline4Variants>;
export type CommandInline5VariantProps = VariantProps<typeof commandInline5Variants>;
