<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import type { StatProps as BaseStatProps } from "@pisagor/props";
import type { HTMLAttributes } from "svelte/elements";
import { withProvider } from "./stat.context";

type Props = HTMLAttributes<HTMLDivElement> & {
  children?: import("svelte").Snippet;
} & BaseStatProps;

let { children, ...rest }: Props = $props();

const root = withProvider(() => rest, { name: "Root", slot: "base" });
</script>

<Ark as="div" {...root.props}> {@render children?.()} </Ark>
