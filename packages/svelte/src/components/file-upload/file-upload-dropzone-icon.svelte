<script lang="ts">
  import { UploadIcon } from "phosphor-svelte";
  import type { HTMLAttributes } from "svelte/elements";
  import { withFileUploadContext } from "./file-upload.context";

  let { children, ...rest }: HTMLAttributes<HTMLDivElement> = $props();
  const part = withFileUploadContext(() => rest, { name: "DropzoneIcon" });
</script>

<div {...part.props}>
  {#if children}
    {@render children()}
  {:else}
    <UploadIcon />
  {/if}
</div>
