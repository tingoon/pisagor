<script lang="ts">
import { Table } from "../../components/table";
import { DataTable, dataTableFeatures } from "..";

const data = [
  { email: "ada@example.com", id: "1", name: "Ada Lovelace" },
  { email: "alan@example.com", id: "2", name: "Alan Turing" },
];

const columns = [
  { accessorKey: "name", header: "Name" },
  { accessorKey: "email", header: "Email" },
];
</script>

<DataTable {columns} {data} features={dataTableFeatures}>
  <Table>
    <Table.Header>
      <DataTable.Header>
        <DataTable.HeaderRow>
          <DataTable.Head />
        </DataTable.HeaderRow>
      </DataTable.Header>
    </Table.Header>
    <Table.Body>
      <DataTable.Body>
        {#snippet empty()}
          <DataTable.Empty />
        {/snippet}
        <DataTable.Row>
          <DataTable.Cell />
        </DataTable.Row>
      </DataTable.Body>
    </Table.Body>
  </Table>
</DataTable>
