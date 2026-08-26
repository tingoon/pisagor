import { tv, type VariantProps } from "tailwind-variants";

export const editableVariants = tv({
  slots: {
    area: "w-full",
    base: [
      "group/editable",
      "relative",
      "w-full",
      "data-[orientation=vertical]:items-end",
      "flex items-center gap-2",
    ],
    control: [
      "group-data-[orientation=vertical]/editable:flex-col",
      "inline-flex items-center gap-2",
    ],
    preview: [
      "w-full justify-start",
      "px-3",
      "whitespace-pre-wrap font-normal text-base sm:text-sm",
      "dark:hover:bg-input/32",
      "data-placeholder-shown:text-muted-foreground",
      "in-[[data-scope=editable][data-part=area]:has(textarea)]:items-start",
    ],
  },
});

export type EditableVariantProps = VariantProps<typeof editableVariants>;
export type EditableVariants = ReturnType<typeof editableVariants>;
export type EditableSlots = keyof EditableVariants;
