import { tv } from "tailwind-variants";

export const linkBoxVariants = tv({
  base: [
    "relative",
    "[&_a[href]:not([data-scope=link-box][data-part=overlay])]:relative [&_a[href]:not([data-scope=link-box][data-part=overlay])]:z-1",
  ],
});

export const linkBoxOverlayVariants = tv({
  base: [
    "static",
    "-mx-1 -my-0.5 px-1 py-0.5",
    "rounded-md border border-transparent",
    "before:absolute before:inset-0 before:z-0 before:block before:h-full before:w-full before:cursor-inherit before:content-['']",
    "outline-hidden focus-visible:border-primary focus-visible:ring-[3px] focus-visible:ring-ring/32",
  ],
});
