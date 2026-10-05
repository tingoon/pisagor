<script lang="ts">
import { Checkbox, Table } from "@pisagor/svelte";
import type { VisibilityState } from "@pisagor/svelte/data-grid";
import { DataGrid, dataGridFeatures } from "@pisagor/svelte/data-grid";
import { allUsers, userColumns } from "./helpers";

const columns = [...userColumns];
let columnVisibility = $state<VisibilityState>({ email: false });

function onColumnVisibilityChange(
  updater: VisibilityState | ((prev: VisibilityState) => VisibilityState),
) {
  columnVisibility =
    typeof updater === "function" ? updater(columnVisibility) : updater;
}

function onColumnCheckedChange(id: string, checked: boolean | "indeterminate") {
  columnVisibility = { ...columnVisibility, [id]: checked === true };
}
</script>

<div class="flex w-full flex-col gap-3">
  <div class="rounded-xl border bg-muted/20 p-3">
    <DataGrid
      {columns}
      data={allUsers.slice(0, 8)}
      features={dataGridFeatures}
      {onColumnVisibilityChange}
      state={{ columnVisibility }}
    >
      <DataGrid.Toolbar class="flex flex-wrap gap-3">
        <p class="font-medium text-sm">Toggle columns</p>
        {#each columns as column}
          {@const id = String(column.accessorKey)}
          <div class="flex items-center gap-2 text-sm">
            <Checkbox
              aria-label={`Toggle ${column.header}`}
              checked={columnVisibility[id] !== false}
              onCheckedChange={({ checked }) =>
                onColumnCheckedChange(id, checked)}
            />
            <span>{column.header}</span>
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
