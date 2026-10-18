<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import { withContext } from "./frame.context";

  type Props = HTMLAttributes<HTMLElement> & {
    children?: import("svelte").Snippet;
  };

  let { children, ...rest }: Props = $props();

  const part = withContext(() => rest, {
    defaultProps: { "data-part": "panel-header" },
    name: "Header",
    slot: "panelHeader",
  });
</script>

<header {...part.props}>{@render children?.()}</header>
