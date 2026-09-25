<script lang="ts">
import { cn } from "@pisagor/utils";
import { FlexRender } from "@tanstack/svelte-table";
import type { ComponentProps } from "svelte";
import { Table } from "../components/table";
import { useDataGridContext, useDataGridHeaderGroupContext } from "./data-grid.context";
import DataGridColumnResizer from "./data-grid-column-resizer.svelte";
import DataGridHeaderCellProvider from "./data-grid-header-cell-provider.svelte";

type Props = ComponentProps<typeof Table.Head> & {
  columnId?: string;
  filter?: boolean;
  children?: import("svelte").Snippet;
};

let { columnId, filter = false, children, class: className, style, ...rest }: Props = $props();
const { headerGroup } = useDataGridHeaderGroupContext();
const { slots, table } = useDataGridContext();
const sizingEnabled = $derived(Boolean(table.options.enableColumnResizing));

function sizeStyle(column: { columnDef: { minSize?: number }; getSize: () => number }) {
  if (!sizingEnabled) return undefined;
  return `min-width: ${column.columnDef.minSize}px; width: ${column.getSize()}px`;
}
</script>

{#if columnId}
  {@const header = headerGroup.headers.find((item) => item.column.id === columnId)}
  {#if header}
    <DataGridHeaderCellProvider {header}>
      <Table.Head
        {...rest}
        class={cn(sizingEnabled && "relative", filter && slots.filterHead(), className)}
        data-part="head"
        data-scope="data-grid"
        style={[sizeStyle(header.column), style].filter(Boolean).join("; ")}
      >
        {#if children}
          {@render children()}
        {:else}
          <FlexRender {header} />
          {#if sizingEnabled}
            <DataGridColumnResizer />
          {/if}
        {/if}
      </Table.Head>
    </DataGridHeaderCellProvider>
  {/if}
{:else}
  {#each headerGroup.headers as header (header.id)}
    <DataGridHeaderCellProvider {header}>
      <Table.Head
        {...rest}
        class={cn(sizingEnabled && "relative", filter && slots.filterHead(), className)}
        data-part="head"
        data-scope="data-grid"
        style={[sizeStyle(header.column), style].filter(Boolean).join("; ")}
      >
        <FlexRender {header} />
        {#if sizingEnabled}
          <DataGridColumnResizer />
        {/if}
      </Table.Head>
    </DataGridHeaderCellProvider>
  {/each}
{/if}
