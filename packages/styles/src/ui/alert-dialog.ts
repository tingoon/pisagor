import { tv } from "tailwind-variants";

export const alertDialogBodyVariants = tv({
  base: "in-[[data-scope=dialog][data-part=content]:has([data-scope=alert-dialog][data-part=header])]:pt-0",
});
