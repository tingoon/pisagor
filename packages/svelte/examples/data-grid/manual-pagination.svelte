<script lang="ts">
import { Pagination, Table } from "@pisagor/svelte";
import type { PaginationState } from "@pisagor/svelte/data-grid";
import { DataGrid, dataGridFeatures } from "@pisagor/svelte/data-grid";
import { allUsers, userColumns } from "./helpers";

const columns = [...userColumns];
let pagination = $state<PaginationState>({ pageIndex: 0, pageSize: 6 });
const pageData = $derived(
  allUsers.slice(
    pagination.pageIndex * pagination.pageSize,
    pagination.pageIndex * pagination.pageSize + pagination.pageSize,
  ),
);
</script>

<div class="flex w-full flex-col gap-3">
  <div class="rounded-xl border bg-muted/20 p-3">
    <DataGrid
      {columns}
      data={pageData}
      features={dataGridFeatures}
      manualPagination
      onPaginationChange={(updater) => {
        pagination = typeof updater === "function" ? updater(pagination) : updater;
      }}
      pageCount={Math.ceil(allUsers.length / pagination.pageSize)}
      state={{ pagination }}
    >
      <DataGrid.Toolbar>
        <p class="font-medium text-sm">Manual (server-style) pagination</p>
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
