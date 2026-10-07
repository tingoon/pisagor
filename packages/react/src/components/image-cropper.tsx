import type {
  ImageCropperGridProps,
  ImageCropperHandleProps,
  ImageCropperRootProps as ImageCropperPrimitiveRootProps,
  ImageCropperSelectionProps as ImageCropperPrimitiveSelectionProps,
} from "@ark-ui/react/image-cropper";
import { ImageCropper as ImageCropperPrimitive } from "@ark-ui/react/image-cropper";
import type { ImageCropperProps as BaseImageCropperRootProps } from "@pisagor/props";
import { imageCropperRecipe } from "@pisagor/recipes";

import { createSlotRecipeContext } from "../utils";

// #region Context
const {
  Context: ImageCropperStylesContext,
  useStyles: useImageCropper,
  withContext,
} = createSlotRecipeContext({
  name: "ImageCropper",
  recipe: imageCropperRecipe,
});
// #endregion

// #region Types
export interface ImageCropperRootProps
  extends Omit<ImageCropperPrimitiveRootProps, "src" | "cropShape">,
    BaseImageCropperRootProps {
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
}

export interface ImageCropperSelectionProps
  extends ImageCropperPrimitiveSelectionProps {
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
    <ImageCropperStylesContext value={{ slots, variants: {} as never }}>
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
    </ImageCropperStylesContext>
  );
}

export const ImageCropperImage = withContext(ImageCropperPrimitive.Image, {
  name: "Image",
});

export function ImageCropperSelection({
  axis = "both",
  children,
  className,
  ...rest
}: ImageCropperSelectionProps) {
  const { slots } = useImageCropper();

  return (
    <ImageCropperPrimitive.Selection
      {...rest}
      className={slots.selection({ className })}
    >
      {children}

      {(axis === "horizontal" || axis === "both") && (
        <ImageCropperGrid axis="horizontal" />
      )}
      {(axis === "vertical" || axis === "both") && (
        <ImageCropperGrid axis="vertical" />
      )}

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

export function ImageCropperHandle({
  className,
  ...rest
}: ImageCropperHandleProps) {
  const { slots } = useImageCropper();

  return (
    <ImageCropperPrimitive.Handle
      {...rest}
      className={slots.handle({ className })}
    >
      <span aria-hidden className={slots.handleGrip()} />
    </ImageCropperPrimitive.Handle>
  );
}

export function ImageCropperGrid({
  className,
  ...rest
}: ImageCropperGridProps) {
  const { slots } = useImageCropper();

  return (
    <ImageCropperPrimitive.Grid
      {...rest}
      className={slots.grid({ className })}
    />
  );
}
// #endregion

// #region Display Names
ImageCropperRoot.displayName = "ImageCropper";
ImageCropperSelection.displayName = "ImageCropper.Selection";
ImageCropperHandle.displayName = "ImageCropper.Handle";
ImageCropperGrid.displayName = "ImageCropper.Grid";

// #endregion

export type {
  ImageCropperGridProps,
  ImageCropperHandleProps,
  ImageCropperImageProps,
} from "@ark-ui/react/image-cropper";

export const ImageCropper = Object.assign(ImageCropperRoot, {
  Grid: ImageCropperGrid,
  Handle: ImageCropperHandle,
  Image: ImageCropperImage,
  Selection: ImageCropperSelection,
});
