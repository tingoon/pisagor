import { tv } from "tailwind-variants";

export const editableVariants = tv({
  base: [
    "group/editable",
    "relative",
    "w-full",
    "data-[orientation=vertical]:items-end",
    "flex items-center gap-2",
  ],
});

export const editableAreaVariants = tv({
  base: "w-full",
});

export const editablePreviewVariants = tv({
  base: [
    "w-full justify-start",
    "px-3",
    "whitespace-pre-wrap font-normal text-base sm:text-sm",
    "dark:hover:bg-input/32",
    "data-placeholder-shown:text-muted-foreground",
    "in-[[data-scope=editable][data-part=area]:has(textarea)]:items-start",
  ],
});

export const editableControlVariants = tv({
  base: ["group-data-[orientation=vertical]/editable:flex-col", "inline-flex items-center gap-2"],
});
