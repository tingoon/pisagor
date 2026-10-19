<script lang="ts">
  import { getContext } from "svelte";
  import type { HTMLAttributes } from "svelte/elements";
  import { MENU_INSIDE_LIST, withContext } from "./menu.context";

  let { ...rest }: HTMLAttributes<HTMLElement> = $props();
  const insideList = getContext<boolean | undefined>(MENU_INSIDE_LIST) ?? false;
  const part = withContext(() => rest, { name: "Separator" });
</script>

{#if insideList}
  <li {...part.props} aria-hidden="true" />
{:else}
  <hr {...part.props} aria-hidden="true" />
{/if}
