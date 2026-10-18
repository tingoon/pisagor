<script lang="ts">
  import type { HTMLThAttributes } from "svelte/elements";
  import { withContext } from "./table.context";

  let { children, ...rest }: HTMLThAttributes = $props();
  const part = withContext(() => rest, { name: "Head" });
</script>

<th {...part.props}>{@render children?.()}</th>
