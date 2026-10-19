<script lang="ts">
  import type {
    DataListContract,
    DataListPresetItem as BaseDataListPresetItem,
    DataListRootContract,
  } from "@pisagor/contracts";
  import type { HTMLAttributes } from "svelte/elements";
  import DataListItem from "./data-list-item.svelte";
  import DataListRoot from "./data-list-root.svelte";

  type DataListPresetItem = Omit<BaseDataListPresetItem, "label" | "value"> & {
    label: string;
    value: string;
  };
  type Props = Omit<HTMLAttributes<HTMLDListElement>, "children"> & {
    items?: DataListPresetItem[];
    orientation?: "horizontal" | "vertical";
  } & DataListRootContract &
    DataListContract;

  let {
    items,
    class: className,
    orientation,
    recipe,
    ...rest
  }: Props = $props();
</script>

<DataListRoot {...rest} class={className} {orientation} {recipe}>
  {#each items ?? [] as item (item.label)}
    <DataListItem value={item.value}>{item.label}</DataListItem>
  {/each}
</DataListRoot>
