import { tv, type VariantProps } from "tailwind-variants";

export const phoneInputRecipe = tv({
  defaultVariants: {
    size: "md",
  },
  slots: {
    countryButton: [
      "h-full gap-1.5 rounded-none rounded-s-[calc(var(--radius-lg)-1px)] px-2.5",
      "font-normal text-sm tabular-nums",
    ],
    countryCaret: ["size-3.5 shrink-0 opacity-64"],
    countryControl: ["flex h-full items-stretch"],
    countryRoot: "contents",
    countrySelect: ["static inset-auto flex h-full"],
    countryTrigger: [
      "h-full shrink-0",
      "border-input border-e",
      "p-0",
      "text-muted-foreground",
      "cursor-pointer ps-0",
      "disabled:pointer-events-none disabled:opacity-64",
    ],
    flag: ["inline-flex shrink-0 items-center justify-center text-base leading-none"],
    flagEmoji: "text-base",
    flagIcon: "size-4",
    input: [
      "min-w-0 flex-1",
      "bg-transparent",
      "border-0 shadow-none",
      "focus-visible:ring-0",
      "disabled:bg-transparent aria-invalid:ring-0 data-invalid:ring-0",
      "dark:bg-transparent dark:disabled:bg-transparent",
    ],
    itemCode: ["ms-auto text-muted-foreground tabular-nums"],
    itemLabel: "truncate",
    popup: ["min-w-72"],
    search: ["h-8"],
    searchGroup: ["border-border border-b p-2"],
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

export type PhoneInputVariantProps = VariantProps<typeof phoneInputRecipe>;
export type PhoneInputSlots = ReturnType<typeof phoneInputRecipe>;
