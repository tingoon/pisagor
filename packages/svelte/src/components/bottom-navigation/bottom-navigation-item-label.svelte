<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import { withBottomNavigationItemContext } from "./bottom-navigation.context";

  let { children, ...rest }: HTMLAttributes<HTMLSpanElement> = $props();
  const part = withBottomNavigationItemContext(() => rest, {
    name: "ItemLabel",
    slot: "label",
  });
</script>

<span {...part.props}>{@render children?.()}</span>
