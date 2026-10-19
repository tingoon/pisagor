<script lang="ts">
  import type {
    SegmentGroupPresetItem,
    SegmentGroupRootContract,
    SegmentGroupContract,
  } from "@pisagor/contracts";
  import type { ComponentProps } from "svelte";
  import SegmentGroupItem from "./segment-group-item.svelte";
  import SegmentGroupRoot from "./segment-group-root.svelte";

  type PresetItem = Omit<SegmentGroupPresetItem, "label"> & {
    label: string;
  };

  type Props = Omit<ComponentProps<typeof SegmentGroupRoot>, "children"> & {
    items?: PresetItem[];
  } & SegmentGroupRootContract &
    SegmentGroupContract;

  let { items, ...rest }: Props = $props();
</script>

<SegmentGroupRoot {...rest}>
  {#each items ?? [] as item (item.value)}
    <SegmentGroupItem
      disabled={item.disabled}
      text={item.label}
      value={item.value}
    />
  {/each}
</SegmentGroupRoot>
