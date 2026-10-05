<script lang="ts">
import {
  type ComboboxEmptyProps,
  Combobox as ComboboxPrimitive,
} from "@ark-ui/svelte/combobox";
import { comboboxRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import { useComboboxRoot } from "./combobox.context";

let { children, class: className, ...rest }: ComboboxEmptyProps = $props();
const ctx = useComboboxRoot();
const slots = $derived(ctx?.slots ?? comboboxRecipe());
</script>

<ComboboxPrimitive.Empty
  {...rest}
  class={slots.empty({ class: cn(className) })}
>
  {#if children}
    {@render children()}
  {:else}
    No results found. Try a different search.
  {/if}
</ComboboxPrimitive.Empty>
