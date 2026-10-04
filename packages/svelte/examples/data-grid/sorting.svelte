<script lang="ts">
import { Table } from "@pisagor/svelte";
import type { SortingState } from "@pisagor/svelte/data-grid";
import { DataGrid, dataGridFeatures } from "@pisagor/svelte/data-grid";

const data = [
  { id: "1", name: "Ada", role: "Admin" },
  { id: "2", name: "Alan", role: "Editor" },
  { id: "3", name: "Grace", role: "Viewer" },
];

const columns = [
  { accessorKey: "name", enableSorting: true, header: "Name" },
  { accessorKey: "role", enableSorting: true, header: "Role" },
];

let sorting = $state<SortingState>([{ desc: false, id: "name" }]);
</script>

<DataGrid
  {columns}
  {data}
  features={dataGridFeatures}
  onSortingChange={(updater) => {
    sorting = typeof updater === "function" ? updater(sorting) : updater;
  }}
  {sorting}
>
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
