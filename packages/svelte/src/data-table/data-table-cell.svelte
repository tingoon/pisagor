<script lang="ts">
import { FlexRender } from "@tanstack/svelte-table";
import type { ComponentProps } from "svelte";
import { Table } from "../components/table";
import { useDataTableRowContext } from "./data-table.context";

type Props = ComponentProps<typeof Table.Cell> & {
  columnId?: string;
  children?: import("svelte").Snippet;
};

let { columnId, children, class: className, ...rest }: Props = $props();
const { row } = useDataTableRowContext();
</script>

{#if columnId}
  {@const cell = row.getVisibleCells().find((item) => item.column.id === columnId)}
  {#if cell}
    <Table.Cell {...rest} class={className} data-part="cell" data-scope="data-table">
      {#if children}
        {@render children()}
      {:else}
        <FlexRender {cell} />
      {/if}
    </Table.Cell>
  {/if}
{:else}
  {#each row.getVisibleCells() as cell (cell.id)}
    <Table.Cell {...rest} class={className} data-part="cell" data-scope="data-table">
      <FlexRender {cell} />
    </Table.Cell>
  {/each}
{/if}
