<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import type { HTMLAttributes } from "svelte/elements";
import { withContext } from "./card.context";

type Props = HTMLAttributes<HTMLDivElement> & {
  children?: import("svelte").Snippet;
};

let { children, ...rest }: Props = $props();

const part = withContext(() => rest, { name: "Content", slot: "content" });
</script>

<Ark as="div" {...part.props}> {@render children?.()} </Ark>
