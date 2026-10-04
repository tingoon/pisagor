<script lang="ts">
import type { DataGridProps as BaseDataGridProps } from "@pisagor/props";
import { dataGridRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import type { RowData, TableOptions } from "@tanstack/svelte-table";
import { createTable } from "@tanstack/svelte-table";
import { setDataGridContext } from "./data-grid.context";
import { type DataGridFeatures, dataGridFeatures } from "./data-grid.features";

type Props = {
  children?: import("svelte").Snippet;
  class?: string | undefined;
  features?: DataGridFeatures;
  columnResizeMode?: "onChange" | "onEnd";
} &
  Omit<TableOptions<DataGridFeatures, RowData>, "features"> & BaseDataGridProps;

let {
  children,
  class: className,
  features = dataGridFeatures,
  recipe = dataGridRecipe,
  columnResizeMode = "onChange",
  columns,
  data,
  ...restOptions
}: Props = $props();

const slots = $derived(recipe());

const table = createTable({
  ...restOptions,
  columnResizeMode,
  get columns() {
    return columns;
  },
  get data() {
    return data;
  },
  features,
});

setDataGridContext({
  get slots() {
    return slots;
  },
  get table() {
    return table;
  },
});
</script>

<div class={slots.base({ class: cn(className) })} data-part="root" data-scope="data-grid">
  {@render children?.()}
</div>
