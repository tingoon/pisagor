<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import type { HTMLAttributes } from "svelte/elements";
import { withContext } from "./empty-state.context";

type Props = HTMLAttributes<HTMLHeadingElement> & {
  children?: import("svelte").Snippet;
};

let { children, ...rest }: Props = $props();

const part = withContext(() => rest, { name: "Title", slot: "title" });
</script>

<Ark as="h3" {...part.props}> {@render children?.()} </Ark>
