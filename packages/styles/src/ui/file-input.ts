import { tv, type VariantProps } from "tailwind-variants";

export const fileInputVariants = tv({
  slots: {
    control: "sr-only",
    label: ["min-w-0 flex-1 cursor-pointer truncate px-0"],
  },
});
export type FileInputVariantProps = VariantProps<typeof fileInputVariants>;
