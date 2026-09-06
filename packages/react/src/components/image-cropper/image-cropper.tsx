import type {
  ImageCropperGridProps,
  ImageCropperHandleProps,
  ImageCropperImageProps,
  ImageCropperRootProps as ImageCropperPrimitiveRootProps,
  ImageCropperSelectionProps as ImageCropperPrimitiveSelectionProps,
} from "@ark-ui/react/image-cropper";
import { ImageCropper as ImageCropperPrimitive } from "@ark-ui/react/image-cropper";
import { imageCropperRecipe } from "@pisagor/recipes/image-cropper";

import { ImageCropperContext, useImageCropper } from "./image-cropper.context";

// #region Types
export interface ImageCropperRootProps
  extends Omit<ImageCropperPrimitiveRootProps, "src" | "cropShape"> {
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
  /**
   * Style recipe. Defaults to `imageCropperRecipe` from `@pisagor/recipes/image-cropper`.
   *
   * @defaultValue imageCropperRecipe
   */
  recipe?: typeof imageCropperRecipe;
}

export interface ImageCropperSelectionProps extends ImageCropperPrimitiveSelectionProps {
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
  alt,
  children,
  cropShape,
  src,
  recipe = imageCropperRecipe,
  className,
  ...rest
}: ImageCropperRootProps) {
  const slots = recipe();

  return (
    <ImageCropperContext value={{ slots }}>
      <ImageCropperPrimitive.Root
        {...rest}
        className={slots.base({ className })}
        cropShape={cropShape}
      >
        <ImageCropperPrimitive.Viewport className={slots.viewport()}>
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
    </ImageCropperContext>
  );
}

export function ImageCropperImage({ className, ...rest }: ImageCropperImageProps) {
  const { slots } = useImageCropper();

  return <ImageCropperPrimitive.Image {...rest} className={slots.image({ className })} />;
}

export function ImageCropperSelection({
  axis = "both",
  children,
  className,
  ...rest
}: ImageCropperSelectionProps) {
  const { slots } = useImageCropper();

  return (
    <ImageCropperPrimitive.Selection {...rest} className={slots.selection({ className })}>
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

export function ImageCropperHandle({ className, ...rest }: ImageCropperHandleProps) {
  const { slots } = useImageCropper();

  return (
    <ImageCropperPrimitive.Handle {...rest} className={slots.handle({ className })}>
      <span aria-hidden className={slots.handleGrip()} />
    </ImageCropperPrimitive.Handle>
  );
}

export function ImageCropperGrid({ className, ...rest }: ImageCropperGridProps) {
  const { slots } = useImageCropper();

  return <ImageCropperPrimitive.Grid {...rest} className={slots.grid({ className })} />;
}
// #endregion

// #region Display Names
ImageCropperRoot.displayName = "ImageCropper";
ImageCropperImage.displayName = "ImageCropper.Image";
ImageCropperSelection.displayName = "ImageCropper.Selection";
ImageCropperHandle.displayName = "ImageCropper.Handle";
ImageCropperGrid.displayName = "ImageCropper.Grid";
// #endregion
