<script generics="TData extends RowData = RowData" lang="ts">
import type { DataGridProps as BaseDataGridProps } from "@pisagor/props";
import { dataGridRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import type {
  RowData,
  TableOptions,
  Table as TableType,
} from "@tanstack/svelte-table";
import { createTable } from "@tanstack/svelte-table";
import type { ClassValue } from "svelte/elements";
import { reactiveTableOptions } from "../utils";
import { setDataGridContext } from "./data-grid.context";
import { type DataGridFeatures, dataGridFeatures } from "./data-grid.features";

type Props = {
  class?: ClassValue;
  children?: import("svelte").Snippet;
  features?: DataGridFeatures;
  columnResizeMode?: "onChange" | "onEnd";
} & Omit<TableOptions<DataGridFeatures, TData>, "features"> &
  BaseDataGridProps;

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

const table = createTable(
  reactiveTableOptions(
    {
      get columnResizeMode() {
        return columnResizeMode;
      },
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

setDataGridContext({
  get slots() {
    return slots;
  },
  get table() {
    return table as unknown as TableType<DataGridFeatures, RowData>;
  },
});
</script>

<div
  class={slots.base({ class: cn(className) })}
  data-part="root"
  data-scope="data-grid"
>
  {@render children?.()}
</div>
