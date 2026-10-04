<script lang="ts">
import { DataTable } from "@pisagor/svelte/data-table";
import { Table } from "@pisagor/svelte/table";

const data: Array<{ id: string; name: string; role: string }> = [];
const columns = [
  { accessorKey: "name", header: "Name" },
  { accessorKey: "role", header: "Role" },
];
</script>

<DataTable {columns} {data}>
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
          <DataTable.Empty>No results.</DataTable.Empty>
        {/snippet}
        <DataTable.Row>
          <DataTable.Cell />
        </DataTable.Row>
      </DataTable.Body>
    </Table.Body>
  </Table>
</DataTable>
