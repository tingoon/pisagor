<script lang="ts">
import type { RowSelectionState } from "@pisagor/svelte/data-grid";
import { DataGrid, dataGridFeatures } from "@pisagor/svelte/data-grid";
import { Table } from "@pisagor/svelte/table";
import { allUsers, userColumns } from "./helpers";

const columns = [...userColumns];
let rowSelection = $state<RowSelectionState>({ "1": true, "2": true });
let globalFilter = $state("");
</script>

<div class="flex w-full flex-col gap-3">
  <div class="rounded-xl border bg-muted/20 p-3">
    <DataGrid
      {columns}
      data={allUsers}
      enableRowSelection
      features={dataGridFeatures}
      getRowId={(row) => row.id}
      globalFilter={globalFilter}
      onGlobalFilterChange={(value) => (globalFilter = value)}
      onRowSelectionChange={(updater) => {
        rowSelection = typeof updater === "function" ? updater(rowSelection) : updater;
      }}
      state={{ globalFilter, rowSelection }}
    >
      <DataGrid.Toolbar class="flex flex-wrap items-center gap-3">
        <input
          class="h-8 rounded-md border bg-background px-2 text-sm"
          oninput={(e) => (globalFilter = e.currentTarget.value)}
          placeholder="Filter all columns…"
          value={globalFilter}
        />
        <p class="text-muted-foreground text-sm">
          Selected {Object.values(rowSelection).filter(Boolean).length}
        </p>
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
