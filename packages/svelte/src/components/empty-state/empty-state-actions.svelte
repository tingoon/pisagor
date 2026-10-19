<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import { withContext } from "./empty-state.context";

  type Props = HTMLAttributes<HTMLDivElement> & {
    children?: import("svelte").Snippet;
  };

  let { children, ...rest }: Props = $props();

  const part = withContext(() => rest, { name: "Actions" });
</script>

<div {...part.props}>{@render children?.()}</div>
