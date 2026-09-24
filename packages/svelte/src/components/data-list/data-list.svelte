<script lang="ts">
import type { HTMLAttributes } from "svelte/elements";
import DataListItem from "./data-list-item.svelte";
import DataListRoot from "./data-list-root.svelte";

type DataListPresetItem = {
  label: string;
  value: string;
};

type Props = Omit<HTMLAttributes<HTMLDListElement>, "class" | "children"> & {
  class?: string | undefined;
  items?: DataListPresetItem[];
  orientation?: "horizontal" | "vertical";
  recipe?: typeof import("@pisagor/recipes/data-list").dataListRecipe;
};

let { items, class: className, orientation, recipe, ...rest }: Props = $props();
</script>

<DataListRoot {...rest} class={className} {orientation} {recipe}>
  {#each items ?? [] as item (item.label)}
    <DataListItem value={item.value}>{item.label}</DataListItem>
  {/each}
</DataListRoot>
