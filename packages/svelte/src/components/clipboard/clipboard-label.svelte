<script lang="ts">
import type { HTMLAttributes } from "svelte/elements";
import { withContext } from "./clipboard.context";

let { children, ...rest }: HTMLAttributes<HTMLSpanElement> = $props();
const part = withContext(() => rest, { name: "Label" });
</script>

<span {...part.props}> {@render children?.()} </span>
