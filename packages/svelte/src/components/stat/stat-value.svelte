<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import type { HTMLAttributes } from "svelte/elements";
import { withContext } from "./stat.context";

type Props = HTMLAttributes<HTMLDivElement> & {
  children?: import("svelte").Snippet;
};

let { children, ...rest }: Props = $props();

const part = withContext(() => rest, { name: "Value", slot: "value" });
</script>

<Ark as="div" {...part.props}> {@render children?.()} </Ark>
