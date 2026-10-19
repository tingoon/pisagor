<script lang="ts">
  import type { HTMLLiAttributes } from "svelte/elements";
  import { withContext } from "./sidebar.context";

  let { children, ...rest }: HTMLLiAttributes = $props();
  const part = withContext(() => rest, {
    defaultProps: { "data-sidebar": "menu-sub-item" },
    name: "MenuSubItem",
  });
</script>

<li {...part.props}>
  {@render children?.()}
</li>
