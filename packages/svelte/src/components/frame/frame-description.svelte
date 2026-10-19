<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import { withContext } from "./frame.context";

  type Props = HTMLAttributes<HTMLDivElement> & {
    children?: import("svelte").Snippet;
  };

  let { children, ...rest }: Props = $props();

  const part = withContext(() => rest, {
    name: "Description",
    part: "panel-description",
    slot: "panelDescription",
  });
</script>

<div {...part.props}>{@render children?.()}</div>
