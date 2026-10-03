<script lang="ts">
import { DataGrid, dataGridFeatures } from "@pisagor/svelte/data-grid";
import { Table } from "@pisagor/svelte/table";
import type { ColumnFiltersState } from "@tanstack/svelte-table";
import { allUsers, userColumns } from "./helpers";

const columns = userColumns.map((column) => ({
  ...column,
  enableColumnFilter: true,
}));
let columnFilters = $state<ColumnFiltersState>([]);
</script>

<div class="flex w-full flex-col gap-3">
  <div class="rounded-xl border bg-muted/20 p-3">
    <DataGrid
      {columns}
      data={allUsers}
      features={dataGridFeatures}
      onColumnFiltersChange={(updater) => {
        columnFilters = typeof updater === "function" ? updater(columnFilters) : updater;
      }}
      state={{ columnFilters }}
    >
      <DataGrid.Toolbar class="flex flex-wrap gap-2">
        <input
          class="h-8 rounded-md border bg-background px-2 text-sm"
          oninput={(e) => {
            const value = e.currentTarget.value;
            columnFilters = value
              ? [{ id: "name", value }]
              : columnFilters.filter((filter) => filter.id !== "name");
          }}
          placeholder="Filter name…"
        />
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
