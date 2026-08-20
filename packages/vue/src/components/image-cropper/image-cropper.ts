import {
  type ImageCropperCropChangeDetails,
  type ImageCropperFlipChangeDetails,
  type ImageCropperHandlePosition,
  ImageCropper as ImageCropperPrimitive,
  type ImageCropperRotationChangeDetails,
  type ImageCropperZoomChangeDetails,
} from "@ark-ui/vue/image-cropper";
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
import { defineComponent, h, type PropType } from "vue";
import type { WithTestId } from "../../internal/types";

type ArkPart = Parameters<typeof h>[0];

interface CropRect {
  height: number;
  width: number;
  x: number;
  y: number;
}

// #region Types
export interface ImageCropperProps extends WithTestId {
  /** Alt text for the auto-rendered image. */
  alt?: string;
  /**
   * The aspect ratio to maintain for the crop area (width / height).
   * If not provided, the crop area can be freely resized.
   */
  aspectRatio?: number;
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
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    cropShape: { default: undefined, type: String as PropType<ImageCropperProps["cropShape"]> },
    fixedCropArea: { default: undefined, type: Boolean },
    initialCrop: { default: undefined, type: Object as PropType<CropRect | undefined> },
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
    rotation: { default: undefined, type: Number },
    src: { default: undefined, type: String },
    testId: String,
    zoom: { default: undefined, type: Number },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        ImageCropperPrimitive.Root as ArkPart,
        {
          ...attrs,
          aspectRatio: props.aspectRatio,
          class: cn(imageCropperVariants(), props.class),
          cropShape: props.cropShape,
          "data-testid": props.testId,
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
              class: cn(imageCropperViewportVariants()),
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

export const ImageCropperImage = defineComponent({
  inheritAttrs: false,
  name: "ImageCropper.Image",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs }) {
    return () =>
      h(ImageCropperPrimitive.Image as ArkPart, {
        ...attrs,
        class: cn(imageCropperImageVariants(), props.class),
      });
  },
});

export const ImageCropperGrid = defineComponent({
  inheritAttrs: false,
  name: "ImageCropper.Grid",
  props: {
    axis: { required: true, type: String as PropType<"horizontal" | "vertical"> },
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs }) {
    return () =>
      h(ImageCropperPrimitive.Grid as ArkPart, {
        ...attrs,
        axis: props.axis,
        class: cn(imageCropperGridVariants(), props.class),
      });
  },
});

export const ImageCropperHandle = defineComponent({
  inheritAttrs: false,
  name: "ImageCropper.Handle",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    position: { required: true, type: String as PropType<ImageCropperHandlePosition> },
  },
  setup(props, { attrs }) {
    return () =>
      h(
        ImageCropperPrimitive.Handle as ArkPart,
        {
          ...attrs,
          class: cn(imageCropperHandleVariants(), props.class),
          position: props.position,
        },
        () => h("span", { "aria-hidden": true, class: imageCropperInlineVariants() }),
      );
  },
});

export const ImageCropperSelection = defineComponent({
  inheritAttrs: false,
  name: "ImageCropper.Selection",
  props: {
    axis: { default: "both", type: String as PropType<ImageCropperSelectionProps["axis"]> },
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        ImageCropperPrimitive.Selection as ArkPart,
        {
          ...attrs,
          class: cn(imageCropperSelectionVariants(), props.class),
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
