<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import { withContext } from "./dropdown-menu.context";

  let { children, ...rest }: HTMLAttributes<HTMLSpanElement> = $props();
  const part = withContext(() => rest, { name: "Shortcut" });
</script>

<span {...part.props}>{@render children?.()}</span>
