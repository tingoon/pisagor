<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import { withFileUploadContext } from "./file-upload.context";

  let { children, ...rest }: HTMLAttributes<HTMLDivElement> = $props();
  const part = withFileUploadContext(() => rest, { name: "Title" });
</script>

<div {...part.props}>{@render children?.()}</div>
