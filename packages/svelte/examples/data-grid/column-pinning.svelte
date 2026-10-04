<script lang="ts">
import { Table } from "@pisagor/svelte";
import { DataGrid, dataGridFeatures } from "@pisagor/svelte/data-grid";
import type { ColumnPinningState } from "@tanstack/svelte-table";
import { allUsers, userColumns } from "./helpers";

const columns = [...userColumns];
let columnPinning = $state<ColumnPinningState>({
  left: ["name"],
  right: ["status"],
});

function onColumnPinningChange(
  updater:
    | ColumnPinningState
    | ((prev: ColumnPinningState) => ColumnPinningState),
) {
  columnPinning =
    typeof updater === "function" ? updater(columnPinning) : updater;
}
</script>

<div class="flex w-full flex-col gap-3">
  <div class="overflow-x-auto rounded-xl border bg-muted/20 p-3">
    <DataGrid
      {columns}
      data={allUsers.slice(0, 8)}
      features={dataGridFeatures}
      {onColumnPinningChange}
      state={{ columnPinning }}
    >
      <DataGrid.Toolbar>
        <p class="font-medium text-sm">Name pinned left, status pinned right</p>
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
