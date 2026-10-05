<script lang="ts">
import type { ComponentProps } from "svelte";
import { Table } from "../components/table";
import { useDataTableRowContext } from "./data-table.context";

let { class: className, ...rest }: ComponentProps<typeof Table.Row> = $props();
const { row } = useDataTableRowContext();
</script>

<Table.Row
  {...rest}
  aria-selected={row.getIsSelected()}
  class={className}
  data-part="row"
  data-scope="data-table"
  data-state={row.getIsSelected() ? "selected" : undefined}
/>
