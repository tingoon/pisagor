import { tv, type VariantProps } from "tailwind-variants";

export const navbarVariants = tv({
  slots: {
    actions: ["flex shrink-0 items-center gap-2"],
    base: [
      "group/navbar",
      "flex w-full items-center gap-4",
      "min-h-14 shrink-0",
      "border-b bg-background px-4 md:px-6",
    ],
    brand: ["flex shrink-0 items-center gap-2"],
    content: ["flex min-w-0 flex-1 items-center"],
    nav: ["flex min-w-0 flex-1 items-center"],
  },
});
export type NavbarVariantProps = VariantProps<typeof navbarVariants>;
