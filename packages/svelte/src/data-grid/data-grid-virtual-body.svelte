<script lang="ts">
import { createVirtualizer } from "@tanstack/svelte-virtual";
import { onMount } from "svelte";
import { useDataGridContext } from "./data-grid.context";
import DataGridRowProvider from "./data-grid-row-provider.svelte";

type Props = {
  children?: import("svelte").Snippet;
  empty?: import("svelte").Snippet;
  estimateSize?: number;
  overscan?: number;
  viewportHeight?: string;
};

let {
  children,
  empty,
  estimateSize = 40,
  overscan = 8,
  viewportHeight = "24rem",
}: Props = $props();

const { slots, table } = useDataGridContext();
const rows = $derived(table.getRowModel().rows);

let scrollElement = $state<HTMLElement | null>(null);
let anchorEl = $state<HTMLTableRowElement | null>(null);

onMount(() => {
  const wrapper = anchorEl?.closest(
    '[data-scope="table"][data-part="wrapper"]',
  ) as HTMLElement | null;
  scrollElement = wrapper;
  if (wrapper) {
    wrapper.style.height = viewportHeight;
  }
  return () => {
    if (wrapper) wrapper.style.height = "";
  };
});

const rowVirtualizerStore = createVirtualizer({
  get count() {
    return rows.length;
  },
  estimateSize: () => estimateSize,
  getScrollElement: () => scrollElement,
  get overscan() {
    return overscan;
  },
});

// Readable store from tanstack svelte-virtual — subscribe via $ prefix carefully:
// name the binding without colliding with runes.
const virtualizer = $derived($rowVirtualizerStore);
const virtualRows = $derived(virtualizer.getVirtualItems());
const paddingTop = $derived(virtualRows[0]?.start ?? 0);
const paddingBottom = $derived(
  virtualizer.getTotalSize() - (virtualRows[virtualRows.length - 1]?.end ?? 0),
);
</script>

{#if rows.length > 0}
  {#if paddingTop > 0}
    <tr data-part="virtual-spacer" data-scope="data-grid" bind:this={anchorEl}>
      <td colspan={table.getAllColumns().length} style={`height: ${paddingTop}px`}></td>
    </tr>
  {:else}
    <tr class={slots.anchor()} bind:this={anchorEl}></tr>
  {/if}

  {#each virtualRows as virtualRow (virtualRow.key)}
    {@const row = rows[virtualRow.index]}
    {#if row}
      <DataGridRowProvider {row}> {@render children?.()} </DataGridRowProvider>
    {/if}
  {/each}

  {#if paddingBottom > 0}
    <tr data-part="virtual-spacer" data-scope="data-grid">
      <td colspan={table.getAllColumns().length} style={`height: ${paddingBottom}px`}></td>
    </tr>
  {/if}
{:else}
  <tr class={slots.anchor()} bind:this={anchorEl}></tr>
  {@render empty?.()}
{/if}
