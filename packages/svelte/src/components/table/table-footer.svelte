<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import { withContext } from "./table.context";

  let { children, ...rest }: HTMLAttributes<HTMLElement> = $props();
  const part = withContext(() => rest, { name: "Footer" });
</script>

<tfoot {...part.props}>{@render children?.()}</tfoot>
