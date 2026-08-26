import { tv, type VariantProps } from "tailwind-variants";

export const fileUploadVariants = tv({
  slots: {
    base: ["group/file-upload", "relative", "flex flex-col justify-center gap-4"],
    deleteButton: [
      "rounded-lg",
      "hover:bg-destructive/10 hover:text-destructive",
      "dark:hover:bg-destructive-foreground/10 dark:hover:text-destructive-foreground",
    ],
    deleteTrigger: ["me-auto rtl:ms-auto"],
    description: ["font-medium text-muted-foreground text-sm"],
    dropzone: [
      "[--space:--spacing(6)]",
      "p-(--space)",
      "flex flex-col items-center justify-center gap-2",
      "text-center",
      "cursor-pointer",
      "data-cover:absolute data-cover:inset-0 data-cover:flex data-cover:items-center data-cover:justify-center",
      "data-dragging:border-primary data-dragging:bg-primary/10",
      "data-invalid:border-destructive dark:data-invalid:border-destructive-foreground",
    ],
    dropzoneIcon: [
      "p-3",
      "bg-muted/48",
      "text-muted-foreground",
      "rounded-full border",
      "group-data-dragging/file-upload:border-primary/24 group-data-dragging/file-upload:bg-primary/5 group-data-dragging/file-upload:text-primary",
      "[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
    ],
    extension: "uppercase",
    helper: ["text-muted-foreground text-xs"],
    item: ["relative inline-flex"],
    itemContent: ["min-w-0 flex-1 overflow-hidden"],
    itemGroup: ["flex flex-col gap-2"],
    itemName: ["truncate font-medium text-xs", "min-w-0", "overflow-hidden"],
    itemPreview: [
      "flex shrink-0 items-center justify-center",
      "font-semibold text-[0.5rem] text-primary",
      "bg-primary/10",
      "select-none",
      "rounded-full",
    ],
    itemPreviewImage: ["aspect-square size-full", "object-cover", "rounded-lg"],
    itemSize: ["text-muted-foreground text-xs"],
    listItem: [
      "flex-1 items-start justify-start gap-4",
      "bg-card",
      "p-2",
      "rounded-xl border",
      "fade-in-0 slide-in-from-top-5 animate-in",
      "motion-reduce:animate-none!",
    ],
    listPreview: "size-8",
    title: ["font-medium text-foreground text-sm"],
  },
});

export type FileUploadVariantProps = VariantProps<typeof fileUploadVariants>;
export type FileUploadVariants = ReturnType<typeof fileUploadVariants>;
export type FileUploadSlots = keyof FileUploadVariants;
