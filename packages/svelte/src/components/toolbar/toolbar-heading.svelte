<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import type { HTMLAttributes } from "svelte/elements";
import { withContext } from "./toolbar.context";

let { children, ...rest }: HTMLAttributes<HTMLElement> = $props();
const part = withContext(() => rest, { name: "Heading" });
</script>

<Ark as="div" {...part.props}> {@render children?.()} </Ark>
