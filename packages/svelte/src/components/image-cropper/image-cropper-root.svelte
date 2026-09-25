<script lang="ts">
import type { ImageCropperRootProps as ArkRootProps } from "@ark-ui/svelte/image-cropper";
import { ImageCropper as ImageCropperPrimitive } from "@ark-ui/svelte/image-cropper";
import { imageCropperRecipe } from "@pisagor/recipes/image-cropper";
import { cn } from "@pisagor/utils";
import { setImageCropperContext } from "./image-cropper.context";
import ImageCropperImage from "./image-cropper-image.svelte";
import ImageCropperSelection from "./image-cropper-selection.svelte";

type Props = Omit<ArkRootProps, "class" | "src" | "cropShape"> & {
  alt?: string;
  class?: string | undefined;
  cropShape?: "rectangle" | "circle";
  recipe?: typeof imageCropperRecipe;
  src?: string;
};

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
setImageCropperContext({
  get slots() {
    return slots;
  },
});
</script>

<ImageCropperPrimitive.Root {...rest} class={slots.base({ class: cn(className) })} {cropShape}>
  <ImageCropperPrimitive.Viewport class={slots.viewport()}>
    {#if src}
      <ImageCropperImage {alt} {src} />
      <ImageCropperSelection />
    {:else}
      {@render children?.()}
    {/if}
  </ImageCropperPrimitive.Viewport>
</ImageCropperPrimitive.Root>
