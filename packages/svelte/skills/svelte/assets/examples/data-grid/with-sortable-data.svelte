<script lang="ts">
import type { SortingState } from "@pisagor/svelte/data-grid";
import { DataGrid, dataGridFeatures } from "@pisagor/svelte/data-grid";
import { Table } from "@pisagor/svelte/table";
import { allUsers, userColumns } from "./helpers";

const columns = [...userColumns];
let sorting = $state<SortingState>([{ desc: false, id: "name" }]);
</script>

<div class="flex w-full flex-col gap-3">
  <div class="rounded-xl border bg-muted/20 p-3">
    <DataGrid
      {columns}
      data={allUsers}
      features={dataGridFeatures}
      onSortingChange={(updater) => {
        sorting = typeof updater === "function" ? updater(sorting) : updater;
      }}
      {sorting}
    >
      <DataGrid.Toolbar>
        <p class="font-medium text-sm">
          Sorted by {sorting[0]?.id ?? "none"}
          {sorting[0]?.desc ? " (desc)" : " (asc)"}
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
