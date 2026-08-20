import { ImageCropper as ImageCropperPrimitive } from "@ark-ui/react/image-cropper";
import {
  imageCropperGridVariants,
  imageCropperHandleVariants,
  imageCropperImageVariants,
  imageCropperInlineVariants,
  imageCropperSelectionVariants,
  imageCropperVariants,
  imageCropperViewportVariants,
} from "@pisagor/styles/ui/image-cropper";
import { cn } from "@pisagor/utils";
import type { ComponentProps } from "react";
import type { WithTestId } from "../../internal/types";

// #region Types
export type ImageCropperRootProps = Omit<
  ComponentProps<typeof ImageCropperPrimitive.Root>,
  "src" | "cropShape"
> &
  WithTestId & {
    /**
     * Image URL for the auto-rendered cropper layout.
     *
     * @remarks
     * When provided, renders `ImageCropperImage` and `ImageCropperSelection` automatically and `children` is ignored.
     */
    src?: string;
    /** Alt text for the auto-rendered image. */
    alt?: string;
    /** Shape of the crop selection area. */
    cropShape?: "rectangle" | "circle";
  };

export type ImageCropperImageProps = ComponentProps<typeof ImageCropperPrimitive.Image>;

export type ImageCropperHandleProps = ComponentProps<typeof ImageCropperPrimitive.Handle>;

export type ImageCropperGridProps = ComponentProps<typeof ImageCropperPrimitive.Grid>;

export interface ImageCropperSelectionProps
  extends ComponentProps<typeof ImageCropperPrimitive.Selection> {
  /**
   * The axis of the grid to show.
   *
   * @defaultValue "both"
   */
  axis?: "horizontal" | "vertical" | "both";
}
// #endregion

// #region Parts
export function ImageCropperRoot({
  className,
  children,
  src,
  alt,
  cropShape,
  testId,
  ...rest
}: ImageCropperRootProps) {
  return (
    <ImageCropperPrimitive.Root
      className={cn(imageCropperVariants(), className, { ...rest })}
      cropShape={cropShape}
      data-testid={testId}
    >
      <ImageCropperPrimitive.Viewport className={cn(imageCropperViewportVariants())}>
        {src ? (
          <>
            <ImageCropperImage alt={alt} src={src} />
            <ImageCropperSelection />
          </>
        ) : (
          children
        )}
      </ImageCropperPrimitive.Viewport>
    </ImageCropperPrimitive.Root>
  );
}
ImageCropperRoot.displayName = "ImageCropper";

export function ImageCropperImage({ className, ...rest }: ImageCropperImageProps) {
  return (
    <ImageCropperPrimitive.Image {...rest} className={cn(imageCropperImageVariants(), className)} />
  );
}
ImageCropperImage.displayName = "ImageCropper.Image";

export function ImageCropperSelection({
  axis = "both",
  className,
  children,
  ...rest
}: ImageCropperSelectionProps) {
  return (
    <ImageCropperPrimitive.Selection
      {...rest}
      className={cn(imageCropperSelectionVariants(), className)}
    >
      {children}

      {(axis === "horizontal" || axis === "both") && <ImageCropperGrid axis="horizontal" />}
      {(axis === "vertical" || axis === "both") && <ImageCropperGrid axis="vertical" />}

      <ImageCropperHandle position="n" />
      <ImageCropperHandle position="e" />
      <ImageCropperHandle position="s" />
      <ImageCropperHandle position="w" />
      <ImageCropperHandle position="ne" />
      <ImageCropperHandle position="se" />
      <ImageCropperHandle position="sw" />
      <ImageCropperHandle position="nw" />
    </ImageCropperPrimitive.Selection>
  );
}
ImageCropperSelection.displayName = "ImageCropper.Selection";

export function ImageCropperHandle({ className, ...rest }: ImageCropperHandleProps) {
  return (
    <ImageCropperPrimitive.Handle {...rest} className={cn(imageCropperHandleVariants(), className)}>
      <span aria-hidden className={imageCropperInlineVariants()} />
    </ImageCropperPrimitive.Handle>
  );
}
ImageCropperHandle.displayName = "ImageCropper.Handle";

export function ImageCropperGrid({ className, ...rest }: ImageCropperGridProps) {
  return (
    <ImageCropperPrimitive.Grid {...rest} className={cn(imageCropperGridVariants(), className)} />
  );
}
ImageCropperGrid.displayName = "ImageCropper.Grid";
// #endregion
