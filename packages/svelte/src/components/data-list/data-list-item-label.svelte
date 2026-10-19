<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import { withContext } from "./data-list.context";

  type Props = HTMLAttributes<HTMLElement> & {
    children?: import("svelte").Snippet;
  };

  let { children, ...rest }: Props = $props();

  const part = withContext(() => rest, {
    name: "Label",
    part: "item-label",
  });
</script>

<dt {...part.props}>{@render children?.()}</dt>
