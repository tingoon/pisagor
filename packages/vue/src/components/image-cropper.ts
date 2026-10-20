import {
  type ImageCropperHandleProps,
  ImageCropper as ImageCropperPrimitive,
} from "@ark-ui/vue";
import type {
  ImageCropperContract,
  ImageCropperRootContract,
} from "@pisagor/contracts";
import { imageCropperRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import { defineComponent, h, type PropType } from "vue";
import { type ClassValue, createSlotRecipeContext } from "../internal";

// #region Context
const { useStyles, withContext, withProvider } = createSlotRecipeContext({
  name: "ImageCropper",
  recipe: imageCropperRecipe,
});
// #endregion

// #region Types
type ArkPart = Parameters<typeof h>[0];

type ImageCropperAxis = "horizontal" | "vertical" | "both" | "none";

export type ImageCropperRootProps = ImageCropperRootContract;

export interface ImageCropperProps
  extends ImageCropperRootProps, ImageCropperContract {
  /** Image alt text. */
  alt?: string;
  /**
   * Which grid lines to show inside the selection.
   *
   * @defaultValue "both"
   */
  axis?: ImageCropperAxis;
  /** Image URL. */
  src: string;
}

export type {
  ImageCropperGridProps,
  ImageCropperHandleProps,
  ImageCropperImageProps,
  ImageCropperSelectionProps,
  ImageCropperViewportProps,
} from "@ark-ui/vue";

const handlePositions = ["n", "e", "s", "w", "ne", "se", "sw", "nw"] as const;
// #endregion

// #region Parts
export const ImageCropperRoot = withProvider<ImageCropperRootContract>(
  ImageCropperPrimitive.Root,
  { name: "Root", slot: "base" },
);

export const ImageCropperViewport = withContext(
  ImageCropperPrimitive.Viewport,
  { name: "Viewport" },
);

export const ImageCropperImage = withContext(ImageCropperPrimitive.Image, {
  name: "Image",
});

export const ImageCropperSelection = withContext(
  ImageCropperPrimitive.Selection,
  { name: "Selection" },
);

/** Resize handle with its visual grip (override via the default slot). */
export const ImageCropperHandle = defineComponent({
  inheritAttrs: false,
  name: "ImageCropper.Handle",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<ClassValue>,
    },
    position: {
      required: true,
      type: String as PropType<ImageCropperHandleProps["position"]>,
    },
  },
  setup(props, { attrs, slots }) {
    const styles = useStyles();

    return () =>
      h(
        ImageCropperPrimitive.Handle as ArkPart,
        {
          ...attrs,
          class: styles.slots.handle({ class: cn(props.class) }),
          position: props.position,
        },
        () =>
          slots.default?.() ??
          h("span", { "aria-hidden": true, class: styles.slots.handleGrip() }),
      );
  },
});

export const ImageCropperGrid = withContext(ImageCropperPrimitive.Grid, {
  name: "Grid",
});
// #endregion

// #region Shorthand
export const ImageCropperShorthand = defineComponent({
  inheritAttrs: false,
  name: "ImageCropper",
  props: {
    alt: { default: undefined, type: String },
    axis: {
      default: "both",
      type: String as PropType<ImageCropperAxis>,
    },
    classNames: {
      default: undefined,
      type: Object as PropType<ImageCropperProps["classNames"]>,
    },
    src: { required: true, type: String },
  },
  setup(props, { attrs }) {
    return () => {
      const classNames = props.classNames;
      const axis = props.axis;

      return h(ImageCropperRoot as ArkPart, attrs, () =>
        h(ImageCropperViewport, { class: classNames?.viewport }, () => [
          h(ImageCropperImage, {
            alt: props.alt,
            class: classNames?.image,
            src: props.src,
          }),
          h(ImageCropperSelection, { class: classNames?.selection }, () => [
            axis === "horizontal" || axis === "both"
              ? h(ImageCropperGrid, {
                  axis: "horizontal",
                  class: classNames?.grid,
                })
              : null,
            axis === "vertical" || axis === "both"
              ? h(ImageCropperGrid, {
                  axis: "vertical",
                  class: classNames?.grid,
                })
              : null,
            ...handlePositions.map((position) =>
              h(ImageCropperHandle, {
                class: classNames?.handle,
                key: position,
                position,
              }),
            ),
          ]),
        ]),
      );
    };
  },
});
// #endregion

export const ImageCropper = Object.assign(ImageCropperShorthand, {
  Grid: ImageCropperGrid,
  Handle: ImageCropperHandle,
  Image: ImageCropperImage,
  Root: ImageCropperRoot,
  Selection: ImageCropperSelection,
  Viewport: ImageCropperViewport,
});
