<script lang="ts">
import { Table } from "@pisagor/svelte";
import { DataGrid, dataGridFeatures } from "@pisagor/svelte/data-grid";

type Order = { id: string; product: string; qty: number; total: number };

const data: Order[] = [
  { id: "1", product: "Pro plan", qty: 3, total: 147 },
  { id: "2", product: "Team seats", qty: 12, total: 288 },
  { id: "3", product: "Add-on storage", qty: 2, total: 40 },
];

const columns = [
  { accessorKey: "product", header: "Product" },
  { accessorKey: "qty", header: "Qty" },
  { accessorKey: "total", header: "Total" },
];

const grandTotal = data.reduce((sum, row) => sum + row.total, 0);
</script>

<div class="flex w-full flex-col gap-3">
  <div class="rounded-xl border bg-muted/20 p-3">
    <DataGrid {columns} {data} features={dataGridFeatures}>
      <DataGrid.Toolbar>
        <p class="font-medium text-sm">Orders</p>
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
      <DataGrid.Footer>
        <Table>
          <Table.Footer>
            <Table.Row>
              <Table.Cell class="font-medium">Grand total</Table.Cell>
              <Table.Cell />
              <Table.Cell class="font-medium">${grandTotal.toFixed(2)}</Table.Cell>
            </Table.Row>
          </Table.Footer>
        </Table>
      </DataGrid.Footer>
    </DataGrid>
  </div>
</div>
