<script lang="ts">
  import type { Snippet } from "svelte";
  import type { HTMLAttributes } from "svelte/elements";
  import { withStepsItemContext } from "./steps.context";

  type Props = HTMLAttributes<HTMLSpanElement> & {
    children?: Snippet;
  };

  let { children, ...rest }: Props = $props();
  const part = withStepsItemContext(() => rest, { name: "Title" });
</script>

<span {...part.props}>{@render children?.()}</span>
