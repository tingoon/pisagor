import { tv, type VariantProps } from "tailwind-variants";

export const imageCropperVariants = tv({
  base: [
    "[--cropper-accent:var(--color-white)] [--cropper-handler-size:--spacing(2)] [--cropper-handler-width:--spacing(1)]",
    "relative",
    "w-full",
    "aspect-video",
  ],
});

export const imageCropperViewportVariants = tv({
  base: ["size-full", "overflow-hidden"],
});

export const imageCropperImageVariants = tv({
  base: [
    "absolute top-0 left-0",
    "size-full object-contain",
    "select-none",
    "backface-hidden",
    "pointer-events-none",
    "origin-center",
  ],
});

export const imageCropperSelectionVariants = tv({
  base: [
    "shadow-[0_0_0_9999px_rgb(0_0_0/0.5)]",
    "border-2 border-white/64",
    "backface-visibility-hidden",
    "cursor-move",
    "data-[shape=circle]:rounded-full",
    "outline-hidden focus-visible:border-(--cropper-accent)",
    "data-disabled:cursor-default",
    "data-dragging:cursor-grabbing data-dragging:border-white/84",
  ],
});

export const imageCropperHandleVariants = tv({
  slots: {
    base: [
      "absolute flex touch-none items-center justify-center",
      "h-[calc(var(--cropper-handler-size)+8px)] w-[calc(var(--cropper-handler-size)+8px)]",
      "data-disabled:hidden",
      "data-[position=ne]:cursor-nesw-resize data-[position=nw]:cursor-nwse-resize",
      "data-[position=se]:cursor-nwse-resize data-[position=sw]:cursor-nesw-resize",
      "data-[position=n]:cursor-ns-resize data-[position=s]:cursor-ns-resize",
      "data-[position=e]:cursor-ew-resize data-[position=w]:cursor-ew-resize",
      "border-(--cropper-accent)",
      "[&>span]:bg-(--cropper-accent) [&>span]:shadow-[0_1px_3px_rgb(0_0_0/0.3)]",
      "data-[position=nw]:hover:**:scale-110 [&[data-position=nw]_*]:size-(--cropper-handler-size) [&[data-position=nw]_*]:border-t-[length:(--cropper-handler-width)] [&[data-position=nw]_*]:border-l-[length:(--cropper-handler-width)] [&[data-position=nw]_*]:bg-(--cropper-accent)",
      "data-[position=ne]:hover:**:scale-110 [&[data-position=ne]_*]:size-(--cropper-handler-size) [&[data-position=ne]_*]:border-t-[length:(--cropper-handler-width)] [&[data-position=ne]_*]:border-r-[length:(--cropper-handler-width)] [&[data-position=ne]_*]:bg-(--cropper-accent)",
      "data-[position=se]:hover:**:scale-110 [&[data-position=se]_*]:size-(--cropper-handler-size) [&[data-position=se]_*]:border-r-[length:(--cropper-handler-width)] [&[data-position=se]_*]:border-b-[length:(--cropper-handler-width)] [&[data-position=se]_*]:bg-(--cropper-accent)",
      "data-[position=sw]:hover:**:scale-110 [&[data-position=sw]_*]:size-(--cropper-handler-size) [&[data-position=sw]_*]:border-b-[length:(--cropper-handler-width)] [&[data-position=sw]_*]:border-l-[length:(--cropper-handler-width)] [&[data-position=sw]_*]:bg-(--cropper-accent)",
      "[&[data-position=n]_*]: data-[position=n]:hover:**:opacity-100 [&[data-position=n]_*]:size-1.5 [&[data-position=n]_*]:opacity-0",
      "data-[position=s]:hover:**:opacity-100 [&[data-position=s]_*]:size-1.5 [&[data-position=s]_*]:bg-(--cropper-accent) [&[data-position=s]_*]:opacity-0",
      "data-[position=e]:hover:**:opacity-100 [&[data-position=e]_*]:size-1.5 [&[data-position=e]_*]:bg-(--cropper-accent) [&[data-position=e]_*]:opacity-0",
      "data-[position=w]:hover:**:opacity-100 [&[data-position=w]_*]:size-1.5 [&[data-position=w]_*]:bg-(--cropper-accent) [&[data-position=w]_*]:opacity-0",
    ],
    grip: ["block size-(--cropper-handler-size)"],
  },
});

export const imageCropperGridVariants = tv({
  base: [
    "absolute",
    "opacity-0",
    "pointer-events-none",
    "transition-opacity duration-200",
    "data-[axis=horizontal]:inset-[33.33%_0] data-[axis=horizontal]:border-white/40 data-[axis=horizontal]:border-t data-[axis=horizontal]:border-b",
    "data-[axis=vertical]:inset-0_[33.33%] data-[axis=vertical]:border-white/40 data-[axis=vertical]:border-r data-[axis=vertical]:border-l",
    "data-dragging:opacity-100",
    "data-panning:opacity-100",
    "motion-reduce:transition-none!",
  ],
});

export type ImageCropperVariantProps = VariantProps<typeof imageCropperVariants>;
export type ImageCropperVariants = ReturnType<typeof imageCropperVariants>;

export type ImageCropperViewportVariantProps = VariantProps<typeof imageCropperViewportVariants>;
export type ImageCropperViewportVariants = ReturnType<typeof imageCropperViewportVariants>;

export type ImageCropperImageVariantProps = VariantProps<typeof imageCropperImageVariants>;
export type ImageCropperImageVariants = ReturnType<typeof imageCropperImageVariants>;

export type ImageCropperSelectionVariantProps = VariantProps<typeof imageCropperSelectionVariants>;
export type ImageCropperSelectionVariants = ReturnType<typeof imageCropperSelectionVariants>;

export type ImageCropperHandleVariantProps = VariantProps<typeof imageCropperHandleVariants>;
export type ImageCropperHandleVariants = ReturnType<typeof imageCropperHandleVariants>;
export type ImageCropperHandleSlots = keyof ImageCropperHandleVariants;

export type ImageCropperGridVariantProps = VariantProps<typeof imageCropperGridVariants>;
export type ImageCropperGridVariants = ReturnType<typeof imageCropperGridVariants>;
