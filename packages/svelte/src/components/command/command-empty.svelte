<script lang="ts">
import type { ComponentProps } from "svelte";
import ComboboxEmpty from "../combobox/combobox-empty.svelte";
import { useCommand } from "./command.context";

type Props = ComponentProps<typeof ComboboxEmpty>;

let { children, class: className, ...rest }: Props = $props();
const { slots } = useCommand();
</script>

<ComboboxEmpty {...rest} class={slots.empty({ class: className })}>
  {#if children}
    {@render children()}
  {:else}
    No results found. Try a different search.
  {/if}
</ComboboxEmpty>
