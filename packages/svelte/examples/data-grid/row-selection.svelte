<script lang="ts">
import { Table } from "@pisagor/svelte";
import type { RowSelectionState } from "@pisagor/svelte/data-grid";
import { DataGrid, dataGridFeatures } from "@pisagor/svelte/data-grid";
import { allUsers, type User, userColumns } from "./helpers";

const columns = [{ header: "", id: "select", size: 40 }, ...userColumns];
let rowSelection = $state<RowSelectionState>({});
const selectedCount = $derived(
  Object.keys(rowSelection).filter((k) => rowSelection[k]).length,
);

function onRowSelectionChange(
  updater: RowSelectionState | ((prev: RowSelectionState) => RowSelectionState),
) {
  rowSelection =
    typeof updater === "function" ? updater(rowSelection) : updater;
}
</script>

<div class="flex w-full flex-col gap-3">
  <div class="rounded-xl border bg-muted/20 p-3">
    <DataGrid
      {columns}
      data={allUsers.slice(0, 12)}
      enableRowSelection
      features={dataGridFeatures}
      getRowId={(row: User) => row.id}
      {onRowSelectionChange}
      state={{ rowSelection }}
    >
      <DataGrid.Toolbar>
        <p class="font-medium text-sm">Selected: {selectedCount}</p>
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
