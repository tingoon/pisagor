import { tv, type VariantProps } from "tailwind-variants";

export const progressVariants = tv({
  slots: {
    header: ["flex w-full items-center justify-between"],
    range: [
      "bg-primary",
      "transition-all duration-300 ease-out",
      "data-[orientation=horizontal]:h-full",
      "data-[orientation=vertical]:h-full",
      "motion-reduce:animate-none! motion-reduce:transition-none!",
      "data-[state=indeterminate]:w-1/3 data-[state=indeterminate]:animate-indeterminate! data-[state=indeterminate]:duration-100",
    ],
    root: [
      "flex flex-wrap gap-3",
      "data-[orientation=horizontal]:w-full",
      "data-[orientation=vertical]:-scale-y-100",
    ],
    track: [
      "bg-input",
      "rounded-full",
      "overflow-x-hidden",
      "data-[orientation=horizontal]:h-2 data-[orientation=horizontal]:w-full",
      "data-[orientation=vertical]:h-full data-[orientation=vertical]:w-2",
    ],
    value: ["ms-auto tabular-nums"],
  },
});
export type ProgressVariantProps = VariantProps<typeof progressVariants>;
