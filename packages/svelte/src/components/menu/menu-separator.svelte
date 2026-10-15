<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import { getContext } from "svelte";
import type { HTMLAttributes } from "svelte/elements";
import { MENU_INSIDE_LIST, withContext } from "./menu.context";

let { ...rest }: HTMLAttributes<HTMLElement> = $props();
const insideList = getContext<boolean | undefined>(MENU_INSIDE_LIST) ?? false;
const part = withContext(() => rest, { name: "Separator" });
</script>

{#if insideList}
  <Ark as="li" {...part.props} aria-hidden="true" />
{:else}
  <Ark as="hr" {...part.props} aria-hidden="true" />
{/if}
