<script lang="ts">
import { useDataGridContext } from "./data-grid.context";
import DataGridHeaderGroupProvider from "./data-grid-header-group-provider.svelte";

type Props = { children?: import("svelte").Snippet };
let { children }: Props = $props();
const { table } = useDataGridContext();
const headerGroups = $derived(table.getHeaderGroups());
</script>

{#each headerGroups as headerGroup (headerGroup.id)}
  <DataGridHeaderGroupProvider {headerGroup}> {@render children?.()} </DataGridHeaderGroupProvider>
{/each}
