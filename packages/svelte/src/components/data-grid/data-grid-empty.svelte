<script lang="ts">
  import type { ComponentProps } from "svelte";
  import { useLocale } from "../provider/context";
  import { Table } from "../table";
  import { useDataGridContext } from "./data-grid.context";

  type Props = ComponentProps<typeof Table.Row> & {
    colSpan?: number;
    children?: import("svelte").Snippet;
  };

  let { children, colSpan, class: className, ...rest }: Props = $props();
  const { slots, table } = useDataGridContext();
  const { m } = useLocale();
  const span = $derived(colSpan ?? table.getAllColumns().length);
</script>

<Table.Row {...rest} class={className} data-part="empty" data-scope="data-grid">
  <Table.Cell class={slots.empty()} colspan={span}>
    {#if children}
      {@render children()}
    {:else}
      {m("dataGrid.empty")}
    {/if}
  </Table.Cell>
</Table.Row>
