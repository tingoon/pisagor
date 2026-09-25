<script lang="ts">
import { Table } from "../../components/table";
import { DataGrid, dataGridFeatures } from "..";

const data = [
  { id: "1", name: "Ada", role: "Admin" },
  { id: "2", name: "Alan", role: "Editor" },
];

const columns = [
  { accessorKey: "name", header: "Name" },
  { accessorKey: "role", header: "Role" },
];
</script>

<DataGrid {columns} {data} features={dataGridFeatures}>
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
