<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import type { HTMLAttributes } from "svelte/elements";
import { withContext } from "./file.context";

let { children, ...rest }: HTMLAttributes<HTMLDivElement> = $props();
const part = withContext(() => rest, { name: "Actions", slot: "actions" });
</script>

<Ark as="div" {...part.props}> {@render children?.()} </Ark>
