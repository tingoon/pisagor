<script lang="ts">
import type { ComboboxItemGroupProps as ArkProps } from "@ark-ui/svelte/combobox";
import { Combobox as ComboboxPrimitive } from "@ark-ui/svelte/combobox";
import type { Snippet } from "svelte";
import ComboboxItemGroupLabel from "./combobox-item-group-label.svelte";

type Props = ArkProps & { heading?: string | Snippet };

let { children, heading, ...rest }: Props = $props();
</script>

<ComboboxPrimitive.ItemGroup {...rest}>
  {#if heading}
    <ComboboxItemGroupLabel>
      {#if typeof heading === "string"}
        {heading}
      {:else}
        {@render heading()}
      {/if}
    </ComboboxItemGroupLabel>
  {/if}
  {@render children?.()}
</ComboboxPrimitive.ItemGroup>
