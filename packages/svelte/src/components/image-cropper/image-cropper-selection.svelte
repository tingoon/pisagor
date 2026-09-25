<script lang="ts">
import type { ImageCropperSelectionProps as ArkSelectionProps } from "@ark-ui/svelte/image-cropper";
import { ImageCropper as ImageCropperPrimitive } from "@ark-ui/svelte/image-cropper";
import { cn } from "@pisagor/utils";
import { useImageCropper } from "./image-cropper.context";
import ImageCropperGrid from "./image-cropper-grid.svelte";
import ImageCropperHandle from "./image-cropper-handle.svelte";

type Props = Omit<ArkSelectionProps, "class"> & {
  axis?: "horizontal" | "vertical" | "both";
  class?: string | undefined;
};

let { axis = "both", children, class: className, ...rest }: Props = $props();
const { slots } = useImageCropper();
</script>

<ImageCropperPrimitive.Selection {...rest} class={slots.selection({ class: cn(className) })}>
  {@render children?.()}
  {#if axis === "horizontal" || axis === "both"}
    <ImageCropperGrid axis="horizontal" />
  {/if}
  {#if axis === "vertical" || axis === "both"}
    <ImageCropperGrid axis="vertical" />
  {/if}
  <ImageCropperHandle position="n" />
  <ImageCropperHandle position="e" />
  <ImageCropperHandle position="s" />
  <ImageCropperHandle position="w" />
  <ImageCropperHandle position="ne" />
  <ImageCropperHandle position="se" />
  <ImageCropperHandle position="sw" />
  <ImageCropperHandle position="nw" />
</ImageCropperPrimitive.Selection>
