<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import type { HTMLThAttributes } from "svelte/elements";
import { withContext } from "./table.context";

let { children, ...rest }: HTMLThAttributes = $props();
const part = withContext(() => rest, { name: "Head" });
</script>

<Ark as="th" {...part.props}> {@render children?.()} </Ark>
