<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import { withContext } from "./announcement.context";

  type Props = HTMLAttributes<HTMLSpanElement> & {
    children?: import("svelte").Snippet;
  };

  let { children, ...rest }: Props = $props();

  const part = withContext(() => rest, { name: "Title" });
</script>

<span {...part.props}>{@render children?.()}</span>
