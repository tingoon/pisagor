<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import { withContext } from "./empty-state.context";

  type Props = HTMLAttributes<HTMLParagraphElement> & {
    children?: import("svelte").Snippet;
  };

  let { children, ...rest }: Props = $props();

  const part = withContext(() => rest, { name: "Description" });
</script>

<p {...part.props}>{@render children?.()}</p>
