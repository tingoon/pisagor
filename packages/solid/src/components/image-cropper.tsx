import type {
  ImageCropperGridProps,
  ImageCropperHandleProps,
  ImageCropperImageProps,
  ImageCropperRootProps as ImageCropperPrimitiveRootProps,
  ImageCropperSelectionProps as ImageCropperPrimitiveSelectionProps,
} from "@ark-ui/solid/image-cropper";
import { ImageCropper as ImageCropperPrimitive } from "@ark-ui/solid/image-cropper";
import type { ImageCropperProps as BaseImageCropperRootProps } from "@pisagor/props";
import { imageCropperRecipe } from "@pisagor/recipes";
import type { Component, JSX } from "solid-js";
import { createMemo, Show, splitProps } from "solid-js";
import { createSlotRecipeContext } from "../internal/create-slot-recipe-context";

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

export interface ImageCropperRootProps
  extends Omit<ImageCropperPrimitiveRootProps, "src" | "cropShape">,
    BaseImageCropperRootProps {
  src?: string;
  alt?: string;
  cropShape?: "rectangle" | "circle";
}

export interface ImageCropperSelectionProps
  extends ImageCropperPrimitiveSelectionProps {
  axis?: "horizontal" | "vertical" | "both";
}

export function ImageCropperRoot(props: ImageCropperRootProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "alt",
    "children",
    "src",
    "recipe",
    "class",
  ]);

  const slots = createMemo(() => (local.recipe ?? imageCropperRecipe)());

  return (
    <ImageCropperStylesContext
      value={{
        get slots() {
          return slots();
        },
        variants: {},
      }}
    >
      <ImageCropperPrimitive.Root
        {...rest}
        class={slots().base({ class: local.class })}
      >
        <ImageCropperPrimitive.Viewport class={slots().viewport()}>
          <Show fallback={local.children} when={local.src}>
            <ImageCropperImage alt={local.alt} src={local.src} />
            <ImageCropperSelection />
          </Show>
        </ImageCropperPrimitive.Viewport>
      </ImageCropperPrimitive.Root>
    </ImageCropperStylesContext>
  );
}

export const ImageCropperImage: Component<ImageCropperImageProps> = withContext(
  ImageCropperPrimitive.Image,
  { name: "Image" },
);

export function ImageCropperSelection(
  props: ImageCropperSelectionProps,
): JSX.Element {
  const [local, rest] = splitProps(props, ["axis", "children", "class"]);
  const styles = useImageCropper();
  const axis = () => local.axis ?? "both";

  return (
    <ImageCropperPrimitive.Selection
      {...rest}
      class={styles.slots.selection({ class: local.class })}
    >
      {local.children}
      <Show when={axis() === "horizontal" || axis() === "both"}>
        <ImageCropperGrid axis="horizontal" />
      </Show>
      <Show when={axis() === "vertical" || axis() === "both"}>
        <ImageCropperGrid axis="vertical" />
      </Show>
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

export function ImageCropperHandle(
  props: ImageCropperHandleProps,
): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const styles = useImageCropper();
  return (
    <ImageCropperPrimitive.Handle
      {...rest}
      class={styles.slots.handle({ class: local.class })}
    >
      <span aria-hidden class={styles.slots.handleGrip()} />
    </ImageCropperPrimitive.Handle>
  );
}

export function ImageCropperGrid(props: ImageCropperGridProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const styles = useImageCropper();

  return (
    <ImageCropperPrimitive.Grid
      {...rest}
      class={styles.slots.grid({ class: local.class })}
    />
  );
}

export type {
  ImageCropperGridProps,
  ImageCropperHandleProps,
  ImageCropperImageProps,
} from "@ark-ui/solid/image-cropper";

export const ImageCropper = Object.assign(ImageCropperRoot, {
  Grid: ImageCropperGrid,
  Handle: ImageCropperHandle,
  Image: ImageCropperImage,
  Selection: ImageCropperSelection,
});
