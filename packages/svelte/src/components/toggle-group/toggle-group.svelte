<script lang="ts">
  import type {
    ToggleGroupPresetItem as BaseToggleGroupPresetItem,
    ToggleGroupRootContract,
    ToggleGroupContract,
  } from "@pisagor/props";
  import type { ComponentProps } from "svelte";
  import ToggleGroupItem from "./toggle-group-item.svelte";
  import ToggleGroupRoot from "./toggle-group-root.svelte";

  type ToggleGroupPresetItem = Omit<BaseToggleGroupPresetItem, "content"> & {
    content: string;
  };

  type Props = ComponentProps<typeof ToggleGroupRoot> &
    Omit<ToggleGroupRootContract, "items"> & {
      items?: ToggleGroupPresetItem[];
    } & ToggleGroupContract;

  let { items, children, ...rest }: Props = $props();
</script>

<ToggleGroupRoot {...rest}>
  {#if children}
    {@render children()}
  {:else}
    {#each items ?? [] as item (item.value)}
      <ToggleGroupItem disabled={item.disabled} value={item.value}>
        {item.content}
      </ToggleGroupItem>
    {/each}
  {/if}
</ToggleGroupRoot>
