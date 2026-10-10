<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import type { HTMLAttributes } from "svelte/elements";
import { withContext } from "./table.context";

let { children, ...rest }: HTMLAttributes<HTMLElement> = $props();
const part = withContext(() => rest, { name: "Caption" });
</script>

<Ark as="caption" {...part.props}> {@render children?.()} </Ark>
