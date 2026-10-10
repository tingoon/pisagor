import type {
  ImageCropperCropChangeDetails,
  ImageCropperFlipChangeDetails,
  ImageCropperHandlePosition,
  ImageCropperRotationChangeDetails,
  ImageCropperZoomChangeDetails,
} from "@ark-ui/vue/image-cropper";
import { ImageCropper as ImageCropperPrimitive } from "@ark-ui/vue/image-cropper";
import type { ImageCropperProps as BaseImageCropperProps } from "@pisagor/props";
import { imageCropperRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import { computed, defineComponent, h, type PropType } from "vue";
import { createSlotRecipeContext } from "../internal/create-slot-recipe-context";

// #region Slot recipe context
const {
  provideStyles: provideImageCropperStyles,
  useStyles: useImageCropper,
  withContext,
} = createSlotRecipeContext({
  name: "ImageCropper",
  recipe: imageCropperRecipe,
});
// #endregion

type ArkPart = Parameters<typeof h>[0];

interface CropRect {
  height: number;
  width: number;
  x: number;
  y: number;
}

// #region Types
export interface ImageCropperProps extends BaseImageCropperProps {
  class?: unknown;
  /** Shape of the crop selection area. */
  cropShape?: "rectangle" | "circle";
  /** Whether the crop area is fixed in size and position. */
  fixedCropArea?: boolean;
  /**
   * The initial rectangle of the crop area.
   * If not provided, a smart default will be computed based on viewport size and aspect ratio.
   */
  initialCrop?: CropRect;
  /** The maximum height of the crop area. */
  maxHeight?: number;
  /** The maximum width of the crop area. */
  maxWidth?: number;
  /** The maximum zoom factor allowed. */
  maxZoom?: number;
  /** The minimum height of the crop area. */
  minHeight?: number;
  /** The minimum width of the crop area. */
  minWidth?: number;
  /** The minimum zoom factor allowed. */
  minZoom?: number;
  /** Callback fired when the crop area changes. */
  onCropChange?: (details: ImageCropperCropChangeDetails) => void;
  /** Callback fired when the flip state changes. */
  onFlipChange?: (details: ImageCropperFlipChangeDetails) => void;
  /** Callback fired when the rotation changes. */
  onRotationChange?: (details: ImageCropperRotationChangeDetails) => void;
  /** Callback fired when the zoom level changes. */
  onZoomChange?: (details: ImageCropperZoomChangeDetails) => void;
  /** The controlled rotation of the image in degrees (0 - 360). */
  rotation?: number;
  /**
   * Image URL for the auto-rendered cropper layout.
   *
   * @remarks
   * When provided, renders `ImageCropperImage` and `ImageCropperSelection` automatically and the
   * default slot is ignored.
   */
  src?: string;
  /** The controlled zoom level of the image. */
  zoom?: number;
}

export interface ImageCropperSelectionProps {
  /**
   * The axis of the grid to show.
   *
   * @defaultValue "both"
   */
  axis?: "horizontal" | "vertical" | "both";
  class?: unknown;
}
// #endregion

// #region Parts
export const ImageCropperRoot = defineComponent({
  inheritAttrs: false,
  name: "ImageCropper",
  props: {
    alt: { default: undefined, type: String },
    aspectRatio: { default: undefined, type: Number },
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<unknown>,
    },
    cropShape: {
      default: undefined,
      type: String as PropType<ImageCropperProps["cropShape"]>,
    },
    fixedCropArea: { default: undefined, type: Boolean },
    initialCrop: {
      default: undefined,
      type: Object as PropType<CropRect | undefined>,
    },
    maxHeight: { default: undefined, type: Number },
    maxWidth: { default: undefined, type: Number },
    maxZoom: { default: undefined, type: Number },
    minHeight: { default: undefined, type: Number },
    minWidth: { default: undefined, type: Number },
    minZoom: { default: undefined, type: Number },
    onCropChange: {
      default: undefined,
      type: Function as PropType<ImageCropperProps["onCropChange"]>,
    },
    onFlipChange: {
      default: undefined,
      type: Function as PropType<ImageCropperProps["onFlipChange"]>,
    },
    onRotationChange: {
      default: undefined,
      type: Function as PropType<ImageCropperProps["onRotationChange"]>,
    },
    onZoomChange: {
      default: undefined,
      type: Function as PropType<ImageCropperProps["onZoomChange"]>,
    },
    recipe: {
      default: imageCropperRecipe,
      type: Function as PropType<typeof imageCropperRecipe>,
    },
    rotation: { default: undefined, type: Number },
    src: { default: undefined, type: String },
    zoom: { default: undefined, type: Number },
  },
  setup(props, { attrs, slots }) {
    const recipeSlots = computed(() => props.recipe());

    provideImageCropperStyles({
      get slots() {
        return recipeSlots.value;
      },
      variants: {},
    });

    return () =>
      h(
        ImageCropperPrimitive.Root as ArkPart,
        {
          ...attrs,
          aspectRatio: props.aspectRatio,
          class: cn(recipeSlots.value.base(), props.class),
          cropShape: props.cropShape,
          fixedCropArea: props.fixedCropArea,
          initialCrop: props.initialCrop,
          maxHeight: props.maxHeight,
          maxWidth: props.maxWidth,
          maxZoom: props.maxZoom,
          minHeight: props.minHeight,
          minWidth: props.minWidth,
          minZoom: props.minZoom,
          onCropChange: props.onCropChange,
          onFlipChange: props.onFlipChange,
          onRotationChange: props.onRotationChange,
          onZoomChange: props.onZoomChange,
          rotation: props.rotation,
          zoom: props.zoom,
        },
        () =>
          h(
            ImageCropperPrimitive.Viewport as ArkPart,
            {
              class: recipeSlots.value.viewport(),
            },
            () =>
              props.src
                ? [
                    h(ImageCropperImage, { alt: props.alt, src: props.src }),
                    h(ImageCropperSelection),
                  ]
                : slots.default?.(),
          ),
      );
  },
});

