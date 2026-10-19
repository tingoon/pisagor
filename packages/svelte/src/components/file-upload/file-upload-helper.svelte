<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import { withFileUploadContext } from "./file-upload.context";

  let { children, ...rest }: HTMLAttributes<HTMLDivElement> = $props();
  const part = withFileUploadContext(() => rest, {
    defaultProps: { "data-part": "dropzone-helper" },
    name: "Helper",
    slot: "helper",
  });
</script>

<div {...part.props}>{@render children?.()}</div>
