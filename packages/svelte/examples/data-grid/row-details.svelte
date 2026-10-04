<script lang="ts">
import { Table } from "@pisagor/svelte";
import { DataGrid, dataGridFeatures } from "@pisagor/svelte/data-grid";
import type { ExpandedState } from "@tanstack/svelte-table";
import { allUsers, userColumns } from "./helpers";

const columns = [...userColumns];
let expanded = $state<ExpandedState>({});
</script>

<div class="flex w-full flex-col gap-3">
  <div class="rounded-xl border bg-muted/20 p-3">
    <DataGrid
      {columns}
      data={allUsers.slice(0, 8)}
      features={dataGridFeatures}
      getRowCanExpand={() => true}
      getRowId={(row) => row.id}
      onExpandedChange={(updater) => {
        expanded = typeof updater === "function" ? updater(expanded) : updater;
      }}
      state={{ expanded }}
    >
      <DataGrid.Toolbar>
        <p class="font-medium text-sm">Click a row chevron pattern via expand state</p>
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