export const ImageCropperImage = withContext(ImageCropperPrimitive.Image, {
  name: "Image",
});

export const ImageCropperGrid = defineComponent({
  inheritAttrs: false,
  name: "ImageCropper.Grid",
  props: {
    axis: {
      required: true,
      type: String as PropType<"horizontal" | "vertical">,
    },
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<unknown>,
    },
  },
  setup(props, { attrs }) {
    const styles = useImageCropper();

    return () =>
      h(ImageCropperPrimitive.Grid as ArkPart, {
        ...attrs,
        axis: props.axis,
        class: cn(styles.slots.grid(), props.class),
      });
  },
});

export const ImageCropperHandle = defineComponent({
  inheritAttrs: false,
  name: "ImageCropper.Handle",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<unknown>,
    },
    position: {
      required: true,
      type: String as PropType<ImageCropperHandlePosition>,
    },
  },
  setup(props, { attrs }) {
    const styles = useImageCropper();

    return () => {
      const slots = styles.slots;

      return h(
        ImageCropperPrimitive.Handle as ArkPart,
        {
          ...attrs,
          class: slots.handle({ class: props.class }),
          position: props.position,
        },
        () => h("span", { "aria-hidden": true, class: slots.handleGrip() }),
      );
    };
  },
});

export const ImageCropperSelection = defineComponent({
  inheritAttrs: false,
  name: "ImageCropper.Selection",
  props: {
    axis: {
      default: "both",
      type: String as PropType<ImageCropperSelectionProps["axis"]>,
    },
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<unknown>,
    },
  },
  setup(props, { attrs, slots }) {
    const styles = useImageCropper();

    return () =>
      h(
        ImageCropperPrimitive.Selection as ArkPart,
        {
          ...attrs,
          class: cn(styles.slots.selection(), props.class),
        },
        () => [
          slots.default?.(),

          props.axis === "horizontal" || props.axis === "both"
            ? h(ImageCropperGrid, { axis: "horizontal" })
            : null,
          props.axis === "vertical" || props.axis === "both"
            ? h(ImageCropperGrid, { axis: "vertical" })
            : null,

          h(ImageCropperHandle, { position: "n" }),
          h(ImageCropperHandle, { position: "e" }),
          h(ImageCropperHandle, { position: "s" }),
          h(ImageCropperHandle, { position: "w" }),
          h(ImageCropperHandle, { position: "ne" }),
          h(ImageCropperHandle, { position: "se" }),
          h(ImageCropperHandle, { position: "sw" }),
          h(ImageCropperHandle, { position: "nw" }),
        ],
      );
  },
});
// #endregion

export const ImageCropper = Object.assign(ImageCropperRoot, {
  Grid: ImageCropperGrid,
  Handle: ImageCropperHandle,
  Image: ImageCropperImage,
  Selection: ImageCropperSelection,
});
