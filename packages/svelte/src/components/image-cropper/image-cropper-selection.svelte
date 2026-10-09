<script lang="ts">
import {
  type ImageCropperSelectionProps as ArkSelectionProps,
  ImageCropper as ImageCropperPrimitive,
} from "@ark-ui/svelte/image-cropper";
import { cn } from "@pisagor/utils";
import { useImageCropper } from "./image-cropper.context";
import ImageCropperGrid from "./image-cropper-grid.svelte";
import ImageCropperHandle from "./image-cropper-handle.svelte";

type Props = ArkSelectionProps & { axis?: "horizontal" | "vertical" | "both" };

let { axis = "both", children, class: className, ...rest }: Props = $props();
const styles = useImageCropper();
const slots = $derived(styles.slots);
</script>

<ImageCropperPrimitive.Selection
  {...rest}
  class={slots.selection({ class: cn(className) })}
>
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
