<script lang="ts">
  import type {
    RadioGroupPresetItem as BaseRadioGroupPresetItem,
    RadioGroupRootContract,
    RadioGroupContract,
  } from "@pisagor/contracts";
  import type { ComponentProps } from "svelte";
  import RadioGroupItem from "./radio-group-item.svelte";
  import RadioGroupRoot from "./radio-group-root.svelte";

  type RadioGroupPresetItem = Omit<BaseRadioGroupPresetItem, "label"> & {
    label: string;
  };
  type Props = ComponentProps<typeof RadioGroupRoot> & {
    items?: RadioGroupPresetItem[];
  } & RadioGroupRootContract &
    RadioGroupContract;

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
