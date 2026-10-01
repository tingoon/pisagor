<script lang="ts">
import type { PaginationState } from "@pisagor/svelte/data-grid";
import { DataGrid, dataGridFeatures } from "@pisagor/svelte/data-grid";
import { Pagination } from "@pisagor/svelte/pagination";
import { Table } from "@pisagor/svelte/table";
import { allUsers, userColumns } from "./helpers";

const columns = [...userColumns];
let pagination = $state<PaginationState>({ pageIndex: 0, pageSize: 8 });
</script>

<div class="flex w-full flex-col gap-3">
  <div class="rounded-xl border bg-muted/20 p-3">
    <DataGrid
      {columns}
      data={allUsers}
      features={dataGridFeatures}
      onPaginationChange={(updater) => {
        pagination = typeof updater === "function" ? updater(pagination) : updater;
      }}
      state={{ pagination }}
    >
      <DataGrid.Toolbar>
        <p class="font-medium text-sm">Paginated directory</p>
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
      <div class="mt-3 flex justify-end">
        <Pagination
          count={allUsers.length}
          onPageChange={(details) =>
            (pagination = { ...pagination, pageIndex: details.page - 1 })}
          page={pagination.pageIndex + 1}
          pageSize={pagination.pageSize}
        />
      </div>
    </DataGrid>
  </div>
</div>
