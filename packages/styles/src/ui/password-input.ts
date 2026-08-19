import { tv } from "tailwind-variants";

export const passwordInputVariants = tv({
  base: ["group/password-input w-full flex flex-col items-start gap-2"],
});

export const passwordInputInlineVariants = tv({
  base: [
    "in-data-[size=lg]:h-9 in-data-[size=sm]:h-7",
    "data-disabled:pointer-events-none data-disabled:opacity-64",
  ],
});

export const passwordInputInline2Variants = tv({
  base: [
    "hidden [[data-scope=password-input][data-part=control]:has(input:not(:placeholder-shown))_&]:flex",
  ],
});
