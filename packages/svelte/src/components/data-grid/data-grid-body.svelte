<script lang="ts">
  import type { DataGridBodyContract } from "@pisagor/contracts";
  import { useDataGridContext } from "./data-grid.context";
  import DataGridRowProvider from "./data-grid-row-provider.svelte";

  type Props = {
    children?: import("svelte").Snippet;
    empty?: import("svelte").Snippet;
  } & DataGridBodyContract;

  let { children, empty }: Props = $props();
  const { table } = useDataGridContext();
  const rows = $derived(table.getRowModel().rows);
</script>

{#if rows.length > 0}
  {#each rows as row (row.id)}
    <DataGridRowProvider {row}>{@render children?.()}</DataGridRowProvider>
  {/each}
{:else}
  {@render empty?.()}
{/if}
