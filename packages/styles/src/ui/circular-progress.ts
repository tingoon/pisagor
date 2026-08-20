import { tv, type VariantProps } from "tailwind-variants";

export const circularProgressVariants = tv({
  slots: {
    base: ["group/circular-progress", "relative", "inline-flex items-center justify-center"],
    range: [
      "fill-none stroke-primary transition-all duration-300 ease-out motion-reduce:transition-none!",
    ],
    track: [
      "block",
      "-rotate-90",
      "pointer-events-none",
      "motion-reduce:animate-none!",
      "group-data-[state=indeterminate]/circular-progress:animate-spin!",
      "**:data-[scope=circular-progress]:data-[part=track-bg]:fill-none",
      "**:data-[scope=circular-progress]:data-[part=track-bg]:stroke-input",
    ],
    value: ["font-medium text-xs tabular-nums", "pointer-events-none"],
    valueWrapper: ["pointer-events-none absolute inset-0 flex items-center justify-center"],
  },
});
export type CircularProgressVariantProps = VariantProps<typeof circularProgressVariants>;
