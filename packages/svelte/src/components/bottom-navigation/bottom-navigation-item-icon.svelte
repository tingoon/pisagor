<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import { withBottomNavigationItemContext } from "./bottom-navigation.context";

  let { children, ...rest }: HTMLAttributes<HTMLSpanElement> = $props();
  const part = withBottomNavigationItemContext(() => rest, {
    defaultProps: { "aria-hidden": true, "data-part": "item-icon" },
    name: "ItemIcon",
    slot: "icon",
  });
</script>

<span {...part.props}>{@render children?.()}</span>
