<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import { withContext } from "./sidebar.context";

  let { children, ...rest }: HTMLAttributes<HTMLElement> = $props();
  const part = withContext(() => rest, { name: "Inset" });
</script>

<main {...part.props}>
  {@render children?.()}
</main>
