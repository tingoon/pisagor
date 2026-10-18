<script lang="ts">
  import type { Snippet } from "svelte";
  import type { HTMLAttributes } from "svelte/elements";
  import { withContext } from "./drawer.context";

  type Props = HTMLAttributes<HTMLDivElement> & {
    children?: Snippet;
  };

  let { children, ...rest }: Props = $props();
  const part = withContext(() => rest, { name: "Description" });
</script>

<div {...part.props}>{@render children?.()}</div>
