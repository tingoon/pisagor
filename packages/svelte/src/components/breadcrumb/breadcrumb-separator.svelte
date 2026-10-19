<script lang="ts">
  import { CaretRightIcon } from "phosphor-svelte";
  import type { HTMLAttributes } from "svelte/elements";
  import { withBreadcrumbContext } from "./breadcrumb.context";

  let { children, ...rest }: HTMLAttributes<HTMLLIElement> = $props();
  const part = withBreadcrumbContext(() => rest, { name: "Separator" });
</script>

<li {...part.props} aria-hidden="true" role="presentation">
  {#if children}
    {@render children()}
  {:else}
    <CaretRightIcon />
  {/if}
</li>
