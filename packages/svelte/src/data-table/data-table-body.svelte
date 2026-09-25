<script lang="ts">
import { useDataTableContext } from "./data-table.context";
import DataTableRowProvider from "./data-table-row-provider.svelte";

type Props = {
  children?: import("svelte").Snippet;
  empty?: import("svelte").Snippet;
};

let { children, empty }: Props = $props();
const { table } = useDataTableContext();
const rows = $derived(table.getRowModel().rows);
</script>

{#if rows.length > 0}
  {#each rows as row (row.id)}
    <DataTableRowProvider {row}> {@render children?.()} </DataTableRowProvider>
  {/each}
{:else}
  {@render empty?.()}
{/if}
