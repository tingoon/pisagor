<script lang="ts">
import { FlexRender } from "@tanstack/svelte-table";
import type { ComponentProps } from "svelte";
import { Table } from "../components/table";
import { useDataGridContext, useDataGridRowContext } from "./data-grid.context";

type Props = ComponentProps<typeof Table.Cell> & {
  columnId?: string;
  children?: import("svelte").Snippet;
};

let { columnId, children, class: className, style, ...rest }: Props = $props();
const { table } = useDataGridContext();
const { row } = useDataGridRowContext();
const sizingEnabled = $derived(Boolean(table.options.enableColumnResizing));

function sizeStyle(column: { columnDef: { minSize?: number }; getSize: () => number }) {
  if (!sizingEnabled) return undefined;
  return `min-width: ${column.columnDef.minSize}px; width: ${column.getSize()}px`;
}
</script>

{#if columnId}
  {@const cell = row.getVisibleCells().find((item: any) => item.column.id === columnId)}
  {#if cell}
    <Table.Cell
      {...rest}
      class={className}
      data-part="cell"
      data-scope="data-grid"
      style={[sizeStyle(cell.column), style].filter(Boolean).join("; ")}
    >
      {#if children}
        {@render children()}
      {:else}
        <FlexRender {cell} />
      {/if}
    </Table.Cell>
  {/if}
{:else}
  {#each row.getVisibleCells() as cell (cell.id)}
    <Table.Cell
      {...rest}
      class={className}
      data-part="cell"
      data-scope="data-grid"
      style={[sizeStyle(cell.column), style].filter(Boolean).join("; ")}
    >
      <FlexRender {cell} />
    </Table.Cell>
  {/each}
{/if}
