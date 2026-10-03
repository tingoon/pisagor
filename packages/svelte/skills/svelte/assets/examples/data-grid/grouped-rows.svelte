<script lang="ts">
import { DataGrid, dataGridFeatures } from "@pisagor/svelte/data-grid";
import { Table } from "@pisagor/svelte/table";
import type { GroupingState } from "@tanstack/svelte-table";
import { allUsers, userColumns } from "./helpers";

const columns = userColumns.map((column) => ({
  ...column,
  enableGrouping: column.accessorKey === "department" || column.accessorKey === "role",
}));
let grouping = $state<GroupingState>(["department"]);
</script>

<div class="flex w-full flex-col gap-3">
  <div class="rounded-xl border bg-muted/20 p-3">
    <DataGrid
      {columns}
      data={allUsers.slice(0, 24)}
      features={dataGridFeatures}
      onGroupingChange={(updater) => {
        grouping = typeof updater === "function" ? updater(grouping) : updater;
      }}
      state={{ grouping }}
    >
      <DataGrid.Toolbar>
        <p class="font-medium text-sm">Grouped by department</p>
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
