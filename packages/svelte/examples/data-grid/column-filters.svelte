<script lang="ts">
import { Table } from "@pisagor/svelte";
import { DataGrid, dataGridFeatures } from "@pisagor/svelte/data-grid";
import type { ColumnFiltersState } from "@tanstack/svelte-table";
import { allUsers, userColumns } from "./helpers";

const columns = userColumns.map((column) => ({
  ...column,
  enableColumnFilter: true,
}));
let columnFilters = $state<ColumnFiltersState>([]);

function onColumnFiltersChange(
  updater:
    | ColumnFiltersState
    | ((prev: ColumnFiltersState) => ColumnFiltersState),
) {
  columnFilters =
    typeof updater === "function" ? updater(columnFilters) : updater;
}

function onNameFilterInput(e: Event & { currentTarget: HTMLInputElement }) {
  const value = e.currentTarget.value;
  columnFilters = value
    ? [{ id: "name", value }]
    : columnFilters.filter((filter) => filter.id !== "name");
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
        <input
          class="h-8 rounded-md border bg-background px-2 text-sm"
          oninput={onNameFilterInput}
          placeholder="Filter name…"
        >
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
