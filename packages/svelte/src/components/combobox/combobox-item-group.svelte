<script lang="ts">
  import {
    Combobox as ComboboxPrimitive,
    type ComboboxItemGroupProps as ArkProps,
  } from "@ark-ui/svelte";
  import type { ComboboxItemGroupContract } from "@pisagor/contracts";
  import type { Snippet } from "svelte";
  import ComboboxItemGroupLabel from "./combobox-item-group-label.svelte";

  type Props = ArkProps & {
    heading?: string | Snippet;
  } & ComboboxItemGroupContract;

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
