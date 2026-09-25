<script lang="ts">
import { cn } from "@pisagor/utils";
import type { ComponentProps } from "svelte";
import ComboboxEmpty from "../combobox/combobox-empty.svelte";
import { useCommand } from "./command.context";

type Props = ComponentProps<typeof ComboboxEmpty>;

let { children, class: className, ...rest }: Props = $props();
const { slots } = useCommand();
</script>

<ComboboxEmpty {...rest} class={slots.empty({ class: cn(className) })}>
  {#if children}
    {@render children()}
  {:else}
    No results found. Try a different search.
  {/if}
</ComboboxEmpty>
