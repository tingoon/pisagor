<script lang="ts">
import type { ComponentProps } from "svelte";
import RadioGroupItem from "./radio-group-item.svelte";
import RadioGroupRoot from "./radio-group-root.svelte";

type RadioGroupPresetItem = {
  disabled?: boolean;
  label: string;
  value: string;
};
type Props = ComponentProps<typeof RadioGroupRoot> & {
  items?: RadioGroupPresetItem[];
};

let { items = [], children, ...rest }: Props = $props();
</script>

<RadioGroupRoot {...rest}>
  {#if children}
    {@render children()}
  {:else}
    {#each items as item (item.value)}
      <RadioGroupItem disabled={item.disabled} value={item.value}>
        {item.label}
      </RadioGroupItem>
    {/each}
  {/if}
</RadioGroupRoot>
