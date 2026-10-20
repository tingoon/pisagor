<script lang="ts">
  import { SegmentGroup as SegmentGroupPrimitive } from "@ark-ui/svelte";
  import type {
    SegmentGroupContract,
    SegmentGroupPresetItem,
    SegmentGroupRootContract,
  } from "@pisagor/contracts";
  import { cn } from "@pisagor/utils";
  import type { ComponentProps } from "svelte";
  import SegmentGroupIndicator from "./segment-group-indicator.svelte";
  import SegmentGroupItem from "./segment-group-item.svelte";
  import SegmentGroupItemControl from "./segment-group-item-control.svelte";
  import SegmentGroupItemText from "./segment-group-item-text.svelte";
  import SegmentGroupRoot from "./segment-group-root.svelte";

  type PresetItem = Omit<SegmentGroupPresetItem, "label"> & {
    label: string;
  };

  type Props = Omit<ComponentProps<typeof SegmentGroupRoot>, "children"> & {
    items?: PresetItem[];
  } & SegmentGroupRootContract &
    SegmentGroupContract;

  let { class: className, classNames, items, ...rest }: Props = $props();
</script>

<SegmentGroupRoot {...rest} class={cn(classNames?.base, className)}>
  <SegmentGroupIndicator class={classNames?.indicator} />
  {#each items ?? [] as item (item.value)}
    <SegmentGroupItem
      class={classNames?.item}
      disabled={item.disabled}
      value={item.value}
    >
      <SegmentGroupItemText class={classNames?.itemText}>
        {item.label}
      </SegmentGroupItemText>
      <SegmentGroupItemControl class={classNames?.itemControl} />
      <SegmentGroupPrimitive.ItemHiddenInput />
    </SegmentGroupItem>
  {/each}
</SegmentGroupRoot>
