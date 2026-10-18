<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import { withContext } from "./card.context";

  type Props = HTMLAttributes<HTMLDivElement> & {
    children?: import("svelte").Snippet;
  };

  let { children, ...rest }: Props = $props();

  const part = withContext(() => rest, { name: "Action", slot: "action" });
</script>

<div {...part.props}>{@render children?.()}</div>
