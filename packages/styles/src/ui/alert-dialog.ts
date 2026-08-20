import { tv, type VariantProps } from "tailwind-variants";

export const alertDialogBodyVariants = tv({
  base: "in-[[data-scope=dialog][data-part=content]:has([data-scope=alert-dialog][data-part=header])]:pt-0",
});

export type AlertDialogBodyVariantProps = VariantProps<typeof alertDialogBodyVariants>;
export type AlertDialogBodyVariants = ReturnType<typeof alertDialogBodyVariants>;
