<script lang="ts">
import type { HTMLAttributes } from "svelte/elements";
import { withContext } from "./progress.context";

let { children, ...rest }: HTMLAttributes<HTMLDivElement> = $props();
const part = withContext(() => rest, { name: "Header" });
</script>

<div {...part.props}>
  {@render children?.()}
</div>
