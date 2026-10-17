<script module lang="ts">
  import source from "./row-details.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { Table } from "@pisagor/svelte";
  import { DataGrid, dataGridFeatures } from "@pisagor/svelte/data-grid";
  import type { ExpandedState } from "@tanstack/svelte-table";
  import { allUsers, type User, userColumns } from "./helpers";

  const columns = [...userColumns];
  let expanded = $state<ExpandedState>({});

  function onExpandedChange(
    updater: ExpandedState | ((prev: ExpandedState) => ExpandedState),
  ) {
    expanded = typeof updater === "function" ? updater(expanded) : updater;
  }
</script>

<div class="flex w-full flex-col gap-3">
  <div class="bg-muted/20 rounded-xl border p-3">
    <DataGrid
      {columns}
      data={allUsers.slice(0, 8)}
      features={dataGridFeatures}
      getRowCanExpand={() => true}
      getRowId={(row: User) => row.id}
      {onExpandedChange}
      state={{ expanded }}
    >
      <DataGrid.Toolbar>
        <p class="text-sm font-medium">
          Click a row chevron pattern via expand state
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
