<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import { withContext } from "./sidebar.context";

  let { children, ...rest }: HTMLAttributes<HTMLDivElement> = $props();
  const part = withContext(() => rest, {
    defaultProps: { "data-sidebar": "header" },
    name: "Header",
  });
</script>

<div {...part.props}>
  {@render children?.()}
</div>
