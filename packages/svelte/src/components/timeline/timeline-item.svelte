<script lang="ts">
  import type {
    TimelineItemRootContract,
    TimelineItemContract,
  } from "@pisagor/contracts";
  import type { HTMLAttributes } from "svelte/elements";
  import { withProvider } from "./timeline.context";

  type Props = HTMLAttributes<HTMLLIElement> &
    TimelineItemRootContract &
    TimelineItemContract;

  let { children, ...rest }: Props = $props();

  const root = withProvider(() => rest, {
    defaultProps: { "data-part": "item" },
    name: "Item",
    slot: "base",
  });
</script>

<li {...root.props}>{@render children?.()}</li>
