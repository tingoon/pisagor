<script lang="ts">
  import { Table } from "@pisagor/svelte";
  import { DataGrid, dataGridFeatures } from "@pisagor/svelte/data-grid";
  import { allUsers, userColumns } from "./helpers";

  const columns = [...userColumns];
  const data = Array.from({ length: 200 }, (_, index) => ({
    ...allUsers[index % allUsers.length],
    email: `user${index + 1}@example.com`,
    id: String(index + 1),
    name: `User ${index + 1}`,
  }));
</script>

<div class="flex w-full flex-col gap-3">
  <div class="bg-muted/20 rounded-xl border p-3">
    <DataGrid {columns} {data} features={dataGridFeatures}>
      <DataGrid.Toolbar>
        <p class="text-sm font-medium">Virtualized body (200 rows)</p>
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
          <DataGrid.VirtualBody estimateSize={40} viewportHeight="24rem">
            {#snippet empty()}
              <DataGrid.Empty />
            {/snippet}
            <DataGrid.Row>
              <DataGrid.Cell />
            </DataGrid.Row>
          </DataGrid.VirtualBody>
        </Table.Body>
      </Table>
    </DataGrid>
  </div>
</div>
