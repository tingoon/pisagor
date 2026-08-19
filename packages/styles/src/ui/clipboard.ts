import { tv } from "tailwind-variants";

export const clipboardVariants = tv({
  defaultVariants: {
    valueSize: "md",
  },
  slots: {
    control: ["flex items-center gap-2"],
    field: ["flex flex-col gap-1.5"],
    indicator: ["pointer-events-none"],
    input: ["peer", "w-full min-w-0", "px-3", "text-base md:text-sm", "h-8"],
    label: ["font-medium text-sm"],
    value: ["inline-flex items-center", "px-3", "text-base md:text-sm"],
  },
  variants: {
    valueSize: {
      lg: { value: "h-9" },
      md: { value: "h-8" },
      sm: { value: "h-7" },
      xl: { value: "h-10" },
      xs: { value: "h-6" },
    },
  },
});
