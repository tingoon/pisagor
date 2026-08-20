import { tv, type VariantProps } from "tailwind-variants";

export const fileUploadVariants = tv({
  base: ["group/file-upload", "relative", "flex flex-col justify-center gap-4"],
});

export const fileUploadDropzoneVariants = tv({
  base: [
    "[--space:--spacing(6)]",
    "p-(--space)",
    "flex flex-col items-center justify-center gap-2",
    "text-center",
    "cursor-pointer",
    "data-cover:absolute data-cover:inset-0 data-cover:flex data-cover:items-center data-cover:justify-center",
    "data-dragging:border-primary data-dragging:bg-primary/10",
    "data-invalid:border-destructive dark:data-invalid:border-destructive-foreground",
  ],
});

export const fileUploadDropzoneIconVariants = tv({
  base: [
    "p-3",
    "bg-muted/48",
    "text-muted-foreground",
    "rounded-full border",
    "group-data-dragging/file-upload:border-primary/24 group-data-dragging/file-upload:bg-primary/5 group-data-dragging/file-upload:text-primary",
    "[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  ],
});

export const fileUploadTitleVariants = tv({
  base: ["font-medium text-foreground text-sm"],
});

export const fileUploadTitle2Variants = tv({
  base: ["font-medium text-muted-foreground text-sm"],
});

export const fileUploadDropzoneHelperVariants = tv({
  base: ["text-muted-foreground text-xs"],
});

export const fileUploadInlineVariants = tv({
  base: [
    "flex-1 items-start justify-start gap-4",
    "bg-card",
    "p-2",
    "rounded-xl border",
    "fade-in-0 slide-in-from-top-5 animate-in",
    "motion-reduce:animate-none!",
  ],
});

export const fileUploadInline2Variants = tv({
  base: [
    "rounded-lg",
    "hover:bg-destructive/10 hover:text-destructive",
    "dark:hover:bg-destructive-foreground/10 dark:hover:text-destructive-foreground",
  ],
});

export const fileUploadItemVariants = tv({
  base: ["relative inline-flex"],
});

export const fileUploadItemPreviewVariants = tv({
  base: [
    "flex shrink-0 items-center justify-center",
    "font-semibold text-[0.5rem] text-primary",
    "bg-primary/10",
    "select-none",
    "rounded-full",
  ],
});

export const fileUploadItemPreviewImageVariants = tv({
  base: ["aspect-square size-full", "object-cover", "rounded-lg"],
});

export const fileUploadItemNameVariants = tv({
  base: ["truncate font-medium text-xs", "min-w-0", "overflow-hidden"],
});

export const fileUploadItemSizeVariants = tv({
  base: ["text-muted-foreground text-xs"],
});

export const fileUploadInline3Variants = tv({
  base: ["flex flex-col gap-2"],
});

export const fileUploadInline4Variants = tv({
  base: "size-8",
});

export const fileUploadInline5Variants = tv({
  base: "uppercase",
});

export const fileUploadInline6Variants = tv({
  base: ["min-w-0 flex-1 overflow-hidden"],
});

export const fileUploadInline7Variants = tv({
  base: ["me-auto rtl:ms-auto"],
});

export type FileUploadVariantProps = VariantProps<typeof fileUploadVariants>;
export type FileUploadVariants = ReturnType<typeof fileUploadVariants>;

export type FileUploadDropzoneVariantProps = VariantProps<typeof fileUploadDropzoneVariants>;
export type FileUploadDropzoneVariants = ReturnType<typeof fileUploadDropzoneVariants>;

export type FileUploadDropzoneIconVariantProps = VariantProps<
  typeof fileUploadDropzoneIconVariants
>;
export type FileUploadDropzoneIconVariants = ReturnType<typeof fileUploadDropzoneIconVariants>;

export type FileUploadTitleVariantProps = VariantProps<typeof fileUploadTitleVariants>;
export type FileUploadTitleVariants = ReturnType<typeof fileUploadTitleVariants>;

export type FileUploadTitle2VariantProps = VariantProps<typeof fileUploadTitle2Variants>;
export type FileUploadTitle2Variants = ReturnType<typeof fileUploadTitle2Variants>;

export type FileUploadDropzoneHelperVariantProps = VariantProps<
  typeof fileUploadDropzoneHelperVariants
>;
export type FileUploadDropzoneHelperVariants = ReturnType<typeof fileUploadDropzoneHelperVariants>;

export type FileUploadInlineVariantProps = VariantProps<typeof fileUploadInlineVariants>;
export type FileUploadInlineVariants = ReturnType<typeof fileUploadInlineVariants>;

export type FileUploadInline2VariantProps = VariantProps<typeof fileUploadInline2Variants>;
export type FileUploadInline2Variants = ReturnType<typeof fileUploadInline2Variants>;

export type FileUploadItemVariantProps = VariantProps<typeof fileUploadItemVariants>;
export type FileUploadItemVariants = ReturnType<typeof fileUploadItemVariants>;

export type FileUploadItemPreviewVariantProps = VariantProps<typeof fileUploadItemPreviewVariants>;
export type FileUploadItemPreviewVariants = ReturnType<typeof fileUploadItemPreviewVariants>;

export type FileUploadItemPreviewImageVariantProps = VariantProps<
  typeof fileUploadItemPreviewImageVariants
>;
export type FileUploadItemPreviewImageVariants = ReturnType<
  typeof fileUploadItemPreviewImageVariants
>;

export type FileUploadItemNameVariantProps = VariantProps<typeof fileUploadItemNameVariants>;
export type FileUploadItemNameVariants = ReturnType<typeof fileUploadItemNameVariants>;

export type FileUploadItemSizeVariantProps = VariantProps<typeof fileUploadItemSizeVariants>;
export type FileUploadItemSizeVariants = ReturnType<typeof fileUploadItemSizeVariants>;

export type FileUploadInline3VariantProps = VariantProps<typeof fileUploadInline3Variants>;
export type FileUploadInline3Variants = ReturnType<typeof fileUploadInline3Variants>;

export type FileUploadInline4VariantProps = VariantProps<typeof fileUploadInline4Variants>;
export type FileUploadInline4Variants = ReturnType<typeof fileUploadInline4Variants>;

export type FileUploadInline5VariantProps = VariantProps<typeof fileUploadInline5Variants>;
export type FileUploadInline5Variants = ReturnType<typeof fileUploadInline5Variants>;

export type FileUploadInline6VariantProps = VariantProps<typeof fileUploadInline6Variants>;
export type FileUploadInline6Variants = ReturnType<typeof fileUploadInline6Variants>;

export type FileUploadInline7VariantProps = VariantProps<typeof fileUploadInline7Variants>;
export type FileUploadInline7Variants = ReturnType<typeof fileUploadInline7Variants>;
