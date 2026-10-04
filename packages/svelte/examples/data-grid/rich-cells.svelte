<script lang="ts">
import { Table } from "@pisagor/svelte";
/**
 * JSX Avatar/Badge cell factories from React/Solid do not port cleanly into
 * ColumnDef `cell` for Svelte (need components / snippets). This example keeps
 * the same columns/data shape; compose rich UI in the row template when needed.
 */
import { DataGrid, dataGridFeatures } from "@pisagor/svelte/data-grid";
import { allUsers } from "./helpers";

const columns = [
  { accessorKey: "name", header: "Name" },
  { accessorKey: "email", header: "Email" },
  { accessorKey: "role", header: "Role" },
  { accessorKey: "status", header: "Status" },
  { accessorKey: "department", header: "Department" },
];
</script>

<div class="flex w-full flex-col gap-3">
  <div class="rounded-xl border bg-muted/20 p-3">
    <DataGrid {columns} data={allUsers.slice(0, 6)} features={dataGridFeatures}>
      <DataGrid.Toolbar>
        <p class="font-medium text-sm">
          Directory (custom cell components: compose in template / FlexRender
          components)
        </p>
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
