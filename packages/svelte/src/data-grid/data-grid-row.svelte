<script lang="ts">
import { cn } from "@pisagor/utils";
import type { ComponentProps } from "svelte";
import { Table } from "../components/table";
import { useDataGridContext, useDataGridRowContext } from "./data-grid.context";

let { class: className, ...rest }: ComponentProps<typeof Table.Row> = $props();
const { slots } = useDataGridContext();
const { row } = useDataGridRowContext();
</script>

<Table.Row
  {...rest}
  aria-expanded={row.getCanExpand() ? row.getIsExpanded() : undefined}
  aria-selected={row.getIsSelected()}
  class={slots.row({ class: cn(className) })}
  data-depth={row.depth}
  data-expanded={row.getIsExpanded() ? "true" : undefined}
  data-grouped={row.getIsGrouped() ? "true" : undefined}
  data-part="row"
  data-scope="data-grid"
  data-state={row.getIsSelected() ? "selected" : undefined}
/>
