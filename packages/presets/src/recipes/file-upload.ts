import { tv } from "tailwind-variants";

export const fileUploadRecipe = tv({
  slots: {
    base: [
      "group/file-upload",
      "relative",
      "flex flex-col justify-center gap-4",
    ],
    description: ["text-muted-foreground text-sm font-medium"],
    dropzone: [
      "[--space:--spacing(6)]",
      "p-(--space)",
      "flex flex-col items-center justify-center gap-2",
      "text-center",
      "cursor-pointer",
      "data-cover:absolute data-cover:inset-0 data-cover:flex data-cover:items-center data-cover:justify-center",
      "data-dragging:border-primary data-dragging:bg-primary/10",
      "data-invalid:border-destructive",
    ],
    dropzoneIcon: [
      "p-3",
      "bg-muted/48",
      "text-muted-foreground",
      "rounded-full border",
      "group-data-dragging/file-upload:border-primary/24 group-data-dragging/file-upload:bg-primary/5 group-data-dragging/file-upload:text-primary",
      "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
    ],
    helper: ["text-muted-foreground text-xs"],
    itemGroup: ["flex flex-col gap-2"],
    title: ["text-foreground text-sm font-medium"],
  },
});

export const fileUploadItemRecipe = tv({
  slots: {
    base: ["relative inline-flex"],
    content: ["min-w-0 flex-1 overflow-hidden"],
    deleteButton: [
      "rounded-lg",
      "duration-fast transition ease-out",
      "hover:bg-destructive/10 hover:text-destructive",
      "active:scale-97",
      "motion-reduce:transition-none! motion-reduce:active:scale-100",
    ],
    deleteTrigger: ["me-auto"],
    error: ["text-destructive text-xs"],
    extension: "uppercase",
    listItem: [
      "flex-1 items-start justify-start gap-4",
      "bg-card",
      "p-2",
      "border-border/50 rounded-xl border",
      "fade-in-0 slide-in-from-top-5 animate-in duration-normal",
      "motion-reduce:animate-none!",
    ],
    listPreview: "size-8",
    name: ["truncate text-xs font-medium", "min-w-0", "overflow-hidden"],
    preview: [
      "flex shrink-0 items-center justify-center",
      "text-primary text-xs font-semibold",
      "bg-primary/10",
      "select-none",
      "rounded-full",
    ],
    previewImage: ["aspect-square size-full", "object-cover", "rounded-lg"],
    size: ["text-muted-foreground text-xs"],
  },
});

export type FileUploadRecipeFn = typeof fileUploadRecipe;
export type FileUploadRecipe = ReturnType<FileUploadRecipeFn>;
export type FileUploadRecipeSlot = keyof FileUploadRecipe;

export type FileUploadItemRecipeFn = typeof fileUploadItemRecipe;
export type FileUploadItemRecipe = ReturnType<FileUploadItemRecipeFn>;
export type FileUploadItemRecipeSlot = keyof FileUploadItemRecipe;
