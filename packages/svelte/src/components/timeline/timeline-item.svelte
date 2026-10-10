<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import type { TimelineItemProps as BaseTimelineItemProps } from "@pisagor/props";
import type { HTMLAttributes } from "svelte/elements";
import { withProvider } from "./timeline.context";

type Props = HTMLAttributes<HTMLLIElement> & BaseTimelineItemProps;

let { children, ...rest }: Props = $props();

const root = withProvider(() => rest, {
  defaultProps: { "data-part": "item" },
  name: "Item",
  slot: "base",
});
</script>

<Ark as="li" {...root.props}> {@render children?.()} </Ark>
