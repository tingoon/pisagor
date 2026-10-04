<script lang="ts">
import { Table } from "@pisagor/svelte";
import { DataGrid, dataGridFeatures } from "@pisagor/svelte/data-grid";

const data = [
  { id: "1", name: "Ada", role: "Admin" },
  { id: "2", name: "Alan", role: "Editor" },
];

const columns = [
  { accessorKey: "name", header: "Name" },
  { accessorKey: "role", header: "Role" },
];

let loading = $state(true);
</script>

<div class="flex flex-col gap-3">
  <label class="flex items-center gap-2 text-sm">
    <input type="checkbox" bind:checked={loading} />
    Loading
  </label>
  <DataGrid {columns} {data} features={dataGridFeatures} {loading}>
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
