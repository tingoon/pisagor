<script lang="ts">
  import { Ark } from "@ark-ui/svelte";
  import type { HTMLAttributes } from "svelte/elements";
  import { withTimerItemGroupContext } from "./timer.context";

  let { children, ...rest }: HTMLAttributes<HTMLDivElement> = $props();
  const part = withTimerItemGroupContext(() => rest, {
    defaultProps: { "data-part": "item-label" },
    name: "ItemLabel",
    slot: "label",
  });
</script>

<Ark as="div" {...part.props}>{@render children?.()}</Ark>
