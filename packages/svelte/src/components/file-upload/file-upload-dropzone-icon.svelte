<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import UploadIcon from "phosphor-svelte/lib/UploadIcon";
import type { HTMLAttributes } from "svelte/elements";
import { withFileUploadContext } from "./file-upload.context";

let { children, ...rest }: HTMLAttributes<HTMLDivElement> = $props();
const part = withFileUploadContext(() => rest, {
  defaultProps: { "data-part": "dropzone-icon" },
  name: "DropzoneIcon",
  slot: "dropzoneIcon",
});
</script>

<Ark as="div" {...part.props}>
  {#if children}
    {@render children()}
  {:else}
    <UploadIcon />
  {/if}
</Ark>
