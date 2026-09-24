<script lang="ts">
import type { SelectItemGroupProps as ArkSelectItemGroupProps } from "@ark-ui/svelte/select";
import { Select as SelectPrimitive } from "@ark-ui/svelte/select";
import type { Snippet } from "svelte";
import SelectItemGroupLabel from "./select-item-group-label.svelte";

type Props = ArkSelectItemGroupProps & {
  heading?: string | Snippet;
};

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
