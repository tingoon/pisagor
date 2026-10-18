<script lang="ts">
  import {
    ImageCropper as ImageCropperPrimitive,
    type ImageCropperSelectionProps as ArkSelectionProps,
  } from "@ark-ui/svelte";
  import { cn } from "@pisagor/utils";
  import { useStyles } from "./image-cropper.context";
  import ImageCropperGrid from "./image-cropper-grid.svelte";
  import ImageCropperHandle from "./image-cropper-handle.svelte";

  type Props = ArkSelectionProps & {
    axis?: "horizontal" | "vertical" | "both";
  };

  let { axis = "both", children, class: className, ...rest }: Props = $props();
  const styles = useStyles();
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
