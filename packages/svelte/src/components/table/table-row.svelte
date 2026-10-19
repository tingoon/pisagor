<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import { withContext } from "./table.context";

  let { children, ...rest }: HTMLAttributes<HTMLElement> = $props();
  const part = withContext(() => rest, { name: "Row" });
</script>

<tr {...part.props}>{@render children?.()}</tr>
