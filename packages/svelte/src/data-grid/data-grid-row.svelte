<script lang="ts">
import { cn } from "@pisagor/utils";
import type { ComponentProps } from "svelte";
import { Table } from "../components/table";
import { useDataGridRowContext } from "./data-grid.context";

type Props = ComponentProps<typeof Table.Row>;
let { class: className, ...rest }: Props = $props();
const { row } = useDataGridRowContext();
</script>

<Table.Row
  {...rest}
  aria-expanded={row.getCanExpand() ? row.getIsExpanded() : undefined}
  aria-selected={row.getIsSelected()}
  class={cn(row.getIsGrouped() && "bg-muted/40 font-medium", className)}
  data-depth={row.depth}
  data-expanded={row.getIsExpanded() ? "true" : undefined}
  data-grouped={row.getIsGrouped() ? "true" : undefined}
  data-part="row"
  data-scope="data-grid"
  data-state={row.getIsSelected() ? "selected" : undefined}
/>
