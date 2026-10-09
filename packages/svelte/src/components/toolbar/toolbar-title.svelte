<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import type { HTMLAttributes } from "svelte/elements";
import { withContext } from "./toolbar.context";

let { children, ...rest }: HTMLAttributes<HTMLElement> = $props();
const part = withContext(() => rest, { name: "Title" });
</script>

<Ark as="h2" {...part.props}> {@render children?.()} </Ark>
