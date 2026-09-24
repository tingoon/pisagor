<script lang="ts">
import type { ComponentProps } from "svelte";
import { Table } from "../components/table";
import { useDataTableContext } from "./data-table.context";

type Props = ComponentProps<typeof Table.Row> & {
  colSpan?: number;
  children?: import("svelte").Snippet;
};

let { children, colSpan, class: className, ...rest }: Props = $props();
const { slots, table } = useDataTableContext();
const span = $derived(colSpan ?? table.getAllColumns().length);
</script>

<Table.Row {...rest} class={className} data-part="empty" data-scope="data-table">
  <Table.Cell class={slots.empty()} colspan={span}>
    {#if children}
      {@render children()}
    {:else}
      No results.
    {/if}
  </Table.Cell>
</Table.Row>
