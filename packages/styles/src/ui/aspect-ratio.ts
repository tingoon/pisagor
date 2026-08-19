import { tv } from "tailwind-variants";

export const aspectRatioVariants = tv({
  base: ["[--ratio:1]", "relative", "w-full", "aspect-(--ratio)"],
});
