<script lang="ts">
  import {
    ImageCropper as ImageCropperPrimitive,
    type ImageCropperHandleProps,
  } from "@ark-ui/svelte";
  import { useStyles, withContext } from "./image-cropper.context";

  let { children, ...rest }: ImageCropperHandleProps = $props();
  const styles = useStyles();
  const part = withContext(() => rest, { name: "Handle" });
</script>

<!-- Resize handle; renders its visual grip unless you pass children. -->
<ImageCropperPrimitive.Handle {...part.props}>
  {#if children}
    {@render children()}
  {:else}
    <span aria-hidden="true" class={styles.slots.handleGrip()}></span>
  {/if}
</ImageCropperPrimitive.Handle>
