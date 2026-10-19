<script lang="ts">
  import type { ImageCropperContract } from "@pisagor/contracts";
  import type { ComponentProps } from "svelte";
  import ImageCropperGrid from "./image-cropper-grid.svelte";
  import ImageCropperHandle from "./image-cropper-handle.svelte";
  import ImageCropperImage from "./image-cropper-image.svelte";
  import ImageCropperRoot from "./image-cropper-root.svelte";
  import ImageCropperSelection from "./image-cropper-selection.svelte";
  import ImageCropperViewport from "./image-cropper-viewport.svelte";

  type Props = Omit<ComponentProps<typeof ImageCropperRoot>, "children"> &
    ImageCropperContract & {
      /** Image alt text. */
      alt?: string;
      /**
       * Which grid lines to show inside the selection.
       *
       * @defaultValue "both"
       */
      axis?: "horizontal" | "vertical" | "both" | "none";
      /** Image URL. */
      src: string;
    };

  let { alt, axis = "both", classNames, src, ...rest }: Props = $props();
  const handlePositions = ["n", "e", "s", "w", "ne", "se", "sw", "nw"] as const;
</script>

<ImageCropperRoot {...rest}>
  <ImageCropperViewport class={classNames?.viewport}>
    <ImageCropperImage {alt} class={classNames?.image} {src} />
    <ImageCropperSelection class={classNames?.selection}>
      {#if axis === "horizontal" || axis === "both"}
        <ImageCropperGrid axis="horizontal" class={classNames?.grid} />
      {/if}
      {#if axis === "vertical" || axis === "both"}
        <ImageCropperGrid axis="vertical" class={classNames?.grid} />
      {/if}
      {#each handlePositions as position (position)}
        <ImageCropperHandle class={classNames?.handle} {position} />
      {/each}
    </ImageCropperSelection>
  </ImageCropperViewport>
</ImageCropperRoot>
