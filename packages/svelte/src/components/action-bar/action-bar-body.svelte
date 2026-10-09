<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import type { HTMLAttributes } from "svelte/elements";
import { withContext } from "./action-bar.context";

let { children, ...rest }: HTMLAttributes<HTMLDivElement> = $props();
const part = withContext(() => rest, { name: "Body" });
</script>

<Ark as="div" {...part.props}> {@render children?.()} </Ark>
