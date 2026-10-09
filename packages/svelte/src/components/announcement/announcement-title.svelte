<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import type { HTMLAttributes } from "svelte/elements";
import { withContext } from "./announcement.context";

type Props = HTMLAttributes<HTMLSpanElement> & {
  children?: import("svelte").Snippet;
};

let { children, ...rest }: Props = $props();

const part = withContext(() => rest, { name: "Title", slot: "title" });
</script>

<Ark as="span" {...part.props}> {@render children?.()} </Ark>
