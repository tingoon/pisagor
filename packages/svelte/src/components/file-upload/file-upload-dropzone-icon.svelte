<script lang="ts">
  import { UploadIcon } from "phosphor-svelte";
  import type { HTMLAttributes } from "svelte/elements";
  import { withFileUploadContext } from "./file-upload.context";

  let { children, ...rest }: HTMLAttributes<HTMLDivElement> = $props();
  const part = withFileUploadContext(() => rest, {
    defaultProps: { "data-part": "dropzone-icon" },
    name: "DropzoneIcon",
    slot: "dropzoneIcon",
  });
</script>

<div {...part.props}>
  {#if children}
    {@render children()}
  {:else}
    <UploadIcon />
  {/if}
</div>
