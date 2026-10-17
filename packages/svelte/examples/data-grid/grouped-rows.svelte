<script module lang="ts">
  import source from "./grouped-rows.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { Table } from "@pisagor/svelte";
  import { DataGrid, dataGridFeatures } from "@pisagor/svelte/data-grid";
  import type { GroupingState } from "@tanstack/svelte-table";
  import { allUsers, userColumns } from "./helpers";

  const columns = userColumns.map((column) => ({
    ...column,
    enableGrouping:
      column.accessorKey === "department" || column.accessorKey === "role",
  }));
  let grouping = $state<GroupingState>(["department"]);

  function onGroupingChange(
    updater: GroupingState | ((prev: GroupingState) => GroupingState),
  ) {
    grouping = typeof updater === "function" ? updater(grouping) : updater;
  }
</script>

<div class="flex w-full flex-col gap-3">
  <div class="bg-muted/20 rounded-xl border p-3">
    <DataGrid
      {columns}
      data={allUsers.slice(0, 24)}
      features={dataGridFeatures}
      {onGroupingChange}
      state={{ grouping }}
    >
      <DataGrid.Toolbar>
        <p class="text-sm font-medium">Grouped by department</p>
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
