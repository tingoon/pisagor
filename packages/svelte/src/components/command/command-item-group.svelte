<script lang="ts">
  import type { Snippet } from "svelte";
  import type { ComponentProps } from "svelte";
  import ComboboxItemGroup from "../combobox/combobox-item-group.svelte";
  import ComboboxItemGroupLabel from "../combobox/combobox-item-group-label.svelte";

  type Props = ComponentProps<typeof ComboboxItemGroup> & {
    heading?: string | Snippet;
  };

  let { children, heading, ...rest }: Props = $props();
</script>

<ComboboxItemGroup {...rest}>
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
</ComboboxItemGroup>
