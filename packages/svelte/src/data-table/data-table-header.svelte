<script lang="ts">
import { useDataTableContext } from "./data-table.context";
import DataTableHeaderGroupProvider from "./data-table-header-group-provider.svelte";

type Props = { children?: import("svelte").Snippet };
let { children }: Props = $props();
const { table } = useDataTableContext();
const headerGroups = $derived(table.getHeaderGroups());
</script>

{#each headerGroups as headerGroup (headerGroup.id)}
  <DataTableHeaderGroupProvider {headerGroup}>
    {@render children?.()}
  </DataTableHeaderGroupProvider>
{/each}
