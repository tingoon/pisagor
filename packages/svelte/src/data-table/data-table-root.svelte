<script lang="ts">
import type { DataTableProps as BaseDataTableProps } from "@pisagor/props";
import { dataTableRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import type { RowData, TableOptions } from "@tanstack/svelte-table";
import { createTable } from "@tanstack/svelte-table";
import type { ClassValue } from "svelte/elements";
import { reactiveTableOptions } from "../utils";
import { setDataTableContext } from "./data-table.context";
import {
  type DataTableFeatures,
  dataTableFeatures,
} from "./data-table.features";

type Props = {
  class?: ClassValue;
  children?: import("svelte").Snippet;
  features?: DataTableFeatures;
} & Omit<TableOptions<DataTableFeatures, RowData>, "features"> &
  BaseDataTableProps;

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

const table = createTable(
  reactiveTableOptions(
    {
      get columns() {
        return columns;
      },
      get data() {
        return data;
      },
      get features() {
        return features;
      },
    },
    () => restOptions,
  ),
);

setDataTableContext({
  get slots() {
    return slots;
  },
  get table() {
    return table;
  },
});
</script>

<div
  class={slots.base({ class: cn(className) })}
  data-part="root"
  data-scope="data-table"
>
  {@render children?.()}
</div>
