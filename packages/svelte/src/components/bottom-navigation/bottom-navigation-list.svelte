<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import { withBottomNavigationContext } from "./bottom-navigation.context";

  let { children, ...rest }: HTMLAttributes<HTMLDivElement> = $props();
  const part = withBottomNavigationContext(() => rest, { name: "List" });
</script>

<div {...part.props}>{@render children?.()}</div>
