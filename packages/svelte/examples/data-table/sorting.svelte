<script lang="ts">
import { Table } from "@pisagor/svelte";
import type { SortingState } from "@pisagor/svelte/data-table";
import { DataTable } from "@pisagor/svelte/data-table";

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

function onSortingChange(
  updater: SortingState | ((prev: SortingState) => SortingState),
) {
  sorting = typeof updater === "function" ? updater(sorting) : updater;
}
</script>

<DataTable {columns} {data} {onSortingChange} state={{ sorting }}>
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
