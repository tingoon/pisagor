<script lang="ts">
import { dataTableRecipe } from "@pisagor/recipes/data-table";
import { cn } from "@pisagor/utils";
import type { RowData, TableOptions } from "@tanstack/svelte-table";
import { createTable } from "@tanstack/svelte-table";
import { setDataTableContext } from "./data-table.context";
import { type DataTableFeatures, dataTableFeatures } from "./data-table.features";

type Props = {
  children?: import("svelte").Snippet;
  class?: string | undefined;
  features?: DataTableFeatures;
  recipe?: typeof dataTableRecipe;
} & Omit<TableOptions<DataTableFeatures, RowData>, "features">;

let {
  children,
  class: className,
  features = dataTableFeatures,
  recipe = dataTableRecipe,
  columns,
  data,
  ...restOptions
}: Props = $props();

const slots = $derived(recipe());

const table = createTable({
  ...restOptions,
  get columns() {
    return columns;
  },
  get data() {
    return data;
  },
  features,
});

setDataTableContext({
  get slots() {
    return slots;
  },
  get table() {
    return table;
  },
});
</script>

<div class={slots.base({ class: cn(className) })} data-part="root" data-scope="data-table">
  {@render children?.()}
</div>
