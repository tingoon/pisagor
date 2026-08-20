import { tv, type VariantProps } from "tailwind-variants";

export const phoneInputVariants = tv({
  defaultVariants: {
    size: "md",
  },
  slots: {
    countryTrigger: [
      "h-full shrink-0",
      "border-input border-e",
      "p-0",
      "text-muted-foreground",
      "cursor-pointer",
      "disabled:pointer-events-none disabled:opacity-64",
    ],
    flag: ["inline-flex shrink-0 items-center justify-center text-base leading-none"],
    input: [
      "min-w-0 flex-1",
      "bg-transparent",
      "border-0 shadow-none",
      "focus-visible:ring-0",
      "disabled:bg-transparent aria-invalid:ring-0 data-invalid:ring-0",
      "dark:bg-transparent dark:disabled:bg-transparent",
    ],
    popup: ["min-w-72"],
    search: ["h-8"],
  },
  variants: {
    size: {
      lg: {
        input: ["h-9"],
        search: ["h-9"],
      },
      md: {
        input: ["h-8"],
      },
      sm: {
        input: ["h-7"],
        search: ["h-7"],
      },
    },
  },
});

export const phoneInputInlineVariants = tv({
  base: "size-4",
});

export const phoneInputInline2Variants = tv({
  base: "text-base",
});

export const phoneInputCountryTriggerVariants = tv({
  base: ["cursor-pointer ps-0"],
});

export const phoneInputInline3Variants = tv({
  base: [
    "h-full gap-1.5 rounded-none rounded-s-[calc(var(--radius-lg)-1px)] px-2.5",
    "font-normal text-sm tabular-nums",
  ],
});

export const phoneInputInline4Variants = tv({
  base: "contents",
});

export const phoneInputInline5Variants = tv({
  base: ["flex h-full items-stretch"],
});

export const phoneInputInline6Variants = tv({
  base: ["static inset-auto flex h-full"],
});

export const phoneInputInline7Variants = tv({
  base: ["size-3.5 shrink-0 opacity-64"],
});

export const phoneInputInline8Variants = tv({
  base: ["border-border border-b p-2"],
});

export const phoneInputInline9Variants = tv({
  base: "truncate",
});

export const phoneInputInline10Variants = tv({
  base: ["ms-auto text-muted-foreground tabular-nums"],
});

export type PhoneInputVariantProps = VariantProps<typeof phoneInputVariants>;
export type PhoneInputVariants = ReturnType<typeof phoneInputVariants>;
export type PhoneInputSlots = keyof PhoneInputVariants;

export type PhoneInputInlineVariantProps = VariantProps<typeof phoneInputInlineVariants>;
export type PhoneInputInlineVariants = ReturnType<typeof phoneInputInlineVariants>;

export type PhoneInputInline2VariantProps = VariantProps<typeof phoneInputInline2Variants>;
export type PhoneInputInline2Variants = ReturnType<typeof phoneInputInline2Variants>;

export type PhoneInputCountryTriggerVariantProps = VariantProps<
  typeof phoneInputCountryTriggerVariants
>;
export type PhoneInputCountryTriggerVariants = ReturnType<typeof phoneInputCountryTriggerVariants>;

export type PhoneInputInline3VariantProps = VariantProps<typeof phoneInputInline3Variants>;
export type PhoneInputInline3Variants = ReturnType<typeof phoneInputInline3Variants>;

export type PhoneInputInline4VariantProps = VariantProps<typeof phoneInputInline4Variants>;
export type PhoneInputInline4Variants = ReturnType<typeof phoneInputInline4Variants>;

export type PhoneInputInline5VariantProps = VariantProps<typeof phoneInputInline5Variants>;
export type PhoneInputInline5Variants = ReturnType<typeof phoneInputInline5Variants>;

export type PhoneInputInline6VariantProps = VariantProps<typeof phoneInputInline6Variants>;
export type PhoneInputInline6Variants = ReturnType<typeof phoneInputInline6Variants>;

export type PhoneInputInline7VariantProps = VariantProps<typeof phoneInputInline7Variants>;
export type PhoneInputInline7Variants = ReturnType<typeof phoneInputInline7Variants>;

export type PhoneInputInline8VariantProps = VariantProps<typeof phoneInputInline8Variants>;
export type PhoneInputInline8Variants = ReturnType<typeof phoneInputInline8Variants>;

export type PhoneInputInline9VariantProps = VariantProps<typeof phoneInputInline9Variants>;
export type PhoneInputInline9Variants = ReturnType<typeof phoneInputInline9Variants>;

export type PhoneInputInline10VariantProps = VariantProps<typeof phoneInputInline10Variants>;
export type PhoneInputInline10Variants = ReturnType<typeof phoneInputInline10Variants>;
