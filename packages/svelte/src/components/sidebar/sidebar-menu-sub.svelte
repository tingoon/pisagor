<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import { withContext } from "./sidebar.context";

  let { children, ...rest }: HTMLAttributes<HTMLUListElement> = $props();
  const part = withContext(() => rest, {
    defaultProps: { "data-sidebar": "menu-sub" },
    name: "MenuSub",
  });
</script>

<ul {...part.props}>
  {@render children?.()}
</ul>
