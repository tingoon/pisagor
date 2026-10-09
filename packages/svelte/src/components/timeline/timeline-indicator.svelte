<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import type { HTMLAttributes } from "svelte/elements";
import { withContext } from "./timeline.context";

let { children, ...rest }: HTMLAttributes<HTMLDivElement> = $props();
const part = withContext(() => rest, { name: "Indicator", slot: "indicator" });
</script>

<Ark as="div" {...part.props}> {@render children?.()} </Ark>
