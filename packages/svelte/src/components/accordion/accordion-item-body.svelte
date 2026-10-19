<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import { withContext } from "./accordion.context";

  type Props = HTMLAttributes<HTMLDivElement> & {
    children?: import("svelte").Snippet;
  };

  let { children, ...rest }: Props = $props();
  const part = withContext(() => rest, { name: "ItemBody" });
</script>

<div {...part.props}>
  {@render children?.()}
</div>
