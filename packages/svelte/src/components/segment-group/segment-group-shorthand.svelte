<script lang="ts">
import type { ComponentProps } from "svelte";
import SegmentGroupItem from "./segment-group-item.svelte";
import SegmentGroupRoot from "./segment-group-root.svelte";

type PresetItem = {
  disabled?: boolean;
  label: string;
  value: string;
};

type Props = Omit<ComponentProps<typeof SegmentGroupRoot>, "children"> & {
  items?: PresetItem[];
};

let { items, ...rest }: Props = $props();
</script>

<SegmentGroupRoot {...rest}>
  {#each items ?? [] as item (item.value)}
    <SegmentGroupItem disabled={item.disabled} text={item.label} value={item.value} />
  {/each}
</SegmentGroupRoot>
