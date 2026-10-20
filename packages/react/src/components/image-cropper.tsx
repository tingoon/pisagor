import { ImageCropper as ImageCropperPrimitive } from "@ark-ui/react";
import type {
  ImageCropperGridProps,
  ImageCropperHandleProps,
  ImageCropperImageProps,
  ImageCropperRootProps as ImageCropperRootPrimitiveProps,
  ImageCropperSelectionProps,
  ImageCropperViewportProps,
} from "@ark-ui/react";
import type {
  ImageCropperContract,
  ImageCropperRootContract,
} from "@pisagor/contracts";
import { imageCropperRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../internal";

// #region Context
const { useStyles, withContext, withProvider } = createSlotRecipeContext({
  name: "ImageCropper",
  recipe: imageCropperRecipe,
});
// #endregion

// #region Types
export type ImageCropperRootProps = ImageCropperRootPrimitiveProps &
  ImageCropperRootContract;

const handlePositions = ["n", "e", "s", "w", "ne", "se", "sw", "nw"] as const;

export interface ImageCropperProps
  extends Omit<ImageCropperRootProps, "children">, ImageCropperContract {
  /** Image URL. */
  src: string;
  /** Image alt text. */
  alt?: string;
  /**
   * Which grid lines to show inside the selection.
   *
   * @defaultValue "both"
   */
  axis?: "horizontal" | "vertical" | "both" | "none";
}
// #endregion

// #region Parts
const Root = withProvider<ImageCropperRootProps>(ImageCropperPrimitive.Root, {
  name: "Root",
  slot: "base",
});

const Viewport = withContext<ImageCropperViewportProps>(
  ImageCropperPrimitive.Viewport,
  { name: "Viewport" },
);

const Image = withContext<ImageCropperImageProps>(ImageCropperPrimitive.Image, {
  name: "Image",
});

const Selection = withContext<ImageCropperSelectionProps>(
  ImageCropperPrimitive.Selection,
  { name: "Selection" },
);

/** Resize handle with its visual grip. */
function Handle({ children, className, ...rest }: ImageCropperHandleProps) {
  const { slots } = useStyles();

  return (
    <ImageCropperPrimitive.Handle
      {...rest}
      className={slots.handle({ className })}
    >
      {children ?? <span aria-hidden className={slots.handleGrip()} />}
    </ImageCropperPrimitive.Handle>
  );
}

const Grid = withContext<ImageCropperGridProps>(ImageCropperPrimitive.Grid, {
  name: "Grid",
});
// #endregion

// #region Shorthand
export function ImageCropperShorthand({
  alt,
  axis = "both",
  classNames,
  src,
  ...rest
}: ImageCropperProps) {
  return (
    <Root {...rest}>
      <Viewport className={classNames?.viewport}>
        <Image alt={alt} className={classNames?.image} src={src} />

        <Selection className={classNames?.selection}>
          {(axis === "horizontal" || axis === "both") && (
            <Grid axis="horizontal" className={classNames?.grid} />
          )}
          {(axis === "vertical" || axis === "both") && (
            <Grid axis="vertical" className={classNames?.grid} />
          )}

          {handlePositions.map((position) => (
            <Handle
              className={classNames?.handle}
              key={position}
              position={position}
            />
          ))}
        </Selection>
      </Viewport>
    </Root>
  );
}
// #endregion

export type {
  ImageCropperGridProps,
  ImageCropperHandleProps,
  ImageCropperImageProps,
  ImageCropperSelectionProps,
  ImageCropperViewportProps,
} from "@ark-ui/react";

export const ImageCropper = Object.assign(ImageCropperShorthand, {
  Grid,
  Handle,
  Image,
  Root,
  Selection,
  Viewport,
});
