<script lang="ts">
import type { ComponentProps } from "svelte";
import { Table } from "../components/table";
import { useDataGridContext } from "./data-grid.context";

type Props = ComponentProps<typeof Table.Row> & {
  colSpan?: number;
  children?: import("svelte").Snippet;
};

let { children, colSpan, class: className, ...rest }: Props = $props();
const { slots, table } = useDataGridContext();
const span = $derived(colSpan ?? table.getAllColumns().length);
</script>

<Table.Row {...rest} class={className} data-part="empty" data-scope="data-grid">
  <Table.Cell class={slots.empty()} colspan={span}>
    {#if children}
      {@render children()}
    {:else}
      No results. Try a different search or clear filters.
    {/if}
  </Table.Cell>
</Table.Row>
