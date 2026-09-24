<script lang="ts">
import { cn } from "@pisagor/utils";
import type { ComponentProps } from "svelte";
import { Table } from "../components/table";
import { useDataTableRowContext } from "./data-table.context";

type Props = ComponentProps<typeof Table.Row>;
let { class: className, ...rest }: Props = $props();
const { row } = useDataTableRowContext();
</script>

<Table.Row
  {...rest}
  aria-selected={row.getIsSelected()}
  class={cn(className)}
  data-part="row"
  data-scope="data-table"
  data-state={row.getIsSelected() ? "selected" : undefined}
/>
