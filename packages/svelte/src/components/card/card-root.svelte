<script lang="ts">
import type { CardProps as BaseCardProps } from "@pisagor/props";
import type { HTMLAttributes } from "svelte/elements";
import { withProvider } from "./card.context";

type Props = HTMLAttributes<HTMLDivElement> & {
  children?: import("svelte").Snippet;
} & BaseCardProps;

let { children, ...rest }: Props = $props();

const root = withProvider(() => rest, { name: "Root", slot: "base" });
</script>

<div {...root.props}>
  {@render children?.()}
</div>
