<script lang="ts">
  import {
    Select as SelectPrimitive,
    type SelectItemGroupProps as ArkSelectItemGroupProps,
  } from "@ark-ui/svelte";
  import type { SelectItemGroupContract } from "@pisagor/props";
  import type { Snippet } from "svelte";
  import SelectItemGroupLabel from "./select-item-group-label.svelte";

  type Props = ArkSelectItemGroupProps & {
    heading?: string | Snippet;
  } & SelectItemGroupContract;

  let { children, heading, ...rest }: Props = $props();
</script>

<SelectPrimitive.ItemGroup {...rest}>
  {#if heading}
    <SelectItemGroupLabel>
      {#if typeof heading === "string"}
        {heading}
      {:else}
        {@render heading()}
      {/if}
    </SelectItemGroupLabel>
  {/if}
  {@render children?.()}
</SelectPrimitive.ItemGroup>
