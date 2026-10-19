<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import { withTimerItemGroupContext } from "./timer.context";

  let { children, ...rest }: HTMLAttributes<HTMLDivElement> = $props();
  const part = withTimerItemGroupContext(() => rest, {
    name: "ItemLabel",
    slot: "label",
  });
</script>

<div {...part.props}>{@render children?.()}</div>
