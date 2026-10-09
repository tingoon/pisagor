<script lang="ts">
import {
  type ImageCropperRootProps as ArkRootProps,
  ImageCropper as ImageCropperPrimitive,
} from "@ark-ui/svelte/image-cropper";
import type { ImageCropperProps as BaseImageCropperProps } from "@pisagor/props";
import { imageCropperRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import { Context } from "./image-cropper.context";
import ImageCropperImage from "./image-cropper-image.svelte";
import ImageCropperSelection from "./image-cropper-selection.svelte";

type Props = Omit<ArkRootProps, "src" | "cropShape"> & {
  alt?: string;
  cropShape?: "rectangle" | "circle";
  src?: string;
} & BaseImageCropperProps;

let {
  alt,
  children,
  cropShape,
  src,
  recipe = imageCropperRecipe,
  class: className,
  ...rest
}: Props = $props();

const slots = $derived(recipe());
Context.set({
  get slots() {
    return slots;
  },
});
</script>

<ImageCropperPrimitive.Root
  {...rest}
  class={slots.base({ class: cn(className) })}
  {cropShape}
>
  <ImageCropperPrimitive.Viewport class={slots.viewport()}>
    {#if src}
      <ImageCropperImage {alt} {src} />
      <ImageCropperSelection />
    {:else}
      {@render children?.()}
    {/if}
  </ImageCropperPrimitive.Viewport>
</ImageCropperPrimitive.Root>
