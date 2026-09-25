import type {
  ImageCropperGridProps,
  ImageCropperHandleProps,
  ImageCropperImageProps,
  ImageCropperRootProps as ImageCropperPrimitiveRootProps,
  ImageCropperSelectionProps as ImageCropperPrimitiveSelectionProps,
} from "@ark-ui/solid/image-cropper";
import { ImageCropper as ImageCropperPrimitive } from "@ark-ui/solid/image-cropper";
import { imageCropperRecipe } from "@pisagor/recipes/image-cropper";
import { cn } from "@pisagor/utils";
import type { JSX } from "solid-js";
import { Show, splitProps } from "solid-js";
import { ImageCropperContext, useImageCropper } from "./image-cropper.context";

export interface ImageCropperRootProps
  extends Omit<ImageCropperPrimitiveRootProps, "src" | "cropShape"> {
  src?: string;
  alt?: string;
  cropShape?: "rectangle" | "circle";
  recipe?: typeof imageCropperRecipe;
}

export interface ImageCropperSelectionProps
  extends ImageCropperPrimitiveSelectionProps {
  axis?: "horizontal" | "vertical" | "both";
}

export function ImageCropperRoot(props: ImageCropperRootProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "alt",
    "children",
    "cropShape",
    "src",
    "recipe",
    "class",
  ]);
  const slots = () => (local.recipe ?? imageCropperRecipe)();

  return (
    <ImageCropperContext value={{ slots: slots() }}>
      <ImageCropperPrimitive.Root
        {...rest}
        class={slots().base({ class: cn(local.class) })}
        cropShape={local.cropShape}
      >
        <ImageCropperPrimitive.Viewport class={slots().viewport()}>
          <Show fallback={local.children} when={local.src}>
            <ImageCropperImage alt={local.alt} src={local.src} />
            <ImageCropperSelection />
          </Show>
        </ImageCropperPrimitive.Viewport>
      </ImageCropperPrimitive.Root>
    </ImageCropperContext>
  );
}

export function ImageCropperImage(props: ImageCropperImageProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useImageCropper();
  return (
    <ImageCropperPrimitive.Image
      {...rest}
      class={slots.image({ class: local.class })}
    />
  );
}

export function ImageCropperSelection(
  props: ImageCropperSelectionProps,
): JSX.Element {
  const [local, rest] = splitProps(props, ["axis", "children", "class"]);
  const { slots } = useImageCropper();
  const axis = () => local.axis ?? "both";

  return (
    <ImageCropperPrimitive.Selection
      {...rest}
      class={slots.selection({ class: local.class })}
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
  const { slots } = useImageCropper();
  return (
    <ImageCropperPrimitive.Handle
      {...rest}
      class={slots.handle({ class: local.class })}
    >
      <span aria-hidden class={slots.handleGrip()} />
    </ImageCropperPrimitive.Handle>
  );
}

export function ImageCropperGrid(props: ImageCropperGridProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useImageCropper();
  return (
    <ImageCropperPrimitive.Grid
      {...rest}
      class={slots.grid({ class: local.class })}
    />
  );
}
