<script lang="ts">
import { Button, Table } from "@pisagor/svelte";
import { DataGrid, dataGridFeatures } from "@pisagor/svelte/data-grid";
import type { ColumnFiltersState } from "@tanstack/svelte-table";
import { allUsers, userColumns } from "./helpers";

const columns = userColumns.map((column) => ({
  ...column,
  enableColumnFilter: true,
}));
let columnFilters = $state<ColumnFiltersState>([
  { id: "role", value: "Admin" },
  { id: "status", value: "active" },
]);

function onColumnFiltersChange(
  updater:
    | ColumnFiltersState
    | ((prev: ColumnFiltersState) => ColumnFiltersState),
) {
  columnFilters =
    typeof updater === "function" ? updater(columnFilters) : updater;
}
</script>

<div class="flex w-full flex-col gap-3">
  <div class="rounded-xl border bg-muted/20 p-3">
    <DataGrid
      {columns}
      data={allUsers}
      features={dataGridFeatures}
      {onColumnFiltersChange}
      state={{ columnFilters }}
    >
      <DataGrid.Toolbar class="flex flex-wrap gap-2">
        {#each columnFilters as filter}
          <Button
            onClick={() =>
              (columnFilters = columnFilters.filter(
                (item) => item.id !== filter.id,
              ))}
            size="xs"
            variant="outline"
          >
            {filter.id}: {String(filter.value)} ×
          </Button>
        {/each}
        {#if columnFilters.length === 0}
          <span class="text-muted-foreground text-sm">No active filters</span>
        {/if}
      </DataGrid.Toolbar>
      <Table>
        <Table.Header>
          <DataGrid.Header>
            <DataGrid.HeaderRow>
              <DataGrid.Head />
            </DataGrid.HeaderRow>
          </DataGrid.Header>
        </Table.Header>
        <Table.Body>
          <DataGrid.Body>
            {#snippet empty()}
              <DataGrid.Empty />
            {/snippet}
            <DataGrid.Row>
              <DataGrid.Cell />
            </DataGrid.Row>
          </DataGrid.Body>
        </Table.Body>
      </Table>
    </DataGrid>
  </div>
</div>
