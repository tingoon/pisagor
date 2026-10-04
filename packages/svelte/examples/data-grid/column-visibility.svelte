<script lang="ts">
import { Checkbox } from "@pisagor/svelte";
import type { VisibilityState } from "@pisagor/svelte/data-grid";
import { DataGrid, dataGridFeatures } from "@pisagor/svelte/data-grid";
import { Table } from "@pisagor/svelte/table";
import { allUsers, userColumns } from "./helpers";

const columns = [...userColumns];
let columnVisibility = $state<VisibilityState>({ email: false });
</script>

<div class="flex w-full flex-col gap-3">
  <div class="rounded-xl border bg-muted/20 p-3">
    <DataGrid
      {columns}
      data={allUsers.slice(0, 8)}
      features={dataGridFeatures}
      onColumnVisibilityChange={(updater) => {
        columnVisibility =
          typeof updater === "function" ? updater(columnVisibility) : updater;
      }}
      state={{ columnVisibility }}
    >
      <DataGrid.Toolbar class="flex flex-wrap gap-3">
        <p class="font-medium text-sm">Toggle columns</p>
        {#each columns as column}
          {@const id = "accessorKey" in column ? String(column.accessorKey) : column.id}
          <div class="flex items-center gap-2 text-sm">
            <Checkbox
              aria-label={`Toggle ${"header" in column ? column.header : id}`}
              checked={columnVisibility[id] !== false}
              onCheckedChange={({ checked }) =>
                (columnVisibility = { ...columnVisibility, [id]: checked === true })}
            />
            <span>{"header" in column ? column.header : id}</span>
          </div>
        {/each}
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
