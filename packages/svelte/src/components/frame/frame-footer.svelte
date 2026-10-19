<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import { withContext } from "./frame.context";

  type Props = HTMLAttributes<HTMLElement> & {
    children?: import("svelte").Snippet;
  };

  let { children, ...rest }: Props = $props();

  const part = withContext(() => rest, {
    name: "Footer",
    part: "panel-footer",
    slot: "panelFooter",
  });
</script>

<footer {...part.props}>{@render children?.()}</footer>
