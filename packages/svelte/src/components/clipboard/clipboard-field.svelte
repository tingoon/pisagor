<script lang="ts">
import type { HTMLAttributes } from "svelte/elements";
import { withContext } from "./clipboard.context";

let { children, ...rest }: HTMLAttributes<HTMLDivElement> = $props();
const part = withContext(() => rest, { name: "Field" });
</script>

<div {...part.props}>
  {@render children?.()}
</div>
