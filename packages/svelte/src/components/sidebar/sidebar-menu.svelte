<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import { withContext } from "./sidebar.context";

  let { children, ...rest }: HTMLAttributes<HTMLUListElement> = $props();
  const part = withContext(() => rest, {
    defaultProps: { "data-sidebar": "menu" },
    name: "Menu",
  });
</script>

<ul {...part.props}>
  {@render children?.()}
</ul>
